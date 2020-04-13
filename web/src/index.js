import FatalErrorPage from 'src/pages/FatalErrorPage'

import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import 'src/styles/index.scss'
ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
