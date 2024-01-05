'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { signup } from '@/api/apiHandler'

const Register = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref('password'), null], 'Passwords must match'), // Add validation for matching password
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data: { email: string, password: string }) => {
    signup(data).then(res => console.log(res))
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="email">Your email</Label>
                <Input type="text" id="email" {...register("email")} />
                <Label className='text-rose-700 min-w-10'>{errors.email && errors.email?.message}</Label>
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" {...register("password")} />
                <Label className='text-rose-700 min-w-10'>{errors.password && errors.password?.message}</Label>
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input type="password" id="confirm-password" {...register("confirmPassword")} />
                <Label className='text-rose-700 min-w-10'>{errors.confirmPassword && errors.confirmPassword?.message}</Label>
              </div>
              <div className=''>
                <Button type="submit" className="w-full mt-8">Create an account</Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                  Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register