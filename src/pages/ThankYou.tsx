import { BsHeadphones } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { CgScreen } from 'react-icons/cg'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { useAppContext } from '../context/appContext'

const ThankYou = () => {
  const { windowSize } = useAppContext()
  const linkFactory = (path: string, icon: ReactNode) => {
    return (
      <Link
        to={path}
        className="p-3 mx-3
        bg-kuzoOrange text-black
        border-2 rounded-full border-kuzoOrange
        text-xl sm:text-2xl md:text-3xl
        hover:scale-110 transition-all"
        title={
          path === '/' ? 'Home' : path.slice(1).slice(0, 1).toUpperCase() + path.slice(1).slice(1)
        }
      >
        {icon}
      </Link>
    )
  }

  return (
    <div
      className={`w-[80%]
      ${
        windowSize.height >= 746
          ? 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'
          : 'mt-24'
      }
      flex flex-col justify-end items-center
        `}
    >
      <div
        className={`w-full min-h-[40vh]
        bg-no-repeat bg-center bg-contain`}
        style={{ backgroundImage: 'url(./img/kuzo_logo_1024.png)' }}
      ></div>
      <div className="mt-0 sm:mt-2 md:mt-4 text-kuzoOrange font-bold text-sm md:text-2xl">
        Thank you for reaching out
      </div>
      <div
        className="w-20 h-20
        mt-2 sm:mt-4 md:mt-6
        flex justify-center items-center"
      >
        {linkFactory('/', <AiFillHome />)}
        {linkFactory('/listen', <BsHeadphones />)}
        {linkFactory('/watch', <CgScreen />)}
        {linkFactory('/contact', <IoMail />)}
      </div>
    </div>
  )
}

export default ThankYou
