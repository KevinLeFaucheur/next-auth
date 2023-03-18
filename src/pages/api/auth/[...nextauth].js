import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"

export const authOptions = {

  // Configure one or more authentication providers
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: { label: "Email", type: "email",  placeholder: "Email..."}
      }
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)