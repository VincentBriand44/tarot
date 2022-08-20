import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Login from '../routes/Login'

const Basic = ({ username }) => {
  const loggedIn = true

  return (
    <div className='flex flex-col min-h-screen bg-slate-700'>
      <Header username={username} />
      <main className='flex flex-col items-center p-10 gap-4 mb-16'>
        {loggedIn ? <Outlet /> : <Login />}
      </main>
      <Footer />
    </div>
  )
}

export default Basic
