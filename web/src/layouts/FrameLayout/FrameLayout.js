import { Link, routes } from '@redwoodjs/router'

import logo from 'src/images/logo-sm-trans.png'

const FrameLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="mainNav">
          <div className="logo">
            <Link to={routes.home()}>
              <img src={logo} alt="Profile" />
            </Link>
          </div>
          <div className="navlinks">
            <Link to={routes.home()}>Home</Link>
            <Link to={routes.sales()}>Available For Sale</Link>
            <Link to={routes.coming()}>Coming Soon</Link>
          </div>
        </nav>
      </header>
      <main className="mainContent">{children}</main>
      <footer>
        <Link to={routes.rabbits()}>
          <span className="footerLink">Admin</span>
        </Link>
      </footer>
    </>
  )
}

export default FrameLayout
