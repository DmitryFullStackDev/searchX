import { createBrowserRouter } from 'react-router-dom'
import { EmptyPage, Home, ResultPage } from '../pages'
import { categories } from '../data/content'

const allPages = categories.map(el => ({
  path: el,
  element: <ResultPage category={el} />,
}))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/empty',
    element: <EmptyPage />,
  },
  {
    path: '*',
    element: <EmptyPage />,
  },
  ...allPages,
])
