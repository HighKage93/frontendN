import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Auth from './auth'
import Nava from '../public/components/Navbar'
import CircleMenu from '../public/components/circleMenu'


export default function Home() {

  const divisions = 8;
  return (
    
    <div>
      <Nava />
      <CircleMenu divisions={divisions} />
    </div>
  )
}
