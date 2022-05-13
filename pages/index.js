import Head from 'next/head'
import Image from 'next/image'
import Hero from '../Components/Home/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
      <div className="bg-black w-screen h-screen">
        {/* <p>hi</p> */}
        <Hero />
      </div>
      </>
  )
}
