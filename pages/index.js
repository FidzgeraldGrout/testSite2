
import Head from 'next/head'
import FirstHeader from '../components/FirstHeader'
import FirstCardDeck from '../components/FirstCardDeck'
import FirstLoreum from '../components/FirstLoreum'

export default function Home() {
  return (
    <>
      <Head>
        <title>Тестовое задание @АГИС. Вёрстка</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <FirstHeader />
      <FirstCardDeck />
      <FirstLoreum />
    </>
  )
}
