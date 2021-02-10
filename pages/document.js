import Head from 'next/head'
import FirstFormBD from '../components/FirstFormBD'

import dbConnect from '../utils/dbConnect'
import Test from '../models/Test'

export default function Document({ textLines }) {
  return (
    <>
      <Head>
        <title>Тестовое задание @АГИС. База данных.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <FirstFormBD textLines={textLines} />
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect();
  const result = await Test.find({})
  const textLines = result.map((doc) => {
    // console.log(doc.text);
    // const text = doc.toObject()
    // text._id = text._id.toString()
    return { 'text': doc.text }
  })

  return { props: { textLines: textLines } }
}