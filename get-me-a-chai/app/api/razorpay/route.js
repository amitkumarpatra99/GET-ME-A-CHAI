import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment"
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    body = object.formEntries(body)


    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (p) {
        return NextResponse.json({success:false,message:"order Id not found"})
    }

    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "razorpay_payment_id": body.razorpay_payment_id, "razorpay_signature": body.razorpay_signature }, process.env.KEY_SECRET)
    if (xx) {
        const ubdatePayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: "true" })
        return NextResponse.redirect(`${process.env.URL}/${ubdatePayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({success:false,message:"payment verification failed"})
    }






}