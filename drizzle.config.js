import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://aicontentdatabase_owner:aVKBQiW8H4XS@ep-floral-cherry-a5ie57j8.us-east-2.aws.neon.tech/aicontentdatabase?sslmode=require",
  },
  verbose: true,
  strict: true,
})
