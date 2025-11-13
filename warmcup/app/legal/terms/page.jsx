"use client";
import { FileText } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] text-white px-6 py-24 flex justify-center">
      <div className="max-w-4xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-full bg-teal-600/30">
            <FileText size={28} className="text-teal-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-5 text-gray-300 leading-relaxed">

          <p>
            By accessing or using <span className="text-cyan-400 font-semibold">Warm Cup</span>,
            you agree to comply with these Terms & Conditions. If you do not agree, you may
            discontinue using the platform.
          </p>

          <h2 className="text-xl font-semibold text-white">1. Services</h2>
          <p>
            Warm Cup provides a digital platform for supporters to send monetary
            appreciation to creators. We do not sell physical goods or beverages.
          </p>

          <h2 className="text-xl font-semibold text-white">2. Creator Support</h2>
          <p>
            Payments made through Warm Cup are voluntary contributions. They are not
            considered as purchases of goods or services.
          </p>

          <h2 className="text-xl font-semibold text-white">3. Payments</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>All payments are processed securely via Razorpay.</li>
            <li>Warm Cup does not store your card or banking details.</li>
            <li>Creators receive contributions directly through their configured payment link.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">4. Refund Policy</h2>
          <p>
            Payments made are final and non-refundable unless explicitly stated in our Refund Policy.
          </p>

          <h2 className="text-xl font-semibold text-white">5. Intellectual Property</h2>
          <p>
            All logos, graphics, and UI components belong to Warm Cup and may not be reused without permission.
          </p>

          <h2 className="text-xl font-semibold text-white">6. Contact</h2>
          <p>
            For questions, contact us at  
            <span className="text-cyan-400"> mrpatra.web@gmail.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
