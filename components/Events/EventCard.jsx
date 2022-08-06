import React from "react";
import Link from "next/link";

export default function EventCard({data}) {
	let url;
	if(data.flyer){
		 url = data.flyer[0].url
	}else{
		 url = "";
	}
  return (
    <Link
		href={"/eventos/" + data.id}
	>
		<a href="" className="block overflow-hidden rounded-2xl">
		<img className="object-cover w-full h-56" src={url} alt="" />

		<div className="p-4 bg-gray-900">
			<p className="text-xs text-gray-500">{data.date}</p>

			<h5 className="text-sm text-gray">{data.name}</h5>

			<p className="mt-1 text-xs text-gray-500">{data.price}</p>

		</div>
		</a>


    </Link>
  );
}
