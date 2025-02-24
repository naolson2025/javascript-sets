// example 1: Category Manager
const categories = {
  action: [
    'Game of Thrones',
    'Breaking Bad',
    'The Walking Dead',
    'Deadpool & Wolverine',
  ],
  comedy: [
    'Deadpool & Wolverine',
    'The Good Place',
    'The Big Bang Theory',
    'The Proposal',
  ],
  drama: ['The Crown', 'Stranger Things', 'The OA'],
  romance: ['The Bachelor', 'Love Island', 'The Proposal'],
};
const action = new Set(categories.action);
const comedy = new Set(categories.comedy);
const drama = new Set(categories.drama);
const romance = new Set(categories.romance);

// movies that are both action & comedy
const actionAndComedy = () =>
  categories.action.filter((movie) => categories.comedy.includes(movie));

Deno.bench('filter/includes', () => {
  actionAndComedy();
});

const actionAndComedy2 = () => action.intersection(comedy);

Deno.bench('intersection', () => {
  actionAndComedy2();
});

// console.log(actionAndComedy());
// console.log(actionAndComedy2())

// romance that are not comedy
const pureRomanceArray = () =>
  categories.romance.filter((movie) => !categories.comedy.includes(movie));

const pureRomanceSet = () => romance.difference(comedy);

// console.log(pureRomanceArray())
// console.log(pureRomanceSet());

// action & comedy, but not movies that are considered both
const actionComedyNotBothArray = () => {
  const overlap = categories.action.filter((movie) =>
    categories.comedy.includes(movie)
  );
  return categories.action
    .concat(categories.comedy)
    .filter((movie) => !overlap.includes(movie));
}

const actionComedyNotBothSet = () => action.symmetricDifference(comedy)

// console.log(actionComedyNotBothArray())
// console.log(actionComedyNotBothSet())

// ** (union test) all action & comedy movies **

const allActionAndComedyArray = () =>
  [...new Set(categories.action.concat(categories.comedy))]

const allActionAndComedySet = () => action.union(comedy);

// console.log(allActionAndComedyArray());
// console.log(allActionAndComedySet());

// ** isDisjointFrom test **
const isDisjointFromArray = () =>
  categories.action.every((movie) => !categories.drama.includes(movie));

const isDisjointFromSet = () => action.isDisjointFrom(drama);

// console.log(isDisjointFromArray());
// console.log(isDisjointFromSet());

// ** isSubsetOf test **
const isSubsetOfArray = () =>
  categories.comedy.every((movie) => categories.action.includes(movie));

const isSubsetOfSet = () => comedy.isSubsetOf(action);

// console.log(isSubsetOfArray());
// console.log(isSubsetOfSet());

// ** isSupersetOf test **
const isSupersetOfArray = () =>
  categories.action.every((movie) => categories.comedy.includes(movie));

const isSupersetOfSet = () => action.isSupersetOf(comedy);

// console.log(isSupersetOfArray());
// console.log(isSupersetOfSet());