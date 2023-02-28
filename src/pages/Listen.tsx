import { useAppContext } from '../context/appContext'

const spotifyLinks = [
  'https://open.spotify.com/embed/track/7yfLli50cQlObX06lz6nbq?utm_source=generator',
  'https://open.spotify.com/embed/track/3rSkn3pcxB8h51spbQ8WkF?utm_source=generator',
  'https://open.spotify.com/embed/track/0zbF9ACs41YQQmeUR1Z2D6?utm_source=generator'
]

const Listen = () => {
  const { windowSize } = useAppContext()

  return (
    <div
      className="relative
      2xl:absolute 2xl:top-1/2 2xl:left-1/2 2xl:translate-x-[-50%] 2xl:translate-y-[-50%]
      w-[80%] max-w-2xl mt-20 sm:mt-28 md:mt-0 mb-10
      flex flex-col justify-center items-center"
    >
      {/* FLOWER VIDEO */}
      {/* <iframe
        className="w-full h-[80vh] bg-white
        absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"
        allowFullScreen={false}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="Les Fleurs"
        src="https://seantokuzo-bucket.s3.us-west-1.amazonaws.com/kuzo-vid/FleurVid1.mp4"
      ></iframe> */}
      {spotifyLinks.map((link) => {
        if (windowSize.width < 768) {
          return (
            <iframe
              className="rounded-2xl mt-16 xl:mt-0 z-50"
              // className="w-1/4 min-w-[20rem] rounded-2xl mt-16 xl:mt-0"
              src={link}
              key={link.split('track/')[1].split('?')[0]}
              width="100%"
              height="352"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )
        }
        return (
          <iframe
            className="rounded-2xl mt-10 first:mt-0  z-50"
            src={link}
            key={link.split('track/')[1].split('?')[0]}
            width="100%"
            height="152"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        )
      })}
    </div>
  )
}

export default Listen
