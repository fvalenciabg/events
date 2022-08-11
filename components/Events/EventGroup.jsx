import React from "react";
import EventCard from "./EventCard";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
export default function EventGroup({events}) {
	console.log(events)
	let eventList = events.map(event=>{
		return <EventCard key={event.id} data={event}></EventCard>

	})
	console.log(eventList);
  return (
    <>
		<Grid container spacing={2} sm={12}>{eventList}</Grid>
    </>
  );
}
