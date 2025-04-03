import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


export const metadata = {
  title: "Get Me A Chai",
  description: "A website that You Give me fund for my Website platform Fees",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
            {children}
          </div>
          <Footer />

        </SessionWrapper>

      </body>
    </html>
  );
}


