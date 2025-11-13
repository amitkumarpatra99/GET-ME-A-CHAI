"use client";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1120] via-[#0f1a30] to-[#0a0f1a] text-white px-6 py-24 flex justify-center">
      <div className="max-w-4xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-full bg-teal-600/30">
            <Shield size={28} className="text-teal-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-5 text-gray-300 leading-relaxed">

          <p>
            Your privacy is important to us. This Privacy Policy explains how
            <span className="text-cyan-400"> Warm Cup</span> collects, uses, and protects your data.
          </p>

          <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Your name and message provided in payment forms.</li>
            <li>No financial details are stored on our servers.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
          <p>We use your name and message for:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Processing your donation</li>
            <li>Displaying supporter messages (when applicable)</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">3. Third-Party Services</h2>
          <p>
            Razorpay handles all payment processing.  
            Please refer to Razorpay’s privacy policy for payment information.
          </p>

          <h2 className="text-xl font-semibold text-white">4. Security</h2>
          <p>
            We use secure connections (HTTPS) and do not store sensitive data.
          </p>

          <h2 className="text-xl font-semibold text-white">5. Contact</h2>
          <p>
            If you have privacy concerns, email us at  
            <span className="text-cyan-400"> mrpatra.web@gmail.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
