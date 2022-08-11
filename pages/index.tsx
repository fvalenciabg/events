import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import EventsTimeline from "../components/utils/EventsTimeline";
import HomeUrls from "../components/homeUrls";
import HeadComponent from "../components/Head";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title={'Learn scfwfNextjs'} metaData={'Learn nextjs by tutorials'} />
      <main className={styles.main}>
        <EventsTimeline />
      </main>
    </div>
  )
}

export default Home
