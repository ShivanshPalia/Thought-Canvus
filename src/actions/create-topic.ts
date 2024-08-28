'use server'
import {z} from "zod";
import {auth} from '@/auth'
import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from '@/paths'
import { revalidatePath } from "next/cache";
import { describe } from "node:test";
const createTopicSchema = z.object({
    name:z.string().min(3).regex(/^[a-z-A-Z ]+$/,{message:"Must be lowercase or dashes without spaces"}),
    description:z.string().min(10)
})

interface createTopicFormState{
    errors:{
        name?:string[];
        description?:string[];
        _form?:string[];
    }
}
export async function createTopic(
    formState:createTopicFormState,
    formData:FormData):Promise<createTopicFormState>{
        //setting a time interval after we enter data into the form for a loading spinner
        // await new Promise(resolve=>setTimeout(resolve,2500));
    const result = createTopicSchema.safeParse({
        name :formData.get('name'),
        description : formData.get("description")
    })
    if(!result.success){
        return{
            errors:result.error.flatten().fieldErrors
        }
    }
    const session = await auth();
    if(!session || !session.user){
        return{
            errors:{
                _form:["you must be signed in to create a topic"]
            }
        }
    }
    let topic:Topic;
    try{
        topic = await db.topic.create({
            data:{
                slug:result.data.name,
                description:result.data.description
            }
            
            
        })
        
    }catch(err:unknown){
        if(err instanceof Error){
            return{
                errors:{
                    _form:[err.message]
                }
            }
        }else{
            return {
                errors:{
                    _form:["Something went wronge"]
                }
            }
        }
    }
    revalidatePath("/")
    redirect(paths.topicShow(topic.slug));
   
}