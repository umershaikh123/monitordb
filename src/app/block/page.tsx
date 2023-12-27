import Image from "next/image"

import Nav from "@/components/Nav"

import BlockNode from "@/components/BlockNode"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-16   border-black">
      <h3 className="text-4xl  font-semibold">Block Monitoring</h3>

      <div className="flex flex-col justify-center items-center  font-semibold   ">
        <h1>block_id = head</h1>
        <h1> /eth/v2/beacon/blocks/block_id</h1>

        <p className=" text-gray-500">
          Retrieves block details for given block id. Depending on Accept header
          it can be returned either as json or as bytes serialized by SSZ
        </p>
        <BlockNode />
      </div>
    </main>
  )
}
