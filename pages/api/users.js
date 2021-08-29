// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import faker from 'faker'

const users = [...Array(20)].map((user) => ({
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
  name: faker.name.findName(),
}))
export default function handler(req, res) {
  res.status(200).json(users)
}
