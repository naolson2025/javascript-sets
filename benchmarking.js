import { faker } from '@faker-js/faker';
import {
  differenceArray,
  differenceSet,
  intersectionArray,
  intersectionSet,
  symmetricDifferenceArray,
  symmetricDifferenceSet,
  unionArray,
  unionSet,
  isDisjointFromArray,
  isDisjointFromSet,
  isSubsetOfArray,
  isSubsetOfSet,
  isSupersetOfArray,
  isSupersetOfSet,
} from './comparing-books.js';

/* ------------- Make Fake Data ------------- */

// make an array of 1,000 fantasy books
let fantasyBooksArray = [];
for (let i = 0; i < 1000; i++) {
  fantasyBooksArray.push(faker.lorem.words());
}
// remove duplicates
fantasyBooksArray = [...new Set(fantasyBooksArray)];
console.log('fantasyBooksArray: ', fantasyBooksArray.length);

// make an array of 1,000 action books
let actionBooksArray = [];
for (let i = 0; i < 1000; i++) {
  actionBooksArray.push(faker.lorem.words());
}
// remove duplicates
actionBooksArray = [...new Set(actionBooksArray)];
console.log('actionBooksArray: ', actionBooksArray.length);

const fantasyBooksSet = new Set(fantasyBooksArray);
const actionBooksSet = new Set(actionBooksArray);

console.log('fantasyBooksSet: ', fantasyBooksSet.size);
console.log('actionBooksSet: ', actionBooksSet.size);

/* ------------- Run Benchmarks ------------------ */

// Simple lookup
Deno.bench('array: includes', () => {
  fantasyBooksArray.includes('Harry Potter');
});

Deno.bench('set  : has', () => {
  fantasyBooksSet.has('Harry Potter');
});

// (difference) Return books that are fantasy but not action
Deno.bench('difference array:', () => {
  differenceArray(fantasyBooksArray, actionBooksArray);
});

Deno.bench('difference set  :', () => {
  differenceSet(fantasyBooksSet, actionBooksSet);
});

// (intersection) Return books that are both fantasy & action
Deno.bench('intersection array:', () => {
  intersectionArray(fantasyBooksArray, actionBooksArray);
});

Deno.bench('intersection set  :', () => {
  intersectionSet(fantasyBooksSet, actionBooksSet);
});

// (symmetricDifference) Return books that are either fantasy or action but not both
Deno.bench('symmetricDifference array:', () => {
  symmetricDifferenceArray(fantasyBooksArray, actionBooksArray);
});

Deno.bench('symmetricDifference set  :', () => {
  symmetricDifferenceSet(fantasyBooksSet, actionBooksSet);
});

// (union) Return all fantasy & action books
Deno.bench('union array:', () => {
  unionArray(fantasyBooksArray, actionBooksArray);
});

Deno.bench('union set  :', () => {
  unionSet(fantasyBooksSet, actionBooksSet);
});

// (isDisjointFrom) Check if two genres are disjoint
// meaning none of the same books
Deno.bench('isDisjointFrom array:', () => {
  isDisjointFromArray(fantasyBooksArray, actionBooksArray);
});

Deno.bench('isDisjointFrom set  :', () => {
  isDisjointFromSet(fantasyBooksSet, actionBooksSet);
});

// (isSubsetOf) Check if one genre is a subset of another
Deno.bench('isSubsetOf array:', () => {
  isSubsetOfArray(fantasyBooksArray, actionBooksArray);
});

Deno.bench('isSubsetOf set  :', () => {
  fantasyBooksSet.isSubsetOf(actionBooksSet);
});

// (isSupersetOf) Check if one genre is a superset of another
Deno.bench('isSupersetOf array:', () => {
  isSupersetOfArray(fantasyBooksArray, actionBooksArray);
});

Deno.bench('isSupersetOf set  :', () => {
  isSupersetOfSet(fantasyBooksSet, actionBooksSet);
});
