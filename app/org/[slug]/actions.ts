'use server';
import { CreateBlogType, blogTable } from "@/db/schema";
// import { db } from "@/db;
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);

export const createBlog = async (payload: CreateBlogType) => {
    // Logic to create a blog post
    const [result] = await db.insert(blogTable).values(payload).returning({
        id: blogTable.id,
        // title: blogTable.title,
        // body: blogTable.body,
        // orgId: blogTable.orgId,
    })
    return result;
}