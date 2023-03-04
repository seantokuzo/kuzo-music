import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { darkMode } = useAppContext()

  return (
    <div
      className="w-[80%] min-h-[60vh] mt-20 lg:mt-0
      lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-60%]
      flex flex-col justify-center items-center
      bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: 'url(./img/kuzo_faces.png)' }}
    >
      <form
        className="w-full max-w-md p-4 sm:p-6
        rounded-lg
        flex flex-col justify-center items-center"
        name="contact"
        action="https://formsubmit.co/e1a80bef94bb65a6f4eab1e1a954985d"
        method="POST"
      >
        <h3 className="text-2xl text-center">Contact Us</h3>
        <label htmlFor="name" className="mt-2 capitalize">
          name
        </label>
        <input
          className={`w-full rounded-sm text-center ${darkMode ? 'bg-white text-black' : ''}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          max={40}
          min={1}
          name="name"
          required
        />
        <label htmlFor="email" className="mt-2 capitalize">
          email
        </label>
        <input
          className={`w-full rounded-sm text-center ${darkMode ? 'bg-white text-black' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
        />
        <label htmlFor="message" className="mt-2 capitalize">
          message
        </label>
        <textarea
          className={`w-full rounded-sm h-24 ${darkMode ? 'bg-white text-black' : ''}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          minLength={10}
          maxLength={400}
          required
        />
        <input
          type="hidden"
          name="_next"
          // TODO - change link once live
          value="https://localhost:5150/thankyou"
        ></input>
        <button
          type="submit"
          className="mt-4 px-6 py-3
          bg-kuzoPurp sh-gold border-kuzoPurp border-2 rounded-md
          text-xl text-white uppercase
          hover:scale-110 transition-all"
        >
          send message
        </button>
      </form>
      <Outlet />
    </div>
  )
}

export default Contact
