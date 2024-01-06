"use client"
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Home() {
  const router = useRouter()
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('atoken')) {
      router.push('/login')
    }
  }, [router])

  if (!localStorage.getItem('atoken')) {
    return;
  }

  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-black h-screen p-5 pt-8 relative duration-300`}
      >
        <Image
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt=""
          height={40} width={40}
        />
        <div className="flex gap-x-4 items-center">
          <Image
            src="/assets/budget.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
              }`}
            alt=""
            height={40} width={40}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            Expense Tracker
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}

              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4  
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                } `}
            >
              <Image src={`/assets/${Menu.src}.png`} alt='' height={20} width={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-4">
        <nav className="bg-black border-gray-200 dark:bg-gray-900 rounded-lg">
          <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <Image src="/assets/budget.png" className="h-8" alt="Flowbite Logo" height={40} width={40} /> */}
              <span className="self-center text-2xl font-semibold text-white whitespace-nowrap dark:text-white">Dashboard</span>
            </a>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <DropdownMenu>
                <DropdownMenuTrigger> <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span className="sr-only">Open user menu</span>
                  <Image className="w-8 h-8 rounded-full" src="/assets/User.png" alt="user photo" height={60} width={60} />
                </button></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>

        <h1 className="text-2xl font-semibold ">Page Content</h1>
      </div>
    </div>
  )
}
