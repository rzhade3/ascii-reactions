import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Asset from '../components/Asset';
import { getAssets } from '../components/utils';

const Home: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ASCII Reactions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <table>
          {props.assets.map(asset => (
            <tr key={asset.name}>
              <td><Asset name={asset.name} content={asset.content}/></td>
            </tr>
          ))}
        </table>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const assets = getAssets('../reactions');
  return {
    props: {
      assets: assets
    }
  }
}
