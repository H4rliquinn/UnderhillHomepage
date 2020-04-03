import { Link, routes } from '@redwoodjs/router'

const FrameLayout = ({ children }) => {
  return (
    <header>
      <nav>
        <Link to={routes.home()}>
          <h2>Logo</h2>
        </Link>
        <div className="navlinks">
          <Link to={routes.home()}>home</Link>
          <Link to={routes.sales()}>Sales</Link>
        </div>
      </nav>

      {children}
    </header>
  )
}

export default FrameLayout
