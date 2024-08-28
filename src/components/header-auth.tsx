// 'use client'

// import { Navbar,
//     NavbarBrand,
//     NavbarContent,
//     NavbarItem,
//     Input,
//     Button,
//     Avatar,
//     Popover,
//     PopoverContent,
//     PopoverTrigger
//  } from "@nextui-org/react";
//  import { useSession } from "next-auth/react";
//  import * as actions from "@/actions"

// export default function HeaderAuth(){
//     const session = useSession();

//     let authContent:React.ReactNode;
//     if(session.status==="loading"){
//         authContent=null;
//     }else if(session.data?.user){
//         authContent = 
//         <Popover showArrow placement="left">
//           <PopoverTrigger>
//             <Avatar className="ml-12" src={session.data.user.image || ""}/>
//            </PopoverTrigger>
//            <PopoverContent>
//              <div className="p-4">
//                 <form action={actions.signOut}>
//                     <Button type="submit">Sign Out</Button>
//                 </form>
//              </div>
//            </PopoverContent>
//         </Popover>
//     }else{
//         authContent = <>
//             <NavbarItem>
//                 <form action={actions.signIn}>
//                 <Button type="submit" color="secondary" variant="bordered">Log in</Button>
//                 </form>
//             </NavbarItem>
//             <NavbarItem>
//                 <form action={actions.signIn}>
//                 <Button type="submit" color="primary" variant="flat">Sign Up</Button>
//                 </form>
//             </NavbarItem>
//         </>
//     }
//     return authContent
// }

'use client'
import React from 'react';
import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import Image from 'next/image';
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";
export default function HeaderAuth() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }
  return (
    <div className="flex items-center">
      {session?.user ? (
        <div className="">
          <Popover>
            <PopoverTrigger>
            <button >
            <Image
              src={session.user.image || ""}
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
          </button>
            </PopoverTrigger>
            <PopoverContent >
            <div >
            <form action={actions.signOut} className=" w-48">
              <button type="submit" className="w-full py-2 text-white bg-red-500 rounded hover:bg-red-600">
                Sign Out
              </button>
            </form>
          </div>
            </PopoverContent>
          </Popover>
        
        </div>
      ) : (
        <>
          <div className="ml-4">
            <form action={actions.signIn}>
              <button type="submit" className="px-4 py-2 text-secondary border border-secondary rounded hover:bg-secondary hover:text-white">
                Log in
              </button>
            </form>
          </div>
          <div className="ml-4">
            <form action={actions.signIn}>
              <button type="submit" className="px-4 py-2 text-white bg-primary rounded hover:bg-primary-dark">
                Sign Up
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
