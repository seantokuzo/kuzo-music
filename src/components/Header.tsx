import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

type Page = '/' | 'listen' | 'watch' | 'contact'

const Header = () => {
  const { windowSize } = useAppContext()
  const { pathname } = useLocation()

  const linkFactory = (page: Page) => {
    const pagePath = page === '/' ? page : '/' + page
    return (
      <Link
        to={page}
        className={`mx-2 md:mx-4
        text-xs sm:text-sm md:text-base lg:text-lg
        ${pathname === pagePath && 'underline font-bold'} capitalize`}
      >
        {page === '/' ? 'Home' : page}
      </Link>
    )
  }

  return (
    <header
      className="w-full absolute top-0 pt-5 z-50 bg-black
      flex justify-between items-center"
    >
      {windowSize.width < 640 && (
        <img src="/img/kuzo_logo_576.png" alt="kuzo logo" className="w-16 ml-4" />
      )}
      {windowSize.width >= 640 && <h1 className="text-4xl ml-8">KUZO MUSIC</h1>}
      <div className="w-fit flex justify-end items-center pr-4 md:pr-6">
        <div className="flex justify-end items-center">
          {linkFactory('/')}
          {linkFactory('listen')}
          {linkFactory('watch')}
          {linkFactory('contact')}
        </div>
        {/* {themeToggle} */}
      </div>
    </header>
  )
}

export default Header
