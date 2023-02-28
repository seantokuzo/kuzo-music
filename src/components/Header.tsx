import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

type Page = '/' | 'listen' | 'watch' | 'contact'

const Header = () => {
  const { darkMode, toggleDarkMode, windowSize } = useAppContext()
  const { pathname } = useLocation()
  console.log(pathname)

  const themeToggle = (
    <label
      htmlFor="default-toggle"
      className="inline-flex relative items-center cursor-pointer self-end"
    >
      <input
        type="checkbox"
        onChange={toggleDarkMode}
        checked={darkMode}
        value=""
        id="default-toggle"
        className="sr-only peer"
      />
      <div
        className="rounded-full
        w-9 h-5 md:w-11 md:h-6
        after:h-4 after:w-4 md:after:h-5 md:after:w-5
        after:top-[2px] after:left-[2px] md:after:top-[2px] md:after:left-[2px]
        bg-[#ffad61] border-[#ffad61] border-2 after:bg-white
        peer-checked:after:bg-black peer-checked:after:border-black
        after:content-[''] after:absolute
        after:rounded-full after:transition-all
        peer-checked:border-2 peer-checked:border-[#b077ba]
        peer-checked:bg-[#b077ba]
        peer-checked:after:translate-x-full
        peer-focus:outline-none peer"
      ></div>
    </label>
  )

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
      className={`w-full absolute top-0 pt-5 z-50
      ${darkMode ? 'bg-black' : 'bg-white'}
      flex justify-between items-center`}
    >
      {windowSize.width < 640 && (
        <img src="/img/kuzo_logo_576.png" alt="kuzo logo" className="w-16 ml-4" />
      )}
      {windowSize.width >= 640 && <h1 className="text-4xl ml-8">KUZO MUSIC</h1>}
      <div className="w-fit flex justify-end items-center pr-4 md:pr-6">
        <div className="flex justify-end items-center pr-2">
          {linkFactory('/')}
          {linkFactory('listen')}
          {linkFactory('watch')}
          {linkFactory('contact')}
        </div>
        {themeToggle}
      </div>
    </header>
  )
}

export default Header
