import localFont from "next/font/local";
import "./globals.css";
// import "easymde/dist/easymde.min.css";
// import { Toaster } from "@/components/ui/toaster";
import NavbarWrapper from "@/components/NavbarWrapper"; // make sure this path is correct
import 'easymde/dist/easymde.min.css';
// import * as Sentry from "@sentry/nextjs";


const workSans = localFont({
  src: [
    { path: "./fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/WorkSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./fonts/WorkSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/WorkSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/WorkSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/WorkSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/WorkSans-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/WorkSans-Thin.ttf", weight: "200", style: "normal" },
    { path: "./fonts/WorkSans-ExtraLight.ttf", weight: "100", style: "normal" },
  ],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

function RootLayout({ children }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
