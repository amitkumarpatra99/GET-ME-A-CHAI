/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'


const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setshowdropdown] = useState(false)
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }
    return (

        <nav className='flex bg-slate-900 text-white justify-between px-4 h-16 items-center '>

            <Link href={"/"} className="flex  logo font-bold text-xl">
                <span className='animate-none'>⚡</span> <span>GET ME A CHAI</span>
                <span className='flex gap-2 p-1 mx-1 animate-pulse' >
                    <img width={25} src="/heart.png" alt="" /></span>
            </Link>

            {/* <ul className='flex  justify-between gap-4 cursor-pointer'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign up</li>
                <li>Login</li>
            </ul> */}

            <div className='p-2 m-2 items-center text-center relative'>
                {session && <> <button onClick={() => { setshowdropdown(!showdropdown) }} onBlur={() => {
                    setTimeout(() => {
                        setshowdropdown(false)

                    }, 100);
                }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-white mx-4 bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-600" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>


                    <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[175px] bg-white  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#0A5EB0]`}>
                        <ul className="py-2 text-sm text-gray-700  font-semibold dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100  dark:hover:bg-gray-800 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white">Your Page</Link >
                            </li>
                            <li>
                                <Link href={"/"} className="block px-4 py-2 hover:bg-gray-100  dark:hover:bg-gray-950 dark:hover:text-white">Home</Link>
                            </li>

                            <li>
                                <Link onClick={() => { signOut() }} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-white">Sign out</Link>
                            </li>

                        </ul>
                    </div>
                </>
                }

                {/* Login Button */}
                {!session && <Link href={"/login"}>
                    <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button>
                </Link>
                }
            </div>

        </nav>
    )
}

export default Navbar

