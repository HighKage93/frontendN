"use client";
import React from "react";

export default function Template({ children }: any) {
    return (
        <div>
            <div id="banner-1" className="bg-neutral z-10 fixed top-0 left-0 w-1/3" />
            <div id="banner-2" className="bg-neutral z-10 fixed top-0 left-1/3 w-1/3"/>
            <div id="banner-3" className="bg-neutral z-10 fixed top-0 left-2/3 w-1/3"/>
            {children}
        </div>
    )
} 