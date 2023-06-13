import '@/styles/globals.css'
import { AuthProvider } from '../../context/AuthContext'
import { Analytics } from '@vercel/analytics/react';
 
export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
      </AuthProvider>
      <Analytics />
    </>
  )
}
