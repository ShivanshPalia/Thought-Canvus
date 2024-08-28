// 'use client'
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
//   } from "@/components/ui/popover"
//   import { Button } from "@/components/ui/button"
//   import { Input } from "@nextui-org/react"
//   import { Textarea } from "@nextui-org/react"
// import * as actions from "@/actions"
// import FormButton from "../common/form-button"
// import { useFormState } from "react-dom"
// export default function TopicCreateForm(){
//     const [formState,action] = useFormState(actions.createTopic,{
//         errors:{}
//     });
//     return(
//         <Popover>
//             <PopoverTrigger className="bg-blue-400 p-3 rounded">
//                 Create a Topic
//             </PopoverTrigger>
//             <PopoverContent >
//                 <form action={action} >
//                     <div className="flex flex-col gap-4 p-4 w-80">
//                         <h3 className="text-lg">
//                             Create a Topic
//                         </h3>
//                         <Input name="name"
//                          className="bg-yellow-400 border-black rounded mt-4"
//                          label="Name" 
//                          labelPlacement="outside"
                         
//                           isInvalid={!!formState.errors.name}
//                           errorMessage={formState.errors.name?.join(', ')}
//                           />
                          
//                         <Textarea
//                         className="bg-yellow-400"
//                          name="description"
//                           label="Description" 
//                           labelPlacement="outside" 
//                           placeholder="Describe Your Topic"
//                           isInvalid={!!formState.errors.description}
//                           errorMessage={formState.errors.description?.join(', ')}
//                           />
//                           {formState.errors._form?
//                           <div className="p-2 bg-red-200 border border-red-400 rounded">
//                             {formState.errors._form?.join(', ')}
//                           </div>:null}
//                         <FormButton>
//                             Save
//                         </FormButton>
//                     </div>
//                 </form>
//             </PopoverContent>
//         </Popover>
//     )
// }



'use client';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";
import { useFormState } from "react-dom";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {}
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-blue-400 p-3 rounded">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent className="z-50 p-4 w-96 bg-white rounded-lg shadow-lg">
        <form action={action}>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              className=" border border-black rounded"
              placeholder="Name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
            <Textarea
              name="description"
              className=" border border-black rounded"
              placeholder="Describe Your Topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />
            {formState.errors._form && (
              <div className="p-2 bg-red-200 border border-red-400 rounded">
                {formState.errors._form.join(', ')}
              </div>
            )}
            <FormButton>
                <div className="px-4 py-3 bg-blue-400 rounded">
                Save 
                </div>
                </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

