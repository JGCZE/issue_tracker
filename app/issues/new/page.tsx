"use client"
import { TextArea, TextField, Button } from "@radix-ui/themes";
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
      <Button>Submit</Button>
    </div>
  );
};

export default NewIssuePage;
