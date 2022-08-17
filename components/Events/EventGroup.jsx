import React from "react";
import EventCard from "./EventCard";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Masonry from '@mui/lab/Masonry';

export default function EventGroup({events}) {
	let eventList = events.map(event=>{
		return <EventCard key={event.id} data={event}></EventCard>

	})

  return (
    <Box>
		<Masonry  columns={{ xs: 1, sm: 2, lg:3, xl:3, xxl:3 }} spacing={2}>{eventList}</Masonry>
    </Box>
  );
}
