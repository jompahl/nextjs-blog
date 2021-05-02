import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../components/layout.module.css'
import { AlignCenterIcon, DownloadIcon } from 'evergreen-ui'
import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards'
import CardItem from '../components/CardItem'

const name = 'Jompahl'

export default function Home({ allPostsData }) {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderContent = () => (
    <>
      <Link href='/'>
        <a>
          <img
            src='/images/profile.jpg'
            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
        </a>
      </Link>
      <div className={styles.experienceContainer}>
        <p>
          My first staggering steps after high school took me on a trip to
          Afrika. I worked as a marketing and sales assistant at a taxi company.
          I developed a salary system for SwedKen Tours using excel and my
        </p>
        <img src='/images/kenya.jpeg' className={styles.lifePics}></img>
        <img src='/images/Equator.jpeg' className={styles.lifePics}></img>
        <img src='/images/Kenya work.jpeg' className={styles.lifePics}></img>
        <img
          src='/images/mount longonot.jpeg'
          className={styles.lifePics}
        ></img>
      </div>
    </>
  )

  return (
    <div>
      <div className={styles.heroContainer}>
        <video
          className={styles.video}
          src='/videos/spacevideo.mp4'
          autoPlay
          loop
          muted
        />
        <h1>Jompahl</h1>
        <p>Scroll down to get to know me</p>
        <div className={styles.btnContainer}>
          <button className={styles.btnOutline}>Projects</button>
          <button className={styles.btn}>
            Download CV
            <DownloadIcon marginLeft={8} />
          </button>
        </div>
      </div>
      <Cards
        cards={[
          {
            src: '/images/Flying.jpeg',
            text: 'Jompahl',
            label: 'Java',
            href: '/',
          },
          {
            src: '/images/kenya.jpeg',
            text: 'Jompahl',
            label: 'C#',
            href: '/',
          },
          {
            src: '/images/Helikopter.jpeg',
            text: 'Jompahl',
            label: 'React, JavaScript',
            href: '/',
          },
          {
            src: '/images/einstein.jpg',
            text: 'Jompahl',
            label: 'React',
            href: '/',
          },
          {
            src: '/images/kenya.jpeg',
            text: 'Jompahl',
            label: 'CSS',
            href: '/',
          },
        ]}
      />
    </div>
    // <section className={styles.parallax}>
    //   <div
    //     className={styles.background}
    //     //  style={{ transform: `translateY(-${offsetY * 0.5}px)`}}
    //   />
    //   {/* <div
    //     className={styles.background2}
    //     style={{ transform: `translateY(-${offsetY * 0.8}px)`}}
    //   /> */}
    //   <div className={styles.experienceContainer}>{renderContent()}</div>
    // </section>
    // <div
    //   className={styles.background}
    //   style={{ transform: `translateY(-${offsetY * 0.5}px)`}}
    //   // style={{
    //   //   display: 'flex',
    //   //   justifyContent: 'center',
    //   //   flexDirection: 'column',
    //   //   alignContent: 'center',
    //   //   alignItems: 'center',
    //   //   padding: 20,
    //   // }}
    // >{renderContent()}

    /* <Link href='/'>
          <a>
            <img
              src='/images/profile.jpg'
              className={`${styles.headerImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
          </a>
        </Link>
        <div className={styles.experienceContainer}>
          <p>My first staggering steps after high school took me on a trip to Afrika. 
          I worked as a marketing and sales assistant at a taxi company. 
          I developed a salary system for SwedKen Tours using excel and my
          </p>
          <img src='/images/kenya.jpeg' className={styles.lifePics}></img>
          <img src='/images/Equator.jpeg' className={styles.lifePics}></img>
          <img src='/images/Kenya work.jpeg' className={styles.lifePics}></img>
          <img src='/images/mount longonot.jpeg' className={styles.lifePics}></img>
        </div> */
    /* <h2 className={utilStyles.headingLg}>
          <Link href='/'>
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2> */

    /* <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href='/posts/[id]' as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */
    //</div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
