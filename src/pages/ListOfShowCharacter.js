import ListCharacter from "../components/ListCharacter"
import { getCharacterByIdFromApi } from "../utils/Api"

const ListOfCharacter = async (firstParam, secondParam) => {
    event.preventDefault()
    const id = document.querySelectorAll('#value').value
    console.log(id)
    const res = await getCharacterByIdFromApi(id)
    const results = res.map((element) => ({
        name: element.name,
        status: element.status,
        species: element.species,
        gender: element.gender,
        origin: element.origin.name,
        originUrl: element.origin.url,
        location: element.location.name,
        locationUrl: element.location.url,
        src: element.image,
    }))
    return ListCharacter(results)
    }

export default ListOfCharacter

