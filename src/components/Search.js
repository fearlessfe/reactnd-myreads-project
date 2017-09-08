import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from './Book'

class Search extends React.Component {
	state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    const { myReads } = this.props
    this.setState({ query:query.trim() })
    if(query){
      BooksAPI.search(query,20).then((books) => {
      if (books && books.length) {
        books.filter(book => {return !myReads.some(myBook => {return myBook.id === book.id})})
        this.setState({ books});  
      }
    })
    }else{
      this.setState({ query: '',books: []});
    }
  }

  render(){
    
    const { books } = this.state
    const { updateBooks } = this.props
    
		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
                
            <input
              type="text" 
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
                
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => {
              return (<Book
                        book={book}
                        key={book.id}
                        updateBooks={ updateBooks }
                      />)
            })}  
          </ol>
        </div>
      </div>
		)
	}
}

export default Search