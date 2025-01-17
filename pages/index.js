import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Auth from './auth'
import Nava from '../public/components/Navbar'
import CircleMenu from '../public/components/circleMenu'
import Menu from '../public/components/menu'
import Component from '../public/components/circleMenu/component'


export default function Home({ Component, pageProps }) {

  const divisions = 8;
  return (
    <div
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/ec/0c/60/ec0c6065a57df10774c81d2385149531.png')`, // Reference the image in the public folder
          backgroundSize: 'cover', // Make sure the image covers the entire background
          backgroundPosition: 'center', // Center the background image
          height: '100vh', // Ensure it takes up the full height of the page
        }}
      >
      {/* <div className='row'>
        <Header />
      </div> */}
      <div className='row'>
        <div className='col-lg-1 col-md-2'>
          <Menu className="mx-5 my-5" />
        </div>
        <div className='col-lg-10 col-md-8'>
        <Component {...pageProps} />
        </div>
      </div> 
      </div>
  )
}
