import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  callbacks: {
    async signIn({ account, profile }) {
      console.log(account,profile)
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
  providers: [
    GoogleProvider({
        scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar', 
        params: { grant_type: 'authorization_code' }, 
        accessTokenUrl: 'https://accounts.google.com/o/oauth2/token', 
        requestTokenUrl: 'https://accounts.google.com/o/oauth2/auth', 
        authorizationUrl: 'https://accounts.google.com/o/oauth2/auth?response_type=code',
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
      })
  ],
  secret:process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)