import * as React from 'react';
import {NextPage} from "next";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EventGroup from '../../components/Events/EventGroup';

import MediaCard from "../../components/mediaCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



var Airtable = require('airtable');



// This gets called on every request
export async function getServerSideProps() {
	var base = new Airtable({apiKey: 'keydAp20zwpB4qnft'}).base('appLZpcpnbEmYhckJ');
	let data = await base('Calendario').select({
		// Selecting the first 3 records in Formulario de registro de eventos propios de barnaby jones:
		maxRecords: 30,
		view: "websiteEvents"
	}).firstPage().then(result => {
		return {result};
	})
	let parsedData = [];
	data.result.forEach(item => {
		parsedData.push({
			id:item.fields["ID"],
			date:item.fields["Fecha"],
			name:item.fields["Nombre Evento"],
			price:item.fields["Valor preventa"],
			flyer:item.fields["Flyer"] || null,
			available:item.fields["Entradas disponibles"],
			desc:item.fields["Descripción"] || "",
		})
	});
	// Pass data to the page via props
	return { props: { parsedData } }
  }



const Eventos = ({parsedData}) => {
  return (
    <Container maxWidth="lg">

      <Box sx={{ flexGrow: 1, mt: 6 }}>
	 	 <EventGroup events={parsedData}></EventGroup>
      </Box>
    </Container>
  )
}

export default Eventos;
