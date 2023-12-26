import { validateHeaderName } from "http"
import next from "next"
import React from "react"

import style from "./Table.module.css"
import { useRouter } from "next/navigation"

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
    next: { revalidate: 5 },
  })

  const data = (await res.json()) as ApiDataDisplayProps
  return data
}

// const ApiComponent: React.FC<ApiDataDisplayProps> = async({api = "eth/v1/beacon/genesis" }) => {
//   const res = await fetch(`http://47.128.81.7:3500/${api}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     next: { revalidate: 5 },
//   })

//   const data = res.json()
//   return data
// }
interface TableData {
  headers: string[]
  rows: { [key: string]: any }[]
}

function TableComponent({ data }: { data: TableData }): any {
  ;<>
    <table className="w-full mt-4 mb-7 text-left">
      <thead>
        <tr>
          {data.headers.map(header => (
            <th key={header} className="text-left text-white px-4">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map(row => (
          <tr key={row.id}>
            {data.headers.map(header => (
              <td key={header} className="px-4">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>
}

function tableComponent4({ h1, d1, h2, d2, h3, d3, h4, d4 }: any) {
  ;<table className="w-full mt-4 mb-7 text-left">
    <tr>
      <th className="text-left text-white px-4">Metric</th>
      <th className="text-white px-4">Value</th>
    </tr>
    <tr>
      <td className="text-left px-4">{h1}</td>
      <td className="px-4">{d1}</td>
    </tr>
    <tr>
      <td className="text-left px-4">{h2}</td>
      <td className="px-4">{d2}</td>
    </tr>

    <tr>
      <td className="text-left px-4">{h3}</td>
      <td className="px-4">{d3}</td>
    </tr>
  </table>
}
export default async function Node() {
  // const router = useRouter()

  const apiList = ["/eth/v1/beacon/genesis", ""]
  const results = await fetchApiData(apiList[0])
  console.log(results?.data)
  // router.refresh()

  // const tableData: TableData = {
  //   headers: ["Metric", "Value"],
  //   rows: [
  //     { id: 1, h1: "Genesis Time", d1: results.data?.genesis_time },
  //     { id: 2, h2: "Genesis Validators Root", d2: "0x..." },
  //     { id: 3, h3: "Genesis Fork Version", d3: "0" },
  //   ],
  // }

  return (
    <>
      <div className="flex mt-5">
        <h1 className="text-2xl">Api : {apiList[0]}</h1>
      </div>{" "}
      <table className="w-full mt-4 mb-7 text-left">
        <tr>
          <th className="text-left text-white px-4">Metric</th>
          <th className="text-white px-4">Value</th>
        </tr>
        <tr>
          <td className="text-left px-4"> Genesis Time</td>
          <td className="px-4">{results.data.genesis_time}</td>
        </tr>
        <tr>
          <td className="text-left px-4">genesis_validators_root</td>
          <td className="px-4">{results.data.genesis_validators_root} </td>
        </tr>

        <tr>
          <td className="text-left px-4">genesis_fork_version</td>
          <td className="px-4">{results.data.genesis_fork_version}</td>
        </tr>
      </table>{" "}
    </>
  )
}
