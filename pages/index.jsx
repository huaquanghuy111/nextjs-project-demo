import Head from 'next/head'
import axios from 'axios'
import UserList from '../components/UserList'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home({ datas }) {
  const [session, loading] = useSession()
  console.log({ session, loading })
  return (
    <>
      <Head>
        <title>New Nextjs App</title>
        <meta name="nextjs" content="web development" />
      </Head>
      <h1>{session ? `${session.user.name},` : ''}welcome to Next </h1>
      <h2>{process.env.NEXT_PUBLIC_VALUE}</h2>
      <UserList list={datas} />
    </>
  )
}
//call api to get all user
export const getStaticProps = async () => {
  const response = await axios.get('http://localhost:3000/api/students')
  const datas = response.data
  return {
    props: {
      datas,
    },
  }
}
