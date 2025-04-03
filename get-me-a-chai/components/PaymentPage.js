/* eslint-disable @next/next/no-img-element */
"use client"

import React from 'react'
import Script from 'next/script'
import Razorpay from 'razorpay'
import { initiate } from '@/action/useraction'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {

    const [paymentform, setpaymentform] = useState({})
    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })

    }

    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var option = {
            "key": process.env.NEXT_PUBLIC_KEY_ID,
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(option);
        document.getElementById('rzp-button1').onclick = function (e) {
            rzp1.open();

        }

    }
    return (
        <>

            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative'>
                <img className='object-cover w-full h-[400px]' src="/coffee.jpg" alt="" />
                <div className='absolute -bottom-14 right-[45%]  '>
                    <img className='w-[160px]  border-blue-500 border-2  rounded-full ' src="/Virat Kohli DP .jpeg" alt="" />
                </div>
            </div>

            <div className="info flex justify-center items-center flex-col gap-1 my-20">

                <div className="font-bold text-lg ">
                    @{username}
                </div>

                <div className='text-slate-400'>
                    Web Devlover
                </div>
                <div className='text-slate-400'>
                    225 Members. 18 Post, ₹90000009/relese
                </div>


                <div className="payment flex gap-3 w-[80%]  mt-11  ">

                    <div className="supporters w-1/2 bg-[#154e56df] p-10 text-lg rounded-xl ">
                        {/* Show the list of the all the shuporters */}
                        <h2 className='font-bold my-5 text-xl '>Supportors</h2>
                        <ul className='mx-2 items-center'>

                            <li className='my-4  flex gap-2 '>
                                <img width={25} src="/avatar2.png" alt="a" />
                                <span>  Ananya donated <span className='font-bold'> ₹2999 INR</span> with lots of  Support💙  </span>  </li>


                            <li className='my-4  flex gap-2 '>
                                <img width={25} src="/avatar2.png" alt="a" />
                                <span>  Ananya donated <span className='font-bold'> ₹2000 INR</span>   </span>  </li>


                            <li className='my-4  flex gap-2 '>
                                <img width={25} src="/avatar2.png" alt="a" />
                                <span>  Virat Kohli donated <span className='font-bold'> ₹50000000000000000000   </span>  </span>  </li>

                            <li className='my-4  flex gap-2 '>
                                <img width={25} src="/avatar2.png" alt="a" />
                                <span>  Hemant donated <span className='font-bold'> ₹1499 INR</span>   </span>  </li>




                            <li className='my-4  flex gap-2 '>
                                <img width={25} src="/avatar2.png" alt="a" />
                                <span>  Chanduu  donated <span className='font-bold'> ₹5000    </span>  With  Lots of ⚡ </span>  </li>


                        </ul>
                    </div>

                    <div className="makePayment w-1/2 bg-[#154e56df] rounded-xl p-10 text-whte ">
                        <h2 className='font-bold my-5 text-xl'>Make A Payment</h2>
                        <div className="flex gap-2 flex-col items-center">

                            <div className='w-full'>
                                <input onChange={handleChange} value={paymentform.name} type="text" name='name' className='w-full p-3 rounded-lg bg-[#101D42]' placeholder='Enter Your ' />
                            </div>
                            <input onChange={handleChange} value={paymentform.message} type="text" name='message' className='w-full p-3 rounded-lg bg-[#101D42]' placeholder='Enter Your ' />
                            <input onChange={handleChange} value={paymentform.amount} type="text" name='amount' className='w-full rounded-lg p-3 bg-[#101D42] ' placeholder='Enter Amount' />



                            <button type="button" className="w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay <a href="https://rzp.io/rzp/14SaJMx"></a></button>


                        </div>

                        <div className='flex gap-2 mt-5'>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={() => pay(1000)}>
                                    Pay ₹99 INR
                                </span>
                            </button>

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={() => pay(2000)}>
                                    Pay ₹199 INR
                                </span>
                            </button>

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={() => pay(3000)}>
                                    Pay ₹299 INR
                                </span>
                            </button>

                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={() => pay(4000)}>
                                    Pay ₹399 INR
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentPage
