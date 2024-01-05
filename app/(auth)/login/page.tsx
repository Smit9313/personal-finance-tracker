'use client'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { signin } from '@/api/apiHandler'
import { loginRedirectCall } from '@/util'
import { useRouter } from 'next/navigation'
import { Iuser } from '@/types/user'

const Login = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  useEffect(()=>{
    if(localStorage.getItem('atoken')){
      router.push('/')
    }
  },[router])

  const onSubmit = (data: Iuser) => {
    signin(data).then(res => {
    if(res.status === 201){
        localStorage.setItem('atoken',res.data.accessToken);
        loginRedirectCall();
      }
    })
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="email">Your email</Label>
                <Input type="text" id="email" {...register("email")} />
                <Label className='text-rose-700 min-w-10'>{errors.email && errors.email?.message}</Label>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" autoComplete='' placeholder="" {...register("password")} />
                <Label className='text-rose-700 min-w-10'>{errors.password && errors.password?.message}</Label>
              </div>
              <Button type="submit" className="w-full">Sign in</Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don&apos;t have an account? <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login