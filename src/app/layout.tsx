import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { NuqsAdapter } from 'nuqs/adapters/next'
import { Analytics } from '@vercel/analytics/next'

import { Toaster } from '@/components/ui'
import { TRPCReactProvider } from '@/trpc/client'

import './globals.css'

const inter = Inter({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Zoom.AI',
	description: 'AI-powered summaries for your Zoom meetings',
}

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				<NuqsAdapter>
					<TRPCReactProvider>{children}</TRPCReactProvider>
				</NuqsAdapter>

				<Toaster position='bottom-right' expand={false} richColors />

				{/* Allow track page views for Vercel */}
				<Analytics />
			</body>
		</html>
	)
}

export default RootLayout
