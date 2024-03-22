"use client"
import { TextArea, TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
interface IssueForm {
  title: string;
  popisek: string;
  jmeno: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const {register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form 
      className="max-w-xl space-y-3" 
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data)
        router.push('/issues')
      })}>
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="title" {...register('title')} />
      </TextField.Root>
      <TextArea placeholder="description" {...register('popisek')}/>
      <TextArea placeholder="jmeno" {...register('jmeno')}/>
      <Controller 
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE placeholder="Description" {...field}/>}
      />
      <Button>Submit new issue</Button>
    </form>
  );
};

export default NewIssuePage;
