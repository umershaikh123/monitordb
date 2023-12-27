import Image from "next/image"
import Node from "@/components/Node"
import Nav from "@/components/Nav"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-16   border-black">
      <h3 className="text-4xl  font-semibold">Block Monitoring</h3>

      <div className="flex flex-col justify-center items-center  font-semibold   ">
        <Node />
      </div>
    </main>
  )
}