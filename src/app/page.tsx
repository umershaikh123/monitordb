import Image from "next/image"
import Node from "./components/Node"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-16   border-black">
      <h3>Node Monitoring</h3>

      <div className="flex flex-col justify-center items-center text-3xl font-semibold  border-2">
        <div>
          <Node />
        </div>

        <div></div>
      </div>
    </main>
  )
}
