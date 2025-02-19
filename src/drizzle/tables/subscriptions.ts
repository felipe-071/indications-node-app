import { pgTable, uuid, text, timestamp  } from "drizzle-orm/pg-core";

export const subscriptions = pgTable('subscriptions', {
    id: uuid('id').primaryKey().defaultRandom(), // referência da query no código: uuid(nome da tabela no banco)
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
})