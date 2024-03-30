import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()

  const isPageLoading = navigation.state === 'loading'

  return (
    <div className="w-full max-w-6xl mx-auto px-8">
      <Navbar />
      {isPageLoading ? (
        <div className="w-full flex justify-center">
          {' '}
          <div className="w-16 h-16 border-t-4  border-green-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}
export default HomeLayout
