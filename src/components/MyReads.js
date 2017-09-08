import React from 'react'
import BookShelf from './BookShelf'

class MyReads extends React.Component {
	// filter books to different shelves
  filterBooks(shelf){
      const { books } =this.props
      return books.filter((book) => book.shelf === shelf)
    }
    
  render(){
    const { updateBooks } =this.props
		return (
			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf
                books={this.filterBooks("currentlyReading")}
                title="Currently Reading"
                updateBooks={updateBooks}
              />
              <BookShelf
                books={this.filterBooks("wantToRead")}
                title="Want To Read"
                updateBooks={updateBooks}
              />
              <BookShelf
                books={this.filterBooks("read")}
                title="Read"
                updateBooks={updateBooks}
              />
            </div>
      </div>
		)
	}
}

export default MyReads