// import Image from "next/image";
// import { Button } from "@nextui-org/react";
// import CommentCreateForm from "@/components/comments/comment-create-form";
// import { fetchCommentsByPostId, type CommentWithAuthor } from "@/db/queries/comments";
// interface CommentShowProps {
//   commentId: string;
//   postId:string
// }
// export default async function CommentShow({ commentId,postId }: CommentShowProps) {
//   const comments =await fetchCommentsByPostId(postId)
//   const comment = comments.find((c) => c.id === commentId);
//   if (!comment) {
//     return null;
//   }
//   const children = comments.filter((c) => c.parentId === commentId);
//   const renderedChildren = children.map((child) => {
//     return (
//       <CommentShow key={child.id} commentId={child.id} postId={postId} />
//     );
//   });
//   return (
//     <div className="p-4 border rounded  mt-2 mb-1">
//       <div className="flex gap-3">
//         <Image
//           src={comment.user.image || ""}
//           alt="user image"
//           width={40}
//           height={40}
//           className="w-5 h-5 rounded-full"
//         />
//         <div className="flex-1 space-y-3">
//           <p className="text-sm font-medium text-gray-500">
//             {comment.user.name}
//           </p>
//           <p className="text-gray-900">{comment.content}</p>

//           <CommentCreateForm postId={comment.postId} parentId={comment.id} />
//         </div>
//       </div>
//       <div className="pl-4">{renderedChildren}</div>
//     </div>
//   );
// }


import Image from "next/image";
import { Button } from "@nextui-org/react";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { fetchCommentsByPostId, type CommentWithAuthor } from "@/db/queries/comments";

interface CommentShowProps {
  commentId: string;
  postId: string;
}

export default async function CommentShow({ commentId, postId }: CommentShowProps) {
  const comments = await fetchCommentsByPostId(postId);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => (
    <CommentShow key={child.id} commentId={child.id} postId={postId} />
  ));

  return (
    <div className="p-5 border border-blue-400 rounded-lg shadow-sm mt-4 mb-3 bg-white">
      <div className="flex gap-4 items-start">
        <Image
          src={comment.user.image || ""}
          alt="User image"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold text-gray-800">{comment.user.name}</p>
            <span className="text-xs text-gray-400">{/* Timestamp or other info */}</span>
          </div>
          <p className="text-gray-700 mb-2">{comment.content}</p>
          <CommentCreateForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>
      {children.length > 0 && (
        <div className="pl-10 mt-2 border-l-2 border-gray-100">
          {renderedChildren}
        </div>
      )}
    </div>
  );
}
