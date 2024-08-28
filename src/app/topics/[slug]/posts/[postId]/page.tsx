import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import PostShowloading from "@/components/posts/post-show-loading";
import { Suspense } from "react";
interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { postId } = params;

  return (
    <div className="space-y-3 pt-16 px-16">
      
      <div className="pt-4">
      <Suspense fallback={<PostShowloading/>}>
      <PostShow postId={postId}/>
      </Suspense>
      <div className="">
      <CommentCreateForm postId={postId} startOpen />
      </div>
      <CommentList postId = {postId} />
      </div>
    </div>
  );
}
