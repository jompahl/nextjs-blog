import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../components/layout.module.css'

export default function Riddles({ allPostsData }) {
  return (
    <div className={utilStyles.riddlesContainer}>
      {allPostsData.map(({ id, date, title, time }) => (
        <div className={utilStyles.listItem}>
          <img
            className={utilStyles.picture}
            //style={{ height: 225, width: 400 }}
            src='/images/einstein.jpg'
            width='400'
            height='225'
            //className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            //alt={name}
          />
          <div style={{ borderTop: '1px solid', height: '35%' }} key={id}>
            <Link href='/posts/[id]' as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <text>Needed time: {time}</text>
            </small>
          </div>
        </div>
      ))}
    </div>
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
