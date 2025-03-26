// import { varchar } from "drizzle-orm/mysql-core";
import { text, serial, pgTable } from "drizzle-orm/pg-core";



const MockInterview=pgTable('mockInterview', 
    {
        id:serial('id').primaryKey(),
        jsonMockResp: text('jsonMockResp').notNull(),
        jobPosition:text('jobPosition').notNull(),
        jobDescription:text('jobDescription').notNull(),
        jobExperience:text('jobExperience').notNull(),
        createdBy:text('createdBy').notNull(),
        createdAt:text('createdAt').notNull(),
        mockId:text('mockId').notNull()
    }
)


export default MockInterview;