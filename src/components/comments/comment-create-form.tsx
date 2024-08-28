"use client";
import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import FormButton from "@/components/common/form-button";
import * as actions from "@/actions";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import RateReviewIcon from '@mui/icons-material/RateReview';
interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
}
export default function CommentCreateForm({
  postId,
  parentId,
  startOpen,
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    actions.createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );
  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();
      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);
  const form = (
    <form action={action} ref={ref}>
      <div className="space-y-2 p-8 px-1">
        <Textarea
          className="border rounded-lg "
          name="content"
          placeholder="Enter your comment"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(", ")}
        />

        {formState.errors._form ? (
          <div className="p-2 bg-red-200 border rounded border-red-400">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}

        <FormButton >
          <div className="bg-blue-400 px-4 py-3 rounded-lg">
          Create Comment
          </div>
          </FormButton>
      </div>
    </form>
  );

  return (
    <div className="pb-6">
      <Button size="sm" variant="light" className=" flex gap-4" onClick={() => setOpen(!open)}>
         <RateReviewIcon/> 
      </Button>

      {open && form}
    </div>
  );
}
