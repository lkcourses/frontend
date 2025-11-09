import { createBrowserRouter, RouterProvider} from 'react-router';
import SignInPage from '../../pages/auth/SignInPage';




const router = createBrowserRouter([
	{path: '/sign-in', element:<SignInPage />},
	{path: '/', element: <h1>Home page</h1>}
])

export default function Router() {
	return (
		<RouterProvider router={router} />
	)
}