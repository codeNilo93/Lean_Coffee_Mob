const sampleCards = [
  { text: 'What is node?', author: 'Stefan Bering', id: 123 },
  { text: 'What is React?', author: ' Timur Buchberger', id: 124 },
  { text: 'What is styled components?', author: ' Danilo Bräuer', id: 125 },
]

const localStorageInit = () => {
  if (localStorage.getItem('data') === null) {
    localStorage.setItem('data', JSON.stringify(sampleCards))
  }
}

export default localStorageInit
