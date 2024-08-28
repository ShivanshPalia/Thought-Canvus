import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySlug } from "@/db/queries/posts";
interface TopicShowProps{
    params:{
        slug:string
    }
}
export default function TopicShowPage({params}:TopicShowProps){
    const {slug} = params;
    return <div className="grid grid-cols-4 gap-4 pl-[20%] pb-[5%] mt-[10%]">
        <div className="col-span-3">
            <h1 className="text-2xl font-bold mb-2">
                 {slug}
            </h1>
            <PostList fetchData={()=> fetchPostsBySlug(slug)}/>
        </div>
        <div>
        <PostCreateForm slug={slug}/>
        </div>
    </div>
}
