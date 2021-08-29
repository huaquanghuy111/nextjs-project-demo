export default (req, res) => {
  const params = req.query.params
  return res.json(params)
}
