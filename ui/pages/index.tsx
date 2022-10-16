import React, { ChangeEvent, useEffect } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Asset from '../components/Asset';
import { getAssets, AssetJson } from '../components/utils';

type HomeProps = {
  assets: AssetJson[]
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const [reactions, setReactions] = React.useState(["typescript sucks"]);

  useEffect(() => {
    const assets = document.getElementsByClassName("Asset");
    var tempAssets: string[] = []
    for (let i = 0; i < assets.length; i++) {
      const assetId = assets[i].id;
      tempAssets.push(assetId);
    }
    setReactions(tempAssets);
  }, []);

  function search(e: ChangeEvent<HTMLInputElement>) {
    const searchTerm = e.target.value;
    reactions.forEach(reaction => {
      const match = reaction.toLowerCase().startsWith(searchTerm.toLowerCase());
      // @ts-ignore: This element is guaranteed to exist, since we indexed it in the useEffect hook
      document.getElementById(reaction).style.display = match ? "block" : "none";
    });
  }

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

        <p>For the best experience, please view this page in Firefox or Safari.</p> 

        <input type="text" id="search" placeholder="Search for a reaction" onChange={search} />

        <div className="reactions">
          {props.assets.map(asset => (
            <Asset key={asset.filename} filename={asset.filename} content={asset.content}/>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const assets = getAssets('../reactions');
  return {
    props: {
      assets: assets
    }
  }
}
