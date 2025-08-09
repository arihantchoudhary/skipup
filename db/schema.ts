import {pgTable, uuid, varchar, text} from 'drizzle-orm/pg-core';

export const blogTable = pgTable('blog', {
    id: uuid('id').primaryKey().defaultRandom(),
    title: varchar('title', {length: 80}).notNull(),
    body: text('body').notNull(),
    orgId: text('orgId').notNull(),
});


export type CreateBlogType = typeof blogTable.$inferInsert;
export type SelectBlogType = typeof blogTable.$inferSelect;