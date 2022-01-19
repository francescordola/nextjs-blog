import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../layout/layout'

const FirstProject = () => {
  return (
    <>
    <Layout>
      <Head>
        <title>First Project</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>

      <h1>First Project</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
    </>
  )
}

export default FirstProject;