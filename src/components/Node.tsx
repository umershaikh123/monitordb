"use client"

import { validateHeaderName } from "http"
import next from "next"
import React from "react"
import { useState, useEffect, useRef } from "react"

import style from "./Table.module.css"
import { useRouter } from "next/navigation"
// import * as React from "react"
interface ApiDataDisplayProps {
  api?: string // Optional title for the table
}

async function fetchApiData(
  api = "eth/v1/beacon/genesis"
): Promise<ApiDataDisplayProps> {
  const res = await fetch(`http://47.128.81.7:3500/${api}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 },
  })

  const data = await res.json()
  return data
}

export default function Node() {
  // const router = useRouter()

  const state_id = ["head", "genesis", "finalized", "justified"]
  const validator_index = "645904"
  const block_id = "head"
  const apiList = [
    `/eth/v1/beacon/states/${state_id[0]}/validators/${validator_index}`,
    `/eth/v2/beacon/blocks/${block_id}`,
    // `/eth/v2/beacon/states/${state_id}/validator_balances/${validator_index}`,
    // `/eth/v2/beacon/states/${state_id}/validator_exits`,
  ]
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const result1: any = fetchApiData(apiList[0])
  const result2: any = fetchApiData(apiList[1])
  // const result3: any = fetchApiData(apiList[2])
  // const result4: any = fetchApiData(apiList[3])

  console.log("R1 ", result1?.data)
  console.log("R2 ", result2?.data)
  // console.log("R3 ", result3?.data)
  // console.log("R4 ", result4?.data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchApiData(apiList[0])

        console.log("fetchedData", fetchedData)

        // const result1: any = await fetchApiData(apiList[0])
        const result2: any = await fetchApiData(apiList[1])

        console.log("R1 ", result1?.data)
        console.log("R2 ", result2?.data)
        setData(fetchedData)
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchData() // Initial fetch

    // Set up interval for subsequent fetches
    const intervalId = setInterval(fetchData, 5000)
    console.log("data", data)
    // Cleanup function to clear the interval
    return () => clearInterval(intervalId)
  }, [apiList[0]])
  // let index, balance, status
  // if (data) {
  //   const {
  //     data: { index, balance, status },
  //   } = data
  // }

  return (
    <>
      {error ? (
        <p>Error fetching data: {error}</p>
      ) : data ? (
        <div className="flex mt-5 space-x-8  ">
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

          <div>
            <table className="w-full mt-4 mb-7 text-left">
              <tr>
                <th className="text-left text-white px-4">Metric</th>
                <th className="text-white px-4">Value</th>
              </tr>
              <tr>
                <td className="text-left px-4">index</td>
                <td className="px-4">{data.data.index}</td>
              </tr>
              <tr>
                <td className="text-left px-4">balance</td>
                <td className="px-4">{data.data.balance} </td>
              </tr>
              <tr>
                <td className="text-left px-4">status</td>
                <td className="px-4">{data.data.status}</td>
              </tr>
              <tr>
                <td className="text-left px-4">finalized</td>

                {data.data.finalized ? (
                  <td className="px-4">True</td>
                ) : (
                  <>
                    <td className="px-4">False</td>
                  </>
                )}
              </tr>
              <tr>
                <td className="text-left px-4">pubkey</td>
                <td className="px-4">{data.data.validator.pubkey}</td>
              </tr>
              <tr>
                <td className="text-left px-4"> execution_optimistic</td>

                {data.execution_optimistic ? (
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
                  {data.data.validator.withdrawal_credentials}
                </td>
              </tr>{" "}
              <tr>
                <td className="text-left px-4">effective_balance</td>
                <td className="px-4">
                  {data.data.validator.effective_balance}
                </td>
              </tr>{" "}
              <tr>
                <td className="text-left px-4  ">slashed</td>

                {data.data.slashed ? (
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
                  {data.data.validator.activation_eligibility_epoch}
                </td>
              </tr>
              <tr>
                <td className="text-left px-4">activation_epoch</td>
                <td className="px-4">{data.data.validator.activation_epoch}</td>
              </tr>
              <tr>
                <td className="text-left px-4">exit_epoch</td>
                <td className="px-4">{data.data.validator.exit_epoch}</td>
              </tr>{" "}
              <tr>
                <td className="text-left px-4">withdrawable_epoch</td>
                <td className="px-4">
                  {data.data.validator.withdrawable_epoch}
                </td>
              </tr>
              {/* <tr>
                <td className="text-left px-4"></td>
                <td className="px-4">{data.data.}</td>
              </tr>              <tr>
                <td className="text-left px-4"></td>
                <td className="px-4">{data.data.}</td>
              </tr> */}
            </table>
          </div>
          {/* 
          <div>
            <table className="w-full mt-4 mb-7 text-left">
              <tr>
                <th className="text-left text-white px-4">
                  execution_optimistic
                </th>
                <th className="text-left text-white px-4">finalized</th>
                <th className="text-left text-white px-4">pubkey</th>
                <th className="text-white px-4">withdrawal_credentials</th>
                <th className="text-white px-4">effective_balance</th>

                <th className="text-white px-4">slashed</th>
                <th className="text-white px-4">
                  activation_eligibility_epoch
                </th>
                <th className="text-white px-4">activation_epoch</th>
                <th className="text-white px-4">exit_epoch</th>

                <th className="text-white px-4">withdrawable_epoch</th>
              </tr>
              {/* <tr>
              <td className="text-left px-4">index</td>
              <td className="px-4">{data.data.index}</td>
            </tr>
            <tr>
              <td className="text-left px-4">balance</td>
              <td className="px-4">{data.data.balance} </td>
            </tr>

            <tr>
              <td className="text-left px-4">status</td>
              <td className="px-4">{data.data.status}</td>
            </tr> 
            </table>
          </div> */}
        </div>
      ) : (
        <p>Loading data...</p>
      )}

      {/* <div className="flex mt-5">
        <table className="w-full mt-4 mb-7 text-left">
          <tr>
            <th className="text-left text-white px-4">Metric</th>
            <th className="text-white px-4">Value</th>
          </tr>
          <tr>
            <td className="text-left px-4">index</td>
            <td className="px-4">{result1.index}</td>
          </tr>
          <tr>
            <td className="text-left px-4">balance</td>
            <td className="px-4">{result1.balance} </td>
          </tr>

          <tr>
            <td className="text-left px-4">status</td>
            <td className="px-4">{result1.data.status}</td>
          </tr>
        </table>
      </div> */}
    </>
  )
}
