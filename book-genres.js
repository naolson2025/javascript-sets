import { faker } from "@faker-js/faker"

// make an array of 5,000 fantasy books
let fantasyBooksArray = []
for (let i = 0; i < 5000; i++) {
  fantasyBooksArray.push(faker.book.series())
}
// remove duplicates
fantasyBooksArray = [...new Set(fantasyBooksArray)]

// make an array of 5,000 action books
let actionBooksArray = []
for (let i = 0; i < 5000; i++) {
  actionBooksArray.push(faker.book.genre())
}
// remove duplicates
actionBooksArray = [...new Set(actionBooksArray)]

const fantasyBooksSet = new Set(fantasyBooksArray)
const actionBooksSet = new Set(actionBooksArray)


// Simple lookup
Deno.bench("array: includes", () => {
  fantasyBooksArray.includes('Harry Potter')
})

Deno.bench("set  : has", () => {
  fantasyBooksSet.has('Harry Potter')
})

// Return books that are both fantasy & action
Deno.bench("array: filter/includes", () => {
  fantasyBooksArray.filter((book) => actionBooksArray.includes(book))
})

Deno.bench("set  : intersection", () => {
  fantasyBooksSet.intersection(actionBooksSet)
})