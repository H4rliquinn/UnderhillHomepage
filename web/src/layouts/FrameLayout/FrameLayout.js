import { Link, routes } from '@redwoodjs/router'

import logo from 'src/images/logo-sm-trans.png'

const FrameLayout = ({ children }) => {
  return (
    <>
      <header>
        <mainnav>
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
        </mainnav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default FrameLayout
