"use client"
import { TextArea, TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="title" />
      </TextField.Root>
      <TextArea placeholder="description" />
      <SimpleMDE />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;
