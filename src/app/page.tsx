import Image from "next/image"
import Node from "@/components/Node"
import Link from "next/link"
import Nav from "@/components/Nav"

export default function Home() {
  return (
    <>
      <h1 className="text-3xl flex justify-center items-center">Home</h1>

      <div className="h-[100vh] w-[100vw]">
        <div className=" flex-col  flex-wrap justify-center  items-center space-x-4  w-[80vw] max-w-[100vw] overflow-none p-16">
          <ul className="text-xl text-black flex-col space-x-4     justify-center   items-center w-[80vw]  ">
            {/* Generate links for desired range */}

            {Array.from({ length: 30000 }).map((_, index) => (
              <>
                <li
                  key={index + 1}
                  className="flex justify-center items-center mt-3 mb-3 "
                >
                  Validator Index :
                  <Link href={`/${index + 1}`}>{index + 1}</Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
