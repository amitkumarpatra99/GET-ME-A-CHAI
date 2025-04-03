/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (

    <>
      <div className="flex justify-center items-center flex-col text-white h-[44vh] gap-4">

        <div className="flex gap-1 font-bold  text-5xl justify-center items-center cursor-pointer ">Buy Me A Chai
          <span>
            <img width={80} src="/Tea.gif" alt="" /></span>
        </div>
        <p className="cursor-pointer">
          Brought Chai For Me Give Donation As a Chai. Start Now ⚡
        </p>

        <div>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>

          <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-2xl font-bold text-center mb-14">Buy Me A Chai</h1>
        <div className="flex gap-5 justify-around">


          <div className="item space-y-3 flex flex-col items-center justify-center">
            <span >
              <img className="bg-slate-600 rounded-full p-2 text-black" width={88} src="/CUP.png" alt="a" /></span>
            <p className="font-bold ">Fans Want To Help</p>
            <p className="text-center"> Your fans are Avaliable for you to help you </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <span >
              <img className="bg-slate-600 rounded-full p-2  text-black" width={88} src="/coin.gif" alt="a" /></span>
            <p className="font-bold ">Fans Want To Help</p>
            <p className="text-center"> Your fans are Avaliable for you to help you </p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <span >
              <img className="bg-slate-600 rounded-full p-2 text-black" width={88} src="/Virat Kohli DP .jpeg" alt="a" /></span>
            <p className="font-bold ">Fans Want To Help</p>
            <p className="text-center"> Your fans are Avaliable for you to help you </p>
          </div>

        </div>
      </div>

      {/* Second Part */}

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center mb-14">Learn About WEB Devlopment <p className="font-thin text-sm">It is Website Devlopmet Tool  </p>
        </h1>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/XDINDHEXjJQ?si=fao42N-1a6e44xzW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
