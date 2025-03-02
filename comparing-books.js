// 5 fantasy books
const fantasyBooksArray = [
  'Harry Potter',
  'The Hobbit',
  'The Night Circus',
  'The Lord of the Rings', // overlap
  'A Song of Ice and Fire', // overlap
];

// 5 action books
const actionBooksArray = [
  'The Hunger Games',
  'Divergent',
  'The Maze Runner',
  'The Lord of the Rings', // overlap
  'A Song of Ice and Fire', // overlap
];

const fantasyBooksSet = new Set(fantasyBooksArray);
const actionBooksSet = new Set(actionBooksArray);

/* difference */
// find all fantasy books that are not in action books
export const diffSet = (set1, set2) => set1.difference(set2);
console.log('diffSet: ', diffSet(fantasyBooksSet, actionBooksSet));

export const diffArr = (arr1, arr2) => arr1.filter((book) => !arr2.includes(book));
console.log('diffArr: ', diffArr(fantasyBooksArray, actionBooksArray));

/* intersection */
// find all fantasy books that are also in action books
export const intersectionSet = (set1, set2) => set1.intersection(set2);
console.log('intersectionSet: ', intersectionSet(fantasyBooksSet, actionBooksSet));

export const intersectionArr = (arr1, arr2) => arr1.filter((book) => arr2.includes(book));
console.log('intersectionArr: ', intersectionArr(fantasyBooksArray, actionBooksArray));

/* symmetric difference */
// find all books that are either fantasy or action, but not both
export const symDiffSet = (set1, set2) => set1.symmetricDifference(set2);
console.log('symDiffSet: ', symDiffSet(fantasyBooksSet, actionBooksSet));

export const symDiffArr = (arr1, arr2) => {
  const overlap = arr1.filter((book) => arr2.includes(book));
  return arr1.concat(arr2).filter((book) => !overlap.includes(book));
}
console.log('symDiffArr: ', symDiffArr(fantasyBooksArray, actionBooksArray));

/* union */
// find all books that are either fantasy or action
export const unionSet = (set1, set2) => set1.union(set2);
console.log('unionSet: ', unionSet(fantasyBooksSet, actionBooksSet));

export const unionArr = (arr1, arr2) => [...new Set(arr1.concat(arr2))];
console.log('unionArr: ', unionArr(fantasyBooksArray, actionBooksArray));

/* isDisjointFrom */
// return true if fantasy and action books have no overlap
export const isDisjointFromSet = (set1, set2) => set1.isDisjointFrom(set2);
console.log('isDisjointFromSet: ', isDisjointFromSet(fantasyBooksSet, actionBooksSet));

export const isDisjointFromArr = (arr1, arr2) => arr1.every((book) => !arr2.includes(book));
console.log('isDisjointFromArr: ', isDisjointFromArr(fantasyBooksArray, actionBooksArray));

/* isSubsetOf */
// return true if all fantasy books are also action books
export const isSubsetOfSet = (set1, set2) => set1.isSubsetOf(set2);
console.log('isSubsetOfSet: ', isSubsetOfSet(fantasyBooksSet, actionBooksSet));

export const isSubsetOfArr = (arr1, arr2) => arr1.every((book) => arr2.includes(book));
console.log('isSubsetOfArr: ', isSubsetOfArr(fantasyBooksArray, actionBooksArray));

/* isSupersetOf */
// return true if all action books are also fantasy books
export const isSupersetOfSet = (set1, set2) => set1.isSupersetOf(set2);
console.log('isSupersetOfSet: ', isSupersetOfSet(fantasyBooksSet, actionBooksSet));

export const isSupersetOfArr = (arr1, arr2) => arr2.every((book) => arr1.includes(book));
console.log('isSupersetOfArr: ', isSupersetOfArr(fantasyBooksArray, actionBooksArray));
