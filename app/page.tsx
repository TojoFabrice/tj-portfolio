import Image from 'next/image'
import Link from 'next/link'
import { BiBriefcase, BiCard, BiCog, BiHome, BiIdCard, BiPhone } from "react-icons/bi";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";


export default function Home() {
  return (
    <div>
      <header className='header-left'>
        <div className='scroll-bar'>
          <div className='hl-top'>
            <div className='hl-logo'>
              <div className='img'>
                <Image
                  src="/profile.png"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>

          <ul className="nav nav-menu">
            <li data-menuanchor="home" className='border-b border-slate-900'>
              <Link href="#home" className='link-li'>
                <BiHome className='mr-3' />
                <span>Home</span>
              </Link>
            </li>

            <li data-menuanchor="about" className='border-b border-slate-900'>
              <Link href="#about" className='link-li'>
                <BiIdCard className='mr-3' />
                <span>About me</span>
              </Link>
            </li>

            <li data-menuanchor="services" className='border-b border-slate-900'>
              <Link href="#services" className='link-li'>
                <BiCog className='mr-3' />
                <span>Services</span>
              </Link>
            </li>

            <li data-menuanchor="portfolio" className='border-b border-slate-900'>
              <Link href="#portfolio" className='link-li'>
                <BiBriefcase className='mr-3' />
                <span>Portfolio</span>
              </Link>
            </li>

            <li data-menuanchor="blogs" className='border-b border-slate-900'>
              <Link href="#blogs" className='link-li'>
                <BiCard className='mr-3' />
                <span>Blogs</span>
              </Link>
            </li>

            <li data-menuanchor="contact">
              <Link href="#contact" className='link-li'>
                <BiPhone className='mr-3' />
                <span>Contact me</span>
              </Link>
            </li>

          </ul>
        </div>

        <div className="social-content flex justify-center absolute bottom-0 left-0 right-0 py-3">
          <Link href="#contact">
            <BsFacebook className='mr-3' />
          </Link>
          <Link href="#contact">
            <BsTwitter className='mr-3' />
          </Link>
          <Link href="#contact">
            <BsLinkedin className='mr-3' />
          </Link>
        </div>

      </header>
      <main className='main-left'>
        <section></section>
        <section></section>
        <section></section>

      </main>
    </div>
  )
}
