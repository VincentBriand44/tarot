import { useRoutes } from 'react-router-dom'
import Calendar from './routes/Calendar'

import BasicLayout from './layouts/Basic'
import Finish from './routes/Finish'
import Home from './routes/Home'
import Logout from './routes/Logout'
import Party from './routes/Party'
import Players from './routes/Players'

function App() {
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
          path: '/party',
          element: <Party />
        },
        {
          path: '/finish',
          element: <Finish />
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
