import Image from "next/image";
import Reaction from "../public/icon-reaction.svg"
import Memory from "../public/icon-memory.svg"
import Verbal from "../public/icon-verbal.svg"
import Visual from "../public/icon-visual.svg"



export default function Home() {
  return (
    <main className="bg-white h-screen flex justify-center items-center ">
      <div className="flex rounded-3xl bg-white shadow-3xl shadow-pale-blue ">
        <div className="bg-degree rounded-3xl flex-col justify-center text-white p-10 ">
          <div className="flex justify-center items-center font-semibold mb-7 tracking-wider">
            Your Result
          </div>
          <div className="flex justify-center items-center rounded-full bg-degreee h-44 mx-5 mb-8">
            <div className="flex-col">
              <div className="font-bold text-[4rem] flex justify-center items-center">
                76
              </div>
              <div className="flex justify-center text-sm opacity-40 mt-[-1rem] font-medium  ">
                of 100
              </div>
            </div>

          </div>
          <div className="flex justify-center font-semibold text-3xl mb-4">
            Great
          </div>
          <div className="flex justify-center text-center w-[13.5rem] text-sm opacity-70 ">
            Your scored higher than 65% of the people who have taken these tests.
          </div>
        </div>
        <div className="bg-white  rounded-2xl flex-col justify-center text-black p-10 ">
          <div className="flex justify-start items-center font-bold mb-8">
            Summary
          </div>

          <div className="flex justify-between items-center bg-red-100 w-60 p-3 rounded-lg mb-5">
            <div className=" flex justify-between items-center text-Red font-semibold ">

              <Image src={Reaction} alt="reaction" className="h-5 w-5 mr-2" />
              Reaction
            </div>
            <div className="text-grey-200 text-sm">
              <span className="font-bold">80 </span>/ 100
            </div>
          </div>
          <div className="flex justify-between items-center bg-yellow-100 w-60 p-3 rounded-lg mb-5 ">
            <div className=" flex justify-between items-center text-Orange font-semibold ">

              <Image src={Memory} alt="reaction" className="h-5 w-5 mr-2" />
              Memory
            </div>
            <div className="text-grey-200 text-sm">
              <span className="font-bold">92 </span>/ 100
            </div>
          </div>
          <div className="flex justify-between items-center bg-green-100 w-60 p-3 rounded-lg mb-5">
            <div className=" flex justify-between items-center text-Green font-semibold ">

              <Image src={Verbal} alt="reaction" className="h-5 w-5 mr-2" />
              Verbal
            </div>
            <div className="text-grey-200 text-sm">
              <span className="font-bold">61 </span>/ 100
            </div>
          </div>
          <div className="flex justify-between items-center bg-pale-blue w-60 p-3 rounded-lg mb-8">
            <div className=" flex justify-between items-center text-Cobalt font-semibold ">

              <Image src={Visual} alt="reaction" className="h-5 w-5 mr-2" />
              Visual
            </div>
            <div className="text-grey-200 text-sm">
              <span className="font-bold">72 </span>/ 100
            </div>
          </div>
          <div className="flex items-center justify-center bg-dark-gray-blue text-white rounded-full p-3 font-semibold cursor-pointer ">
            Continue
          </div>
        </div>

      </div>
    </main>
  );
}
