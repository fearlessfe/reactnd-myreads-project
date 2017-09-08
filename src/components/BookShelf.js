import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
	render(){
    const { books,title,updateBooks } = this.props
		return (
			<div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => {
                          return(<Book
                                  book={book}
                                  key={book.id}
                                  updateBooks={updateBooks}
                                />
                            )
                        })}
                        
                        
                    </ol>
                  </div>
      </div>
		)
	}
}

export default BookShelf