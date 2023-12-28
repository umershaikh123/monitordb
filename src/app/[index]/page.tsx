import Image from "next/image"

import Nav from "@/components/Nav"
import { fetchValidatorApiData } from "@/components/api"

import BlockNode from "@/components/BlockNode"
import { log } from "console"
import Router from "next/router"
import { useRouter } from "next/navigation"
// export async function getStaticProps(context: any) {
//   const { validator_index } = context.params
//   console.log("validator_index", validator_index)
//   console.log("context.params", context.params)

//   const apiData = await fetchValidatorApiData(validator_index)
//   console.log("apiData", apiData)

//   return {
//     props: {
//       apiData,
//     },
//     revalidate: 10, // Revalidate data every 10 seconds
//   }
// }

interface ApiDataDisplayProps {
  validator_index?: string // Optional title for the table
}

async function fetchApiData(
  validator_index = "645904"
): Promise<ApiDataDisplayProps> {
  const res = await fetch(
    `http://47.128.81.7:3500/eth/v1/beacon/states/head/validators/${validator_index}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    }
  )

  const data = await res.json()
  return data
}

export default async function Home({ params }: any) {
  // const router = useRouter();
  const validator_index = params.index

  const apiData = await fetchApiData(validator_index)
  console.log("apiData", apiData)

  return (
    <main className="flex min-h-screen flex-col items-center  p-16   border-black">
      <h3 className="text-4xl  font-semibold">Validator Monitoring</h3>

      <div className="flex flex-col justify-center items-center  font-semibold   ">
        {/* <h1 className="text-3xl">Validator Index: {apiData.validator_index}</h1> */}

        {apiData ? (
          <>
            <div className="flex mt-5 space-x-8  ">
              {/* <pre>{JSON.stringify(apiData, null, 2)}</pre> */}
              <div>
                <table className="w-full mt-4 mb-7 text-left">
                  <tr>
                    <th className="text-left text-white px-4">Metric</th>
                    <th className="text-white px-4">Value</th>
                  </tr>
                  <tr>
                    <td className="text-left px-4">index</td>
                    <td className="px-4">{apiData.data.index}</td>
                  </tr>
                  <tr>
                    <td className="text-left px-4">balance</td>
                    <td className="px-4">{apiData.data.balance} </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4">status</td>
                    <td className="px-4">{apiData.data.status}</td>
                  </tr>
                  <tr>
                    <td className="text-left px-4">finalized</td>

                    {apiData.data.finalized ? (
                      <td className="px-4">True</td>
                    ) : (
                      <>
                        <td className="px-4">False</td>
                      </>
                    )}
                  </tr>
                  <tr>
                    <td className="text-left px-4">pubkey</td>
                    <td className="px-4">{apiData.data.validator.pubkey}</td>
                  </tr>
                  <tr>
                    <td className="text-left px-4"> execution_optimistic</td>

                    {apiData.execution_optimistic ? (
                      <td className="px-4">True</td>
                    ) : (
                      <>
                        <td className="px-4">False</td>
                      </>
                    )}
                  </tr>
                  <tr>
                    <td className="text-left px-4">withdrawal_credentials</td>
                    <td className="px-4">
                      {apiData.data.validator.withdrawal_credentials}
                    </td>
                  </tr>{" "}
                  <tr>
                    <td className="text-left px-4">effective_balance</td>
                    <td className="px-4">
                      {apiData.data.validator.effective_balance}
                    </td>
                  </tr>{" "}
                  <tr>
                    <td className="text-left px-4  ">slashed</td>

                    {apiData.data.slashed ? (
                      <td className="px-4">True</td>
                    ) : (
                      <>
                        <td className="px-4">False</td>
                      </>
                    )}
                  </tr>{" "}
                  <tr>
                    <td className="text-left px-4">
                      {" "}
                      activation_eligibility_epoch
                    </td>
                    <td className="px-4">
                      {apiData.data.validator.activation_eligibility_epoch}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4">activation_epoch</td>
                    <td className="px-4">
                      {apiData.data.validator.activation_epoch}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left px-4">exit_epoch</td>
                    <td className="px-4">
                      {apiData.data.validator.exit_epoch}
                    </td>
                  </tr>{" "}
                  <tr>
                    <td className="text-left px-4">withdrawable_epoch</td>
                    <td className="px-4">
                      {apiData.data.validator.withdrawable_epoch}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </>
        ) : (
          <>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </>
        )}
      </div>
    </main>
  )
}
