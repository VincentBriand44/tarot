import { useRoutes } from 'react-router-dom'

import BasicLayout from './layouts/BasicLayout'
import Account from './routes/Account'
import Calendar from './routes/Calendar'
import Finish from './routes/Finish'
import History from './routes/History'
import Home from './routes/Home'
import Logout from './routes/Logout'
import Party from './routes/Party'
import Players from './routes/Players'
import Settings from './routes/Settings'

const App = () => {
  const username = 'John Doe'

  let element = useRoutes([
    {
      path: '/',
      element: <BasicLayout username={username} />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/calendar',
          element: <Calendar />
        },
        {
          path: '/players',
          element: <Players />
        },
        {
          path: '/history',
          element: <History />
        },
        {
          path: '/party',
          element: <Party />
        },
        {
          path: '/finish',
          element: <Finish />
        },
        {
          path: '/account',
          element: <Account />
        },
        {
          path: '/settings',
          element: <Settings />
        },
        {
          path: '/logout',
          element: <Logout />
        }
      ]
    }
  ])

  return element
}

export default App
