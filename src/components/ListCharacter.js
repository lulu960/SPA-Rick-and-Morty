import  Character  from "./Character";;

export default function ListCharacter(arrayOfCharacter) {
    const template = document.querySelector('#listOfElement')
    const element = template.content.cloneNode(true)
    
    arrayOfCharacter.forEach(e => {
        element.querySelector('div').appendChild(Character(e))
    });
    
    return element
    }