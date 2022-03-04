import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Index.module.css'

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Klara Works</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <main className={styles.section}>
        <h1 className={styles.title}>
          <span>
            Klara Works
          </span>
        </h1>
        <table className={styles.profile}>
          <tbody>
            <tr><td>name: </td>
            <td>
              <p>霧咲空人（きりさきあきひと）</p>
              <p>Akihito Kirisaki</p>
            </td></tr>
            <tr><td>mail: </td><td>kirisaki@klara.works</td></tr>
            <tr><td>Twitter: </td><td><a href="https://twitter.com/A_kirisaki">https://twitter.com/A_kirisaki</a></td></tr>
            <tr><td>pixiv: </td><td><a href="https://pixiv.me/kirisaki">https://pixiv.me/kirisaki</a></td></tr>
            <tr><td>GitHub: </td><td><a href="https://github.com/kirisaki">https://github.com/kirisaki</a></td></tr>
            <tr><td>Scrapbox: </td><td><a href="https://scrapbox.io/kirisaki/">https://scrapbox.io/kirisaki/</a></td></tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default Index 
