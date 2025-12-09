import { polarClient } from '@polar-sh/better-auth'
import { createAuthClient } from 'better-auth/react'

// Full client with Polar - use only on server/RSC
export const authClient = createAuthClient({ plugins: [polarClient()] })
