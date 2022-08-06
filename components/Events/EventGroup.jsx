import React from "react";
import EventCard from "./EventCard";
export default function EventGroup({events}) {
	console.log(events)
	let eventList = events.map(event=>{
		return <EventCard key={event.id} data={event}></EventCard>

	})
	console.log(eventList);
  return (
    <>
<section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto">
    <div className="relative max-w-3xl mx-auto text-center">
      <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

      <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white">
        Recently Viewed
      </h2>
    </div>

    <div className="grid grid-cols-4 gap-8">
      {eventList}
    </div>

    <div className="mt-4 text-center">
      <button type="button" className="text-xs text-gray-500 underline">Clear Recently Viewed</button>
    </div>
  </div>
</section>

    </>
  );
}
