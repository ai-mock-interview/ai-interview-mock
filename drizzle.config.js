/**@type {import ("drizzle-kit").Config} */

export default{
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    out: './migrations',
    dbCredentials:{
        url: "postgresql://neondb_owner:npg_xY4DW8GnXNCH@ep-summer-rice-a50z8voz-pooler.us-east-2.aws.neon.tech/ai-interview-mock?sslmode=require",
    }
};

