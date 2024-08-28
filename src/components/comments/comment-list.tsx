import CommentShow from "@/components/comments/comment-show";
import { CommentWithAuthor, fetchCommentsByPostId } from "@/db/queries/comments";
interface CommentListProps {
  postId:string
}

// TODO: Get a list of comments from somewhere
export default async function CommentList({postId}: CommentListProps) {
  const comments =await fetchCommentsByPostId(postId);
  // const topLevelComments = comments.filter(
  //   (comment) => comment.parentId === null
  // );
  const renderedComments = comments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
       postId = {postId}
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      <div className="border-4 rounded-xl border-blue-400 p-4 mb-[40%]">
      {renderedComments}
      </div>
    </div>
  );
}
