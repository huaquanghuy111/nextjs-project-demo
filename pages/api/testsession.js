import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  console.log(session)
  if (!session) return res.status(401).send('UnAuthentication user')
  return res.json({
    name: 'huaquanghuy',
    age: 20,
  })
}
