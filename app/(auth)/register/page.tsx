'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'

const Register = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <Label htmlFor="email">Your email</Label>
                <Input type="email" name="email" id="email" placeholder="example.gmail.com" required />
              </div>
              <div>
                <Label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</Label>
                <Input type="password" name="password" id="password" autoComplete='' placeholder="" required />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input type="confirm-password" name="confirm-password" id="confirm-password" autoComplete='' placeholder="" required />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Input id="terms" aria-describedby="terms" type="checkbox" required />
                </div>
                <div className="ml-3 text-sm">
                  <Label htmlFor="terms" >I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></Label>
                </div>
              </div>
              <Button type="submit" className="w-full">Create an account</Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register