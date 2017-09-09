import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from './Book'

class Search extends React.Component {
	state = {
    query: '',
    searchBooks: []
  }
  
  updateQuery = (query) => {
    
    const { books } =this.props

    this.setState({ query:query.trim() })
    if(query){
      
      BooksAPI.search(query,20).then((searchBooks) => {
      if (searchBooks && searchBooks.length) {
        searchBooks.forEach((searchBook,index) => {
          
          const bookIndex = books.findIndex((book) => {
            return book.id === searchBook.id
          })
          
          if(bookIndex !== -1){
            
            searchBooks[index] = Object.assign([], books[bookIndex]);
            console.log(searchBook)
          }
          
        })
        this.setState({ searchBooks });
          
      }
    })
    }else{
      this.setState({ query: '',searchBooks: []});
    }
  }

  render(){
    
    const { searchBooks } = this.state
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
            {searchBooks.map(book => {
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