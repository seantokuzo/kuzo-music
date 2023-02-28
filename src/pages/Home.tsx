const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* <iframe
        className="w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="KUZO - Luna [Official Video]"
        width="1800"
        height="480"
        src="https://www.youtube.com/embed/G2dFKhQ-KDA?autoplay=1&mute=1&amp;controls=0&amp;disablekb=1&amp;fs=0&amp;iv_load_policy=3&amp;loop=1&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fkuzomusic.com&amp;widgetid=1"
      ></iframe> */}
      <iframe
        className="w-full h-[70vh]"
        allowFullScreen={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="KUZO - Luna [Official Video]"
        src="https://www.youtube.com/embed/G2dFKhQ-KDA?autoplay=1&mute=1&amp;controls=0&amp;disablekb=1&amp;fs=0&amp;iv_load_policy=3&amp;loop=1&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fkuzomusic.com&amp;widgetid=1"
      ></iframe>
    </div>
  )
}

export default Home
