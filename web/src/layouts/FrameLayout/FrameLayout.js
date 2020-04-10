import logo from 'src/images/logo-sm-trans.png'
import { Link, routes } from '@redwoodjs/router'
const FrameLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to={routes.home()}>
              <img src={logo} alt="Profile" />
            </Link>
          </div>
          <div className="navlinks">
            <Link to={routes.home()}>Home</Link>
            <Link to={routes.sales()}>Available For Sale</Link>
            <Link to={routes.sales()}>Coming Soon</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default FrameLayout
