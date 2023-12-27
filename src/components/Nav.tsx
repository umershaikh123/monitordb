import React from "react"
import Link from "next/link"

export default function Nav() {
  return (
    <div className="flex  justify-center mx-auto items-center px-4 py-2   border-black ">
      <div className=" mr-8">
        <ul className="flex space-x-8 text-lg font-semibold  ">
          <Link href={"/"} className=" hover:scale-110 transition-all">
            <li>Home</li>
          </Link>

          <Link href={"/validator"} className=" hover:scale-110 transition-all">
            <li>Validator data</li>
          </Link>

          <Link href={"/block"} className=" hover:scale-110 transition-all">
            <li>Block data</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
