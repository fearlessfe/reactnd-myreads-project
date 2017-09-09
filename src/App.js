import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import MyReads from './components/MyReads'
import Search from './components/Search'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
	state = {
		books: [],	
	}

  /**
     * add a new book to state.books or update the shelf of a exist book in state.books
     * @param {string} [bookToChange] [the book to add or change shelf]
     * @param {string} [shelf] [the shelf that book need to be update]
     */
	updateBooks = (bookToChange,shelf) => {
		const { books } = this.state

		const bookIndex = books.findIndex((book) => {
			return book.id === bookToChange.id
		})

		let tempBooks = Object.assign([], books);

		if(bookIndex === -1) {
			bookToChange.shelf = shelf
			
			tempBooks.push(bookToChange)
		}else{
			tempBooks[bookIndex].shelf = shelf
			
		}
		
		console.log(tempBooks)
		BooksAPI.update(bookToChange,shelf).then(
			this.setState({books: tempBooks})

		)

	}

  // get the books info 
	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({books})
		})
	}


	render() {
    
    const { books } = this.state

		return (
			<div className="app">
				
        <Route exact path="/" render={ () => (
         
          <MyReads
            books={ books }
            updateBooks={this.updateBooks}
          />
        ) } />
       

        <Route path="/search" render={ () => (
          
          <Search
            books={ books }
            updateBooks={ this.updateBooks }
          />
        ) } />

 
  			<div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>

			</div>
		)
	}
}

export default BooksApp
