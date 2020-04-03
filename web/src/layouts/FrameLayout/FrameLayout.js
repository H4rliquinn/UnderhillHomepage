import { Link, routes } from '@redwoodjs/router'

const FrameLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to={routes.home()}>
              <h2>Logo</h2>
            </Link>
          </div>
          <div className="navlinks">
            <Link to={routes.home()}>home</Link>
            <Link to={routes.sales()}>Sales</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default FrameLayout
