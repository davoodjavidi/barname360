import "./globals.css";
import { peydaFont } from "./lib/fonts.js";

export const metadata = {
  title: "برنامه ۳۶۰ | پلتفرم آموزشی",
  description: "Created By davood javidi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${peydaFont.className} bg-gray-800`}>{children}</body>
    </html>
  );
}
