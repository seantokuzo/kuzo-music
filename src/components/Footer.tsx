const socialThumbnails = [
  'spotify',
  'itunes',
  'amazon',
  'googleplay',
  'soundcloud',
  'youtube',
  'instagram',
  'facebook',
  'twitter'
]

const Footer = () => {
  return (
    <footer
      className="w-full
      flex flex-col justify-center items-center"
    >
      <div
        className="w-[95%] relative md:absolute md:bottom-0
        py-8
        flex flex-wrap justify-center items-center"
      >
        {socialThumbnails.map((social) => (
          <a href="#" key={social}>
            <img
              className="w-10 h-10 sm:w-[2.35rem] sm:h-[2.35rem] md:w-12 md:h-12
              mx-2 mt-3 sm:mx-4 sm:mt-4 md:mt-4
              hover:scale-110 transition-all"
              src={`/img/social-icons/${social}.png`}
              decoding="async"
              loading="lazy"
              alt={`${social} icon`}
              data-recalc-dims="1"
            ></img>
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
