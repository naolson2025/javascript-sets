import { faker } from '@faker-js/faker';
import * as compare from './comparing-books.js';

/* ------------- Make Fake Data ------------- */

// make an array of 1,000 fantasy books
const fantasyBooksArray = [];
for (let i = 0; i < 1000; i++) {
  fantasyBooksArray.push(faker.lorem.words());
}

// make an array of 1,000 action books
const actionBooksArray = [];
for (let i = 0; i < 1000; i++) {
  actionBooksArray.push(faker.lorem.words());
}

const fantasyBooksSet = new Set(fantasyBooksArray);
const actionBooksSet = new Set(actionBooksArray);

console.log('actionBooksArray: ', actionBooksArray.length);
console.log('fantasyBooksArray: ', fantasyBooksArray.length);
console.log('fantasyBooksSet: ', fantasyBooksSet.size);
console.log('actionBooksSet: ', actionBooksSet.size);

/* ------------- Run Benchmarks ------------------ */


Deno.bench('diff arr:', () => {
  compare.diffArr(fantasyBooksArray, actionBooksArray);
})

Deno.bench('diff set:', () => {
  compare.diffSet(fantasyBooksSet, actionBooksSet);
})

Deno.bench('intersection arr:', () => {
  compare.intersectionArr(fantasyBooksArray, actionBooksArray);
})
Deno.bench('intersection set:', () => {
  compare.intersectionSet(fantasyBooksSet, actionBooksSet);
})

Deno.bench('symDiff arr:', () => {
  compare.symDiffArr(fantasyBooksArray, actionBooksArray);
})
Deno.bench('symDiff set:', () => {
  compare.symDiffSet(fantasyBooksSet, actionBooksSet);
})

Deno.bench('union arr:', () => {
  compare.unionArr(fantasyBooksArray, actionBooksArray);
})
Deno.bench('union set:', () => {
  compare.unionSet(fantasyBooksSet, actionBooksSet);
})

Deno.bench('isDisjointFrom arr:', () => {
  compare.isDisjointFromArr(fantasyBooksArray, actionBooksArray);
})
Deno.bench('isDisjointFrom set:', () => {
  compare.isDisjointFromSet(fantasyBooksSet, actionBooksSet);
})

Deno.bench('isSubsetOf arr:', () => {
  compare.isSubsetOfArr(fantasyBooksArray, actionBooksArray);
})
Deno.bench('isSubsetOf set:', () => {
  compare.isSubsetOfSet(fantasyBooksSet, actionBooksSet);
})

Deno.bench('isSupersetOf arr:', () => {
  compare.isSupersetOfArr(fantasyBooksArray, actionBooksArray);
})
Deno.bench('isSupersetOf set:', () => {
  compare.isSupersetOfSet(fantasyBooksSet, actionBooksSet);
})