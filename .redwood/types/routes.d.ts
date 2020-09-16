
            declare module '@redwoodjs/router' {
              interface AvailableRoutes {
                newRabbit: () => "/admin/new"
editRabbit: () => "/rabbits/{id:Int}/edit"
rabbit: () => "/admin/{id:Int}"
rabbits: () => "/admin"
coming: () => "/coming"
sales: () => "/sales"
home: () => "/"
              }
            }

            import type ComingPageType from 'C:\Users\prais\git\redwood\UnderhillHomepage\web\src\pages\ComingPage\ComingPage'
import type EditRabbitPageType from 'C:\Users\prais\git\redwood\UnderhillHomepage\web\src\pages\EditRabbitPage\EditRabbitPage'
import type FatalErrorPageType from 'C:\Users\prais\git\redwood\UnderhillHomepage\web\src\pages\FatalErrorPage\FatalErrorPage'
import type HomePageType from 'C:\Users\prais\git\redwood\UnderhillHomepage\web\src\pages\HomePage\HomePage'
import type NewRabbitPageType from 'C:\Users\prais\git\redwood\UnderhillHomepage\web\src\pages\NewRabbitPage\NewRabbitPage'
import type NotFoundPageType from 'C:\Users\prais\git\redwood\UnderhillHomepage\web\src\pages\NotFoundPage\NotFoundPage'
import type RabbitPageType from 'C:\Users\prais\git\redwood\UnderhillHomepage\web\src\pages\RabbitPage\RabbitPage'
import type RabbitsPageType from 'C:\Users\prais\git\redwood\UnderhillHomepage\web\src\pages\RabbitsPage\RabbitsPage'
import type SalesPageType from 'C:\Users\prais\git\redwood\UnderhillHomepage\web\src\pages\SalesPage\SalesPage'
            declare global {
              const ComingPage: typeof ComingPageType
const EditRabbitPage: typeof EditRabbitPageType
const FatalErrorPage: typeof FatalErrorPageType
const HomePage: typeof HomePageType
const NewRabbitPage: typeof NewRabbitPageType
const NotFoundPage: typeof NotFoundPageType
const RabbitPage: typeof RabbitPageType
const RabbitsPage: typeof RabbitsPageType
const SalesPage: typeof SalesPageType
            }
          