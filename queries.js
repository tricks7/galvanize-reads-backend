const database = require('./database-connection')

const getAll = () => {
    return database('authors', 'books', 'book_authors').select()
}

const knex = require('./knexfile');

function getBooks() {
  return knex('books')
    .select()
    .innerJoin('book_authors', 'books.id', 'book_id')
    .innerJoin('authors', 'author_id', 'authors.id');
}

function getSingleBook(bookID) {
  return knex('books')
    .select('*', 'books.id AS book_id')
    .leftOuterJoin('book_authors', 'books.id', 'book_id')
    .leftOuterJoin('authors', 'author_id', 'authors.id')
    .where('books.id', bookID);
}

module.exports = {
  getBooks: getBooks,
  getSingleBook: getSingleBook,
  getAll: getAll
}; 