import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Asset from '../components/Asset';
import { getAssets, AssetJson } from '../components/utils';

type HomeProps = {
  assets: AssetJson[]
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ASCII Reactions</title>
        <meta name="description" content="ASCII Reaction art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Find your reaction here!
        </h1>

        {props.assets.map(asset => (
          <div key={asset.name}>
            <Asset name={asset.name} content={asset.content}/>
          </div>
        ))}
      </main>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const assets = getAssets('../reactions');
  return {
    props: {
      assets: assets
    }
  }
}
