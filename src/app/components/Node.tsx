import { validateHeaderName } from "http"
import next from "next"
import React from "react"

async function api() {
  const res = await fetch("http://47.128.81.7:3500/eth/v1/beacon/genesis", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 },
  })

  const data = res.json()

  return data
}

export default async function Node() {
  const results = await api()
  console.log(results.data)
  return <div className="text-2xl  text-black">{results.data.genesis_time}</div>
}
