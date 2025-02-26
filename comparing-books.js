const fantasyBooksArray = [
  'Harry Potter',
  'The Hobbit',
  'The Lord of the Rings',
  'A Song of Ice and Fire',
  'The Chronicles of Narnia',
  'Percy Jackson & the Olympians',
  'The Magicians',
  'His Dark Materials',
  'American Gods',
  'The Night Circus',
];

const actionBooksArray = [
  'The Hunger Games',
  'Divergent',
  'The Maze Runner',
  'Ready Player One',
  "Ender's Game",
  'The Mortal Instruments',
  // overlap
  'The Lord of the Rings',
  'A Song of Ice and Fire',
];

const fantasyBooksSet = new Set(fantasyBooksArray);
const actionBooksSet = new Set(actionBooksArray);

// ** difference test **
// Return books that are fantasy but not action
export const differenceArray = (arr1, arr2) =>
  arr1.filter((book) => !arr2.includes(book));

export const differenceSet = (set1, set2) => set1.difference(set2);

// console.log(differenceArray(fantasyBooksArray, actionBooksArray));
// console.log(differenceSet(fantasyBooksSet, actionBooksSet));

// ** intersection test **
// Return books that are both fantasy & action
export const intersectionArray = (arr1, arr2) =>
  arr1.filter((book) => arr2.includes(book));

export const intersectionSet = (set1, set2) => set1.intersection(set2);

// console.log(intersectionArray(fantasyBooksArray, actionBooksArray));
// console.log(intersectionSet(fantasyBooksSet, actionBooksSet));

// ** symmetricDifference test **
// fantasy & action books, but not books that are considered both
export const symmetricDifferenceArray = (arr1, arr2) => {
  const overlap = arr1.filter((movie) => arr2.includes(movie));
  return arr1.concat(arr2).filter((movie) => !overlap.includes(movie));
};

export const symmetricDifferenceSet = (set1, set2) =>
  set1.symmetricDifference(set2);

// console.log(symmetricDifferenceArray(fantasyBooksArray, actionBooksArray));
// console.log(symmetricDifferenceSet(fantasyBooksSet, actionBooksSet));

// ** union test **
// all fantasy & action books
export const unionArray = (arr1, arr2) => [...new Set(arr1.concat(arr2))];

export const unionSet = (set1, set2) => set1.union(set2);

// console.log(unionArray(fantasyBooksArray, actionBooksArray));
// console.log(unionSet(fantasyBooksSet, actionBooksSet));

// ** isDisjointFrom test **
// return boolean if the two sets have no books in common
export const isDisjointFromArray = (arr1, arr2) =>
  arr1.every((book) => !arr2.includes(book));

export const isDisjointFromSet = (set1, set2) => set1.isDisjointFrom(set2);

// console.log(isDisjointFromArray(fantasyBooksArray, actionBooksArray));
// console.log(isDisjointFromSet(fantasyBooksSet, actionBooksSet));

// ** isSubsetOf test **
// return boolean set2 contains all books in set1
export const isSubsetOfArray = (arr1, arr2) =>
  arr1.every((book) => arr2.includes(book));

export const isSubsetOfSet = (set1, set2) => set1.isSubsetOf(set2);

// console.log(isSubsetOfArray(fantasyBooksArray, actionBooksArray));
// console.log(isSubsetOfSet(fantasyBooksSet, actionBooksSet));

// ** isSupersetOf test **
// return boolean set1 contains all books in set2
export const isSupersetOfArray = (arr1, arr2) =>
  arr1.every((book) => arr2.includes(book));

export const isSupersetOfSet = (set1, set2) => set1.isSupersetOf(set2);

// console.log(isSupersetOfArray(fantasyBooksArray, actionBooksArray));
// console.log(isSupersetOfSet(fantasyBooksSet, actionBooksSet));
