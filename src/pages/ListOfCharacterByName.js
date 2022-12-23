import ListCharacter from "../components/ListCharacter"
import { getCharacterByNameFromApi } from "../utils/Api"

const ListOfCharacter = async (firstParam, secondParam) => {
    event.preventDefault()
    const name = document.querySelector('#search').value
    const res = await getCharacterByNameFromApi(name)
    const results = res.map((element) => ({
        name: element.name,
        src: element.image,
        id: element.id,
    }))
    return ListCharacter(results)
    }

export default ListOfCharacter

