// import { db } from "@/db";
// import { notFound } from "next/navigation";
// import { Divider } from "@nextui-org/react";
// interface PostShowProps {
//   postId:string
// }
// export default async function PostShow({postId}: PostShowProps) {
//   await new Promise(resolve=>setTimeout(resolve,2000))
//   const post = await db.post.findFirst({
//     where:{id:postId}
//   })
//   if(!post){
//     notFound();
//   }
//   return (
//     <div className="m-4">
//       <h1 className="text-2xl font-bold my-2">{post.title}</h1>
//       <Divider/>

//       <p className="p-4 ">{post.content}</p>
//     </div>
//   );
// }


import { db } from "@/db";
import { notFound } from "next/navigation";
import { Divider } from "@nextui-org/react";

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const post = await db.post.findFirst({
    where: { id: postId },
  });
  if (!post) {
    notFound();
  }
  return (
    <div className="m-4 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold my-4 text-center text-gray-800">{post.title}</h1>
      <Divider className="my-4" />
      <p className="p-4 text-lg text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
}
