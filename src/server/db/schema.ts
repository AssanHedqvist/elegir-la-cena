// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  date,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `elegir-la-cena_${name}`);

export const recipes = createTable(
  "recipe",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }),
    ingredients: varchar("ingredients", { length: 4096 }),
    instructions: varchar("instructions", { length: 4096 }),
    date: date("date").default(sql`current_date`),
    longblob: bytea("longblob"),
    videoUrl: varchar("video_url", { length: 512 }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);
