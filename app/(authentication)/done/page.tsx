"use client";
import React from "react";
import { BadgeCheck, ScanEye } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
const DonePage = () => {
  const router = useRouter();
  return (
    <div className="grid h-screen w-screen place-content-center justify-center">
      <div className="container done-box">
        <div className="heading">
          <div className="grid row-span-1 place-content-center justify-center">
            <div className="border-2 rounded-md p-2">
              <BadgeCheck size={40} strokeWidth={2} />
            </div>
          </div>
          <h1 className="text-white text-center text-3xl ">All done!</h1>
          <p className="text-gray-500 text-center ">
            {" "}
            Your password has been reset.
          </p>
        </div>
        <div className="grid p-2 place-content-center justify-center">
          <Button
            type="submit"
            variant="outline"
            size="default"
            className="py-6 px-7 mt-8 w-[16rem] bg-blue-500 text-white text-[1rem]"
            onClick={() => router.push("/login")}
          >
            <ScanEye className="mr-2 h-5 w-5" />
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonePage;
