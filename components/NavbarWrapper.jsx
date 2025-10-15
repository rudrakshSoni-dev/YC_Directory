import React from 'react'

// components/NavbarWrapper.jsx
import { Suspense } from "react";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  return (
    <Suspense fallback={<div className="px-5 py-3 bg-gray-100">Loading...</div>}>
      <Navbar />
    </Suspense>
  );
}

