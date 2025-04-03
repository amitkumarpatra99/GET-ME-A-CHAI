"use client"
import React, { useState, useEffect } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [form, setForm] = useState({})

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [router, session])

    const handeleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="container mx-auto py-5 m-4 " >
            <h1 className="text-center my-5 text-3xl font-bold ">WELCOME TO THE DASHBOARD</h1>

            <form action="" className="max-w-2xl mx-auto">

                <div className="my-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input value={form.name ? form.name : ""} onChange={handeleChange} type="text" name="name" id="name" className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                </div>


                <div className="my-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input value={form.email ? form.email : ""} onChange={handeleChange} type="email" name="email" id="email" className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                </div>


                <div className="my-2">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
                    <input value={form.username ? form.username : ""} onChange={handeleChange} type="text" name="username" id="username" className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                </div>

                <div className="my-2">
                    <label htmlFor="cover" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
                    <input value={form.cover ? form.cover : ""} onChange={handeleChange} type="text" name="cover" id="cover" className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                </div>


                <div className="my-2">
                    <label htmlFor="razorpay" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay ID</label>
                    <input value={form.razorpayid ? form.razorpayid : ""} onChange={handeleChange} type="text" name="razorpayid" id="razorpayid" className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                </div>


                <div className="my-2">
                    <label htmlFor="razorpay" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Secret</label>
                    <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handeleChange} type="text" name="razorpaysecret" id="razorpaysecret" className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                </div>


                <div className="py-3 my-2">
                    <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard
