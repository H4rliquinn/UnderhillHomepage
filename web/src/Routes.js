// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/admin/new" page={NewRabbitPage} name="newRabbit" />
      <Route
        path="/rabbits/{id:Int}/edit"
        page={EditRabbitPage}
        name="editRabbit"
      />
      <Route path="/admin/{id:Int}" page={RabbitPage} name="rabbit" />
      <Route path="/admin" page={RabbitsPage} name="rabbits" />
      <Route path="/coming" page={ComingPage} name="coming" />
      <Route path="/sales" page={SalesPage} name="sales" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
