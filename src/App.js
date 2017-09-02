import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookshelfBooks from './BookshelfBooks'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		isActave: true,
		books: [],
		currentlyReading: [],
		wantToRead: [],
		read: [],
		showSearchPage: true
	}


	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({books})
			this.setState({
				currentlyReading: this.state.books.filter(book => book.shelf === "currentlyReading")
			})
			this.setState({
				wantToRead: this.state.books.filter(book => book.shelf === "wantToRead")
			})
			this.setState({
				read: this.state.books.filter(book => book.shelf === "read")
			})
			
		})
	}
	render() {
		return (
			<div className="app">
				




				<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <nav>
            	<ul>
	            	<li><Link to='/'>currentlyReading</Link></li>
	            	<li><Link to='/wantToRead'>wantToRead</Link></li>
	            	<li><Link to='/read'>read</Link></li>
            	</ul>
            </nav>
            


            <Route exact path='/' render={() => (
							<BookshelfBooks 
	            books={this.state.currentlyReading} 
	            title="Currently Reading"
            />
            )

            }/>		

            <Route  path='/wantToRead' render={() => (
							<BookshelfBooks 
	            books={this.state.wantToRead} 
	            title="Want To Read"
            />
            )

            }/>	

            <Route exact path='/read' render={() => (
							<BookshelfBooks 
	            books={this.state.read} 
	            title="Read"
            />
            )

            }/>	

            

            

        </div>


				<div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>

			</div>
		)
	}
}

export default BooksApp
