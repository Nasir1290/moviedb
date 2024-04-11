import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie DB",
  description: "Movie DB app for Watch and Download HD Movies",
};

export default function RootLayout({ params: { lang }, children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
