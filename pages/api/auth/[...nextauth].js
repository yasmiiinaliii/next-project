import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'
export default NextAuth({
    providers:[
        GithubProvider({
            clientId:'d72d72bafd2b66e6381c',
            clientSecret:'3f19e774cf7107b78f8e1e7b3813c3b4a8b15082'
        })
    ],
    // database:'url of connected database'
})