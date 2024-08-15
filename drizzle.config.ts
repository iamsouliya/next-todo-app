import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: `${process.env.NEXT_DATABASE_URL}`,
  },
  verbose: true,
  strict: true,
});
