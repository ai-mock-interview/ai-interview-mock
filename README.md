# AI Interview Application

Welcome to the **AI Interview Application**! This is a Next.js project designed to provide an interactive interview experience powered by AI.

## 🚀 Getting Started

Follow these steps to clone, install dependencies, and run the project on your local machine.

### 1️⃣ Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- Package manager: `npm`

### 2️⃣ Clone the Repository
```
git clone https://github.com/YOUR-ORG/AI-Interview-App.git
cd AI-Interview-App
```

### 3️⃣ Install Dependencies
Using **npm**:
```
npm install
```

### 4️⃣ Set Up Drizzle ORM with Neon Postgres
This project uses **Drizzle ORM** for database management with **Neon PostgreSQL**. Follow these steps to set it up:

1. Install Drizzle ORM and PostgreSQL dependencies:
```
npm install drizzle-orm pg neon-db dotenv # or yarn add drizzle-orm pg neon-db dotenv
```

2. Configure the Drizzle database connection in `db/config.ts`:
```
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });
export const db = drizzle(sql);
```

3. Add your **Neon DB connection string** to `.env.local`:
```
DATABASE_URL=your_neon_postgres_url_here
```

4. Sync database schema:
```
npx drizzle-kit db:push
npx drizzle-kit db:studios
```

### 5️⃣ Configure API Keys for Gemini AI
This project integrates **Gemini AI** for advanced interview capabilities. To set up your API keys:

1. Obtain an API key from [Gemini AI](https://gemini.google.com/).
2. Add the API key to your `.env.local` file:
```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```
3. Restart the development server to apply the changes.

### 6️⃣ Run the Development Server
Start the application in development mode:
```
npm run dev
```

The application will be available at: [http://localhost:3000](http://localhost:3000)


## 🖥️ Deployment
The easiest way to deploy this Next.js app is using **Vercel**:
1. Push your code to **GitHub**.
2. Sign up at [Vercel](https://vercel.com/) and link your repository.
3. Click **Deploy** – your app will be live in seconds!

## 📚 Learn More
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features & API.
- [Drizzle ORM Documentation](https://orm.drizzle.team/) - Learn how to manage your database.
- [Neon PostgreSQL Documentation](https://neon.tech/) - Cloud-native Postgres for modern applications.
- [Gemini AI Documentation](https://gemini.google.com/) - Understand how to integrate AI capabilities.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - Contribute & explore.
- [Interactive Next.js Tutorial](https://nextjs.org/learn) - Hands-on learning.

---
**🔗 Repository:** https://github.com/ai-mock-interview/ai-interview-mock
---
💡 **Contributions are welcome!** Feel free to submit issues or PRs.

