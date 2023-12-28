import Image from "next/image"

import Nav from "@/components/Nav"

import WithdrawNode from "@/components/WithdrawalNode"
import BlockNode from "@/components/BlockNode"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-16   border-black">
      <h3 className="text-4xl  font-semibold">Withdrawls</h3>

      <div className="flex flex-col justify-center items-center  font-semibold   ">
        <h1>state_id = head</h1>
        <h1 className="justify-center  items-center flex text-black mt-4">
          /eth/v1/builder/states/state_id/expected_withdrawals
        </h1>

        <p className=" text-gray-500">
          Get the withdrawals computed from the specified state, that will be
          included in the block that gets built on the specified state.
        </p>
        {/* <WithdrawNode /> */}
      </div>
    </main>
  )
}
