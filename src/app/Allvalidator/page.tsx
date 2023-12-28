import Image from "next/image"
import AllValidatorNode from "@/components/ValidatorNode"
import Nav from "@/components/Nav"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-16   border-black">
      <h3 className="text-4xl  font-semibold">Validator Monitoring</h3>

      <div className="flex flex-col justify-center items-center  font-semibold   ">
        <h1>state_id = head</h1>
        <h1>/eth/v1/beacon/states/state_id/validators</h1>

        <p className=" text-gray-500">
          Returns validator specified by state and id or public key along with
          status and balance.
        </p>
        {/* <AllValidatorNode /> */}
      </div>
    </main>
  )
}
