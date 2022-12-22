
export const getUserFromApi = async () => {
  const req = await fetch('https://reqres.in/api/users')
  const res = await req.json()

  return res.data
}

export const getPostFromApi = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await req.json()

  return res
}

export const getCharacterFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/character')
  const res = await req.json()

  return res.results
}

export const getCharacterByNameFromApi = async (name) => {
  const req = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
  const res = await req.json()

  return res.results
}