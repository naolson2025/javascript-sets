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
  isSupersetOfSet
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
Deno.bench('array: filter/includes', () => {
  intersectionArray(fantasyBooksArray, actionBooksArray);
});

Deno.bench('set  : intersection', () => {
  intersectionSet(fantasyBooksSet, actionBooksSet);
});

// (symmetricDifference) Return books that are either fantasy or action but not both
Deno.bench('array: filter/includes/concat', () => {
  const overlap = fantasyBooksArray.filter((book) =>
    actionBooksArray.includes(book)
  );
  return fantasyBooksArray
    .concat(actionBooksArray)
    .filter((book) => !overlap.includes(book));
});

Deno.bench('set  : symmetricDifference', () => {
  fantasyBooksSet.symmetricDifference(actionBooksSet);
});

// (union) Return all fantasy & action books
Deno.bench('array: concat & new Set', () => {
  [...new Set(fantasyBooksArray.concat(actionBooksArray))];
});

Deno.bench('set  : union', () => {
  fantasyBooksSet.union(actionBooksSet);
});

// (isDisjointFrom) Check if two genres are disjoint
// meaning none of the same books
Deno.bench('array: every/not-includes', () => {
  fantasyBooksArray.every((book) => !actionBooksArray.includes(book));
});

Deno.bench('set  : isDisjointFrom', () => {
  fantasyBooksSet.isDisjointFrom(actionBooksSet);
});

// (isSubsetOf) Check if one genre is a subset of another
Deno.bench('array: every/includes', () => {
  fantasyBooksArray.every((book) => actionBooksArray.includes(book));
});

Deno.bench('set  : isSubsetOf', () => {
  fantasyBooksSet.isSubsetOf(actionBooksSet);
});

// (isSupersetOf) Check if one genre is a superset of another
Deno.bench('array: every/includes', () => {
  actionBooksArray.every((book) => fantasyBooksArray.includes(book));
});

Deno.bench('set  : isSupersetOf', () => {
  actionBooksSet.isSupersetOf(fantasyBooksSet);
});
