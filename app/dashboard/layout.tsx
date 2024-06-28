"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import SideNavigation from "./_components/SideNavigation";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { useState } from "react";
import BottomNavigation from "./_components/BottomNavigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<any>(0)
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>

      <div>
        <div className=" md:w-64 fixed hidden md:block ">
          <SideNavigation />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
        <BottomNavigation/>
      </div>

    </TotalUsageContext.Provider>
  );
}
