import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import styles from '../components/layout.module.css'
import Cards from '../components/Cards'
import CardItem from '../components/CardItem'

export default function Riddles({ allPostsData }) {
  const array = [
    {
      src: allPostsData[0].pic,
      text: allPostsData[0].title,
      label: allPostsData[0].time,
      href: '/posts/' + allPostsData[0].id,
    },
    {
      src: allPostsData[1].pic,
      text: allPostsData[1].title,
      label: allPostsData[1].time,
      href: '/posts/' + allPostsData[1].id,
    },
    {
      src: allPostsData[2].pic,
      text: allPostsData[2].title,
      label: allPostsData[2].time,
      href: '/posts/' + allPostsData[2].id,
    },
  ]

  return <Cards cards={array}></Cards>
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
