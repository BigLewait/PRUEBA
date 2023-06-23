import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/main.css'

const getArtist = async (id) => {
  const req = await window.fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const res = await req.json()
  console.log(res)
}
getArtist('ditto')
