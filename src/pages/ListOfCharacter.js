import ListCharacter from "../components/ListCharacter"
import { getCharacterFromApi } from "../utils/Api"

const ListOfCharacter = async (firstParam, secondParam) => {
    const res = await getCharacterFromApi()
    const results = res.map((element) => ({
        name: element.name,
        src: element.image,
    }))
    return ListCharacter(results)
    }

export default ListOfCharacter