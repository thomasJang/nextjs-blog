import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} - about</title>
      </Head>
      <h3>김정원</h3>
      <h3>김정원</h3>
      <h3>김정원</h3>
      <h3>김정원</h3>
      <Link href={`/`}>장기영</Link>
    </Layout>
  )
}