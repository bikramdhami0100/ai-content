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
import { HeaderSearchContext } from "../(context)/HeaderSearchContext";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalUsage, setTotalUsage] = useState<any>(0)
  const [searchData, setSearchData] = useState<any>()
  return (
    <HeaderSearchContext.Provider value={{ searchData, setSearchData }}>


      <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>

        <div>
          <div className=" md:w-64 fixed hidden md:block ">
            <SideNavigation />
          </div>
          <div className="md:ml-64">
            <div className="">
              <Header />
            </div>
            <div className=" mt-[100px]">
              {children}
            </div>
          </div>
          <BottomNavigation />
        </div>

      </TotalUsageContext.Provider>
    </HeaderSearchContext.Provider>
  );
}
