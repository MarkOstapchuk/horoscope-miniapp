import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'

const Layout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
)

export default Layout