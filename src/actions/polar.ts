'use server'

import { authClient } from '@/lib/auth-client-polar'

export async function createCheckout(products: string[]) {
	try {
		const result = await authClient.checkout({ products })

		return { success: true, data: result.data, error: null }
	} catch (error) {
		return { success: false, data: null, error: error instanceof Error ? error.message : 'Unknown error' }
	}
}

export async function openCustomerPortal() {
	try {
		const result = await authClient.customer.portal()

		return { success: true, data: result.data, error: null }
	} catch (error) {
		return { success: false, data: null, error: error instanceof Error ? error.message : 'Unknown error' }
	}
}
