import { useState, useEffect } from 'react'
import { createAuthClient } from 'better-auth/client'

export const authClient = createAuthClient({})

// Add React hooks for client components
export const useSession = () => {
	const [error, setError] = useState<any>(null)
	const [session, setSession] = useState<any>(null)
	const [isPending, setIsPending] = useState<boolean>(true)

	useEffect(() => {
		const getSession = async () => {
			try {
				const result = await authClient.getSession()
				
				setSession(result.data)
				setError(result.error)
			} catch (err) {
				setError(err)
			} finally {
				setIsPending(false)
			}
		}

		getSession()
	}, [])

	return { data: session, isPending, error }
}