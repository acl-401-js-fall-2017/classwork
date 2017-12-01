import actions from '../services/actions';

// OPTION 1: Expose each action creator individually
// const bookActions = actions('BOOK', booksApi);

// export const loadBooks = bookActions.load;
// export const addBooks = bookActions.add;
// export const updateBooks = bookActions.update;
// export const removeBooks = bookActions.remove;

// OPTION 2: Export as a set of actions:
export const bookActions = actions('BOOK', '/books');
export const reviewActions = actions('REVIEW', '/reviews', '/books');


// pre-abstraction

// export function addBook(book) {
//   return {
//     type: 'BOOK_ADD',
//     payload: bookApi.add(book)
//   };
// }

// export function removeBook(id) {
//   return { 
//     type: 'BOOK_REMOVE', 
//     payload: bookApi.delete(id).then(() => id)
//   };
// }