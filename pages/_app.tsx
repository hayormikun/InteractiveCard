import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CardContextProvider } from '../components/Context'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient} >
      <CardContextProvider>
        <Component {...pageProps} />
      </CardContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
