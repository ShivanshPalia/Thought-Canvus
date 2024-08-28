
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";
import PostList from "@/components/posts/post-list";
import { fetchTopPosts } from "@/db/queries/posts";
import Link from "next/link";
import Sidebar from "@/components/sidebar/sidebar";
import paths from "@/paths";
import Trending from "@/components/trending";
import { ScrollArea , ScrollBar} from "@/components/ui/scroll-area"
export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <div
        className="relative w-full h-80  bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Welcome to Blogspot</h1>
          <p className="text-lg mb-4">Discover the best articles on the web</p>
          <Link href={paths.trendShow()} className="px-4 py-2 bg-blue-500 rounded-full text-white">
            Explore Now
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid  grid-cols-6 mt-5 ">
        <div className="lg:col-span-1 px-4 py-4">
          <div className="flex flex-col">
            <Sidebar/>
          </div>
        </div>
        <div className="col-span-5">
        <div className="flex items-center mb-6 gap-6">
          <TopicCreateForm />
          <TopicList />
        </div>
        <ScrollArea className=" w-full h-[calc(100vh-20px)] border shadow px-4 py-4 lg:px-7 rounded bg-[#F5F5F5]">
        <div className="">
          <div className="flex items-center">
            <h2 className="text-xl m-2 cursor-pointer">Top Posts</h2>
          </div>
          <PostList fetchData={fetchTopPosts} />
        </div>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="mt-6">
            <h1 className="text-2xl font-bold">Trending</h1>
            <div className="mt-6 mb-4">
            <Trending/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
