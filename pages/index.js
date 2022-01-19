import Head from 'next/head'
import Layout, { siteTitle } from '../layout/layout'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const Home = () => {
  return (
    <Layout home>

      <Head>
        <title>{'Home'}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>

         <Link href="/projects/first-project">
              <a>this page!</a>
        </Link>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      
    </Layout>
  )
}

export default Home;