"use client";

import Nav from "@/app/component/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { createBlog } from "./actions";
import { useOrganization } from "@clerk/nextjs";

export default function OrgLandingPage() {
  const [blogContent, setBlogContent] = React.useState("");
  const [blogTitle, setBlogTitle] = React.useState("");
  const selectedOrganization = useOrganization();

  //   console.log("Selected Organization:", selectedOrganization);

  const handleCreateBlog = async () => {
    // Logic to handle blog creation
    if (!selectedOrganization.organization?.id) return;

    await createBlog({
      title: blogTitle,
      body: blogContent.trim(),
      orgId: selectedOrganization.organization?.id,
    });
    
  };
  return (
    <main>
      <Nav />
      <div className="grid w-full gap-2 p-20">
        <Input
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          placeholder="Blog Title"
          className="mt-2"
        />
        <Textarea
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="Type your message here."
        />
        <Button onClick={handleCreateBlog} className="mt-2">
          {" "}
          Send message
        </Button>
      </div>
    </main>
  );
}
