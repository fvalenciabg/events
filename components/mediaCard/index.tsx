import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LoadingButton from '@mui/lab/LoadingButton';
import PaymentIcon from '@mui/icons-material/Payment';





type MediaCardPropsType = {
  title: string,
  description: string,
  imageUrl: string,
  id: string
  date: string
  price: string
}

export default function MediaCard({title, description, imageUrl, id, date, price}: MediaCardPropsType) {


	const [tickets, setTickets] = React.useState(1);
	const [startingTransaction, setStartingTransaction] = React.useState({ready:false,starting:false,error:false,id:id,price:price,title,date,transactionData:null});

	const handleChange = (event: SelectChangeEvent) => {
		setTickets(event.target.value as string);
	};

	const startTransaction = () => {
		console.log(startingTransaction);
		setStartingTransaction({...startingTransaction,ready:false,starting:true});
		fetch('/api/transaction', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				event:id,
				tickets:tickets
			}),
			}).then(response => response.json())
		  .then(res=>{
			var checkout = new WidgetCheckout({
				currency: 'COP',
				amountInCents: res.data.cents,
				reference: res.data.ref,
				publicKey:res.data.key,
				redirectUrl: 'https://exa.productions/transaction', // Opcional

			  })
			  checkout.open(function(result:any){
				console.log(result);
			  })
			setStartingTransaction({...startingTransaction,ready:true,starting:false, error:false,transactionData:res.data});
		  }).catch(err=>{
			setStartingTransaction({...startingTransaction,ready:false,starting:false, error:true});
		  })
	};


  return (
    <Card >
      <CardMedia
        component="img"
        height="400"
        image={imageUrl}
        alt={title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
		<CardActions
			sx={{ justifyContent: 'center', overflowX: 'auto', paddingTop:3 }}
		 >
		 <Select
          labelId="tickets-label"
          id="tickets"
		  variant={"outlined"}
          value={tickets}
          label="Cantidad"
		  size={"small"}
		  disabled={startingTransaction.starting}
          onChange={handleChange}
			sx={{ marginRight:3 }}

        >
			{Array(10).fill("").map((v,i)=> <MenuItem key={i} value={i+1}>{i+1} Entrada{i>0?"s":""}</MenuItem>)}
        </Select>
		<LoadingButton
			loadingPosition="end"
			endIcon={<PaymentIcon />}
			variant="contained"
			loading={startingTransaction.starting && false}
			color="primary"
			onClick={startTransaction}
		>
			{startingTransaction.starting?"Iniciando":"Pagar"}
		</LoadingButton>


      </CardActions>
	  {startingTransaction.ready??<form></form>}
      </CardContent>
    </Card>
  );
}
