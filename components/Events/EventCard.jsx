import React from "react";
import Link from "next/link";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MediaCard from "../../components/mediaCard";


export default function EventCard({data}) {
	let url;
	if(data.flyer){
		 url = data.flyer[0].url
	}else{
		 url = "";
	}
  return (
    <Grid item xs={12} sm={6} l={4} xl={4}>
            <MediaCard
              description={data.desc}
              title={data.name}
			  price={data.price}
			  id={data.id}
			  date={data.date}
              imageUrl={url}
            />
          </Grid>
  );
}
