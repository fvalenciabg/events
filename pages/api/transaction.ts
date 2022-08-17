// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'Airtable'
import crypto from "crypto"

type Data = {
  message: string,
  data?: object
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	console.log(process.env)
	if(req.method !== "POST"){
		res.status(401).json({ message: 'Not Allowed' })
	}else{
		var base = new Airtable({apiKey: process.env.AIRTABLE_KEY}).base(process.env.AIRTABLE_BASE);

		base('Calendario').find(req.body.event, async function(err, record) {
			if (err) { res.status(422).json({ message: 'Event not found' }); return; }
			var valorPesos = parseInt(record.fields["Valor preventa"]) * req.body.tickets;
			var valorCentavos = valorPesos * 100;
			base('Pagos pasarela').create([
				{
				  "fields": {
					"Evento": [
						req.body.event
					],
					"Cantidad": req.body.tickets,
					"Valor en centavos": valorCentavos,
					"Valor en pesos": valorPesos,
					"Estado": "Pendiente"
				  }
				},

			  ], async function(err, records) {
				if (err) {
					if (err) { res.status(422).json({ message: 'Could not create transaction', data:err }); return; }
				  return;
				}
				records.forEach(async function (transactionRecord: any) {
					var cadenaConcatenada = `${transactionRecord.getId()}${valorCentavos}COP${process.env.WOMPI_INTEG_KEY}`
					// //Ejemplo
					// const encondedText = new TextEncoder().encode(cadenaConcatenada);
					// const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
					// const hashArray = Array.from(new Uint8Array(hashBuffer));
					// const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
					res.status(200).json({ message: 'Success', data:{
						ref:transactionRecord.getId(),
						key:process.env.WOMPI_KEY,
						cents:valorCentavos
						// hash:hashHex
					} })
				});
			  });

		})

	}
}
