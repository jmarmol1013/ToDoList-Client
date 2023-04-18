import '@/styles/globals.css'
import Nav from '../../components/layout/Nav';
import { AuthProvider, useAuth } from '../../context/AuthContext'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Component {...pageProps} />
      </div>
    </AuthProvider> 
  )
}
