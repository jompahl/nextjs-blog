import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { Animated } from 'react-animated-css'
import React, { useState } from 'react'
import { Button } from 'evergreen-ui'
import Link from 'next/link'

export default function Post({ postData }) {
  const [showAnswer, setAnswer] = useState(false)

  function getPath() {
    if (postData.title === 'Einsteins Riddle') {
      return (
        <div>
          <div>
            You can make your own Einstein riddle, click the link below!
          </div>
          <Link href='/Riddle'>Click here to make your own!</Link>
        </div>
      )
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.article}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <img
          className={utilStyles.picture}
          //style={{ height: 225, width: 400 }}
          src={postData.pic}
          width='400'
          height='225'
          style={{
            border: '1px solid',
            boxShadow: '1px 1px 15px 0px rgba(0, 0, 0, 35)',
          }}
          //className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
          //alt={name}
        />
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Button
          onClick={() => {
            setAnswer(showAnswer ? false : true)
          }}
        >
          {!showAnswer ? 'Show Answer' : 'Hide Answer'}
        </Button>
        <Animated
          animationIn='fadeIn'
          animationOut='fadeOut'
          animationInDuration={1000}
          isVisible={showAnswer}
        >
          <div>{postData.answer}</div>
          {getPath()}
        </Animated>
      </article>
    </React.Fragment>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
