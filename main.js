import TabManager from './src/utils/TabManager'
import ListOfCharacter from './src/pages/ListOfCharacter'
import ListOfCharacterByName from './src/pages/ListOfCharacterByName'
import ListOfShowCharacter from './src/pages/ListOfShowCharacter'

const rootElement = document.querySelector('#app')
let tabId = 0

const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfCharacter,
    params: ['https://rickandmortyapi.com/api/character']
  },
  recherche: {
    component: ListOfCharacterByName,
    params: ['https://rickandmortyapi.com/api/character']
  },
  link1: {
    component: ListOfShowCharacter,
    params: ['https://rickandmortyapi.com/api/character']
  },
})

document.querySelectorAll('[data-tabId]').forEach(element => {
  console.log(element.getAttribute('data-tabId'))
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

document.querySelectorAll('[id]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('link'))
  })
})




tabManager.openTabById('page1')
