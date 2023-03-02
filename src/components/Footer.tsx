import { useEffect, useState } from 'react'
import { FaSoundcloud } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
const socialThumbnails = [
  {
    link: 'spotify',
    url: 'https://open.spotify.com/artist/17KWcMxdbGWab5ughy3j0R?si=QH5eRVj6SiGlYHDBCe8hOA'
  },
  { link: 'itunes', url: 'https://music.apple.com/us/artist/kuzo/1279322433' },
  {
    link: 'amazon',
    url: 'https://music.amazon.com/albums/B074WDS9Y6?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_CON6NX5SkwS2VWix49UuTWIQK&trackAsin=B074WFYXK2'
  },
  {
    link: 'youtubemusic',
    url: 'https://music.youtube.com/channel/UC51PFCqH6u9AN234SV0RwUw?feature=share'
  },
  { link: 'soundcloud', url: 'https://soundcloud.com/kuzo-music' },
  { link: 'youtube', url: 'https://www.youtube.com/@kuzomusic4449' },
  { link: 'instagram', url: 'https://www.instagram.com/kuzomusic/' },
  { link: 'facebook', url: 'https://www.facebook.com/kuzomusic' },
  { link: 'twitter', url: 'https://twitter.com/KuzoMusic' }
]

const Footer = () => {
  const { pathname } = useLocation()
  const { windowSize } = useAppContext()
  const [documentHeight, setDocumentHeight] = useState<number>(0)

  useEffect(() => {
    setDocumentHeight(document.body.scrollHeight)
  }, [pathname])

  return (
    <footer
      className={`w-full py-4 lg:py-6 ${
        document.body.scrollHeight <= windowSize.height && windowSize.height > 600 && 'fixed bottom-0'
      }
      flex flex-col justify-center items-center`}
    >
      <div
        className="w-[95%] relative
        flex flex-wrap justify-center items-center"
      >
        {socialThumbnails.map((social) => (
          <a
            href={social.url}
            key={social.link}
            className="hover:scale-110 transition-all"
            target="_blank"
            rel="noreferrer noopener"
            title={
              social.link !== 'youtubemusic'
                ? social.link.slice(0, 1).toUpperCase() + social.link.slice(1)
                : 'Youtube Music'
            }
          >
            {social.link === 'soundcloud' ? (
              <div
                className="w-10 h-10 sm:w-[2.35rem] sm:h-[2.35rem] md:w-12 md:h-12
                mx-2 mt-3 sm:mx-4 sm:mt-4 md:mt-4
                flex flex-col justify-center items-center
                bg-white text-black rounded-full
                text-xs sm:text-sm md:text-base lg:text-3xl
                hover:scale-110 transition-all"
              >
                <FaSoundcloud />
              </div>
            ) : (
              <img
                className="w-10 h-10 sm:w-[2.35rem] sm:h-[2.35rem] md:w-12 md:h-12
                mx-2 mt-3 sm:mx-4 sm:mt-4 md:mt-4
                hover:scale-110 transition-all"
                src={`/img/social-icons/${social.link}.svg`}
                decoding="async"
                loading="lazy"
                alt={`${social.link} icon`}
                data-recalc-dims="1"
              ></img>
            )}
          </a>
        ))}
      </div>
      <p className="mt-6 text-xxs sm:text-xs">
        Copyright © 2023 · All Rights Reserved · Kuzo Music
      </p>
    </footer>
  )
}

export default Footer
