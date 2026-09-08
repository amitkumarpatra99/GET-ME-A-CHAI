"use client";
import { RotateCcw } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] text-white px-6 py-24 flex justify-center">
      <div className="max-w-4xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-full bg-teal-600/30">
            <RotateCcw size={28} className="text-teal-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Refund & Cancellation Policy</h1>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-5 text-gray-300 leading-relaxed">

          <p>
            Payments made through <span className="text-cyan-400">Warm Cup</span> 
            are voluntary contributions meant to support creators.
          </p>

          <h2 className="text-xl font-semibold text-white">1. No Refunds</h2>
          <p>
            All contributions are final and non-refundable once the payment has been completed.
          </p>

          <h2 className="text-xl font-semibold text-white">2. Cancellations</h2>
          <p>
            Since Warm Cup does not offer subscriptions or recurring payments,  
            cancellations do not apply to one-time contributions.
          </p>

          <h2 className="text-xl font-semibold text-white">3. Incorrect Transactions</h2>
          <p>
            If a payment was made by mistake, contact us immediately at  
            <span className="text-cyan-400"> mrpatra.web@gmail.com</span>.
          </p>

          <h2 className="text-xl font-semibold text-white">4. Payment Gateway</h2>
          <p>
            All transactions are processed securely through Razorpay.  
            Issues related to payment failures should be directed to Razorpay support.
          </p>
        </div>
      </div>
    </div>
  );
}
