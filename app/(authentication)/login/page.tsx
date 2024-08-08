"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// install shadcn
// install zod
// install reacthookform

const LoginPage = () => {
  const UserSchema = z.object({
    username: z.string().email().min(5),
    password: z.string().min(6).max(100),
  });
  type formFields = z.infer<typeof UserSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formFields>({ resolver: zodResolver(UserSchema) });
  const onSubmit: SubmitHandler<formFields> = (data) => {
    console.log(data);
  };
  return (
    <div className="container-md grid justify-center h-screen content-center bg-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container w-[500px] h-[330px] grid grid-rows-3 gap-4">
          <div className="container text-5xl content-center font-bold row-span-1 px-2 text-white grid grid-cols-3 ">
            <div className="contianer row-span-full text-nowrap pl-8">
              Log in
            </div>
          </div>
          <div className="container row-span-3 grid pt-4 ">
            <div className="container px-2 text-lg grid grid-cols-3 h-10 gap-5 place-content-start">
              <Input
                type="text"
                id="username"
                {...register("username", {
                  required: true,
                })}
                className="text-black rounded-sm col-span-full h-[48px] focus:outline-slate-800 w-[360px] "
                placeholder="Enter your e-mail"
              />
            </div>
            <p className="text-red-500 pl-2">{errors.username?.message}</p>
            <div className="container px-2 text-lg grid grid-cols-3 h-10 gap-5 place-content-start">
              <Input
                type="password"
                id="password"
                {...register("password", {
                  required: true,
                })}
                className="text-black rounded-sm col-span-full focus:outline-none h-[50px] w-[360px] "
                placeholder="Password"
              />
            </div>
            <p className="text-red-500 pl-2">{errors.password?.message}</p>
          </div>
          <div className="container grid px-4 gap-4 pl-10">
            <Button
              type="submit"
              variant="secondary"
              className="text-black rounded-sm font-bold text-[19px] h-[48px] w-[360px] "
            >
              Log in
            </Button>
            <Button
              variant="secondary"
              asChild
              className="text-black rounded-sm font-bold text-[19px] h-[48px] w-[360px] "
            >
              <a href="/register">Register</a>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
