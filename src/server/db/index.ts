import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

//use this object to connect to the database
export const db = drizzle(sql, {schema});


