import { db } from "@/db";
import { blogTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { clerkClient } from "@clerk/nextjs/server";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface params {
  subdomain: string;
}
export default async function HomePage({ params }: { params: params }) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });
  const orgID = org.id;
  const blogs = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, orgID));

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Welcome to {subdomain}</h1>

      <div className="flex flex-col items-center min-h-screen p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {blogs.map((blog) => (
            <Card key={blog.id}>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{blog.body}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
