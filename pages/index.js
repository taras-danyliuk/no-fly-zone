import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-100 flex" style={{ background: 'pink' }}>
      <Head>
        <title>No Fly Zone</title>
        <meta name="description" content="Close the sky above Ukraine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
