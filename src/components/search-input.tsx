'use client'
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export default  function SearchInput(){
    const searchParams = useSearchParams();

    return(
        <form action={actions.search} >
         <input name="term" placeholder="Search..." defaultValue={searchParams.get('term') || ""}  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         </form>
)}