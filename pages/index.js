import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from "react";
import { formatDuration, intervalToDuration } from 'date-fns'


const start = new Date("2022-02-24T02:00:00.000Z");

export default function Home() {
  const [duration, setDuration] = useState(formatDuration(intervalToDuration({
    start: start,
    end: new Date()
  })));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration(formatDuration(intervalToDuration({
        start: start,
        end: new Date()
      })))
    }, 1000)

    return () => {
      clearTimeout(intervalId)
    }
  }, []);

  return (
    <div className="h-100">
      <Head>
        <title>No Fly Zone</title>
        <meta name="description" content="Close the sky above Ukraine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-column align-center">
        <h1>The war in Ukraine lasts for:</h1>
        <h2>{duration}</h2>
      </div>

      <div className="flex-column align-center">
        <h3>Casualties by that time:</h3>
      </div>
    </div>
  )
}
