import TabManager from './src/utils/TabManager'
import ListOfCharacter from './src/pages/ListOfCharacter'
import ListOfCharacterByName from './src/pages/ListOfCharacterByName'

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: ListOfCharacter,
    params: ['https://rickandmortyapi.com/api/character']
  },
  recherche: {
    component: ListOfCharacterByName,
    params: ['https://rickandmortyapi.com/api/character']
  }
})


document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})

tabManager.openTabById('page1')
