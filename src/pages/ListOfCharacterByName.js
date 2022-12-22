import ListCharacter from "../components/ListCharacter"
import { getCharacterByNameFromApi } from "../utils/Api"

const   ListOfCharacter = async (firstParam, secondParam) => {
    const name = document.querySelector('#search').value
    const res = await getCharacterByNameFromApi(name)
    const results = res.map((element) => ({
        name: element.name,
        src: element.image,
        url: element.url,
    }))
    return ListCharacter(results)
    }

export default ListOfCharacter

