import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Warm Cup",
  description: "Support my work by gifting me a warm cup of happiness.",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

        <Navbar />
        <div className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}


