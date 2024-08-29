
import Link from 'next/link';
import paths from '@/paths';
import type { PostWithData } from '@/db/queries/posts';
import CommentIcon from '@mui/icons-material/Comment';
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
interface PostListProps{
  fetchData:() => Promise<PostWithData[]>
}
export default async function PostList({fetchData}:PostListProps) {
  const posts = await fetchData();
  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error('Need a slug to link to a post');
    }


    return (
      
      <div key={post.id} className="border rounded bg-white p-2">
        <Link href={paths.postShow(topicSlug, post.id)}>
        <div className='flex gap-3 '>
        <Avatar size='sm'/>
        <div>
        {post.user.name}
        </div>
        </div>
          <h3 className="font-extrabold text-2xl pl-11 pt-4">{post.title}</h3>
          </Link>
          <div className="flex flex-row  justify-between pl-16 items-center">
            <p className="text-xs text-gray-400 hover:bg-[#F6F6F6] p-3 rounded ">
              <CommentIcon/> {post._count.comments} comments
            </p>
            <BookmarkBorderIcon className='flex-end'/>
          </div>
        
      </div>
      
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}

