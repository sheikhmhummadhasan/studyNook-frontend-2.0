import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('studynook');

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
trustedOrigins: [
  "http://localhost:3000",
  "https://studynook-frontend-five.vercel.app",
],
  database: mongodbAdapter(db, {
    client,
  }),
   emailAndPassword: {
        enabled: true,
    },
       socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET  
        }, 
    },
    session:{
        cookieCache:{
            enabled: true,
            strategy:'jwt',
            maxAge: 7 * 24 * 60 * 60
        }
    },
    plugins:[
        jwt()
    ]
});