import React from 'react'
import BookShelfChange from './BookShelfChange'


class BookshelfBooks extends React.Component {
  moveTo(shelf) {
    
  }

  render() {
    
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            {/*<h2 className="bookshelf-title">{this.props.title}</h2>*/}
            <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.map(book => {
                return (
                  
                    <li key={book.industryIdentifiers[0].identifier}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ 
                            width: 128,
                            height: 193, 
                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                            }}>
                          </div>
                          <BookShelfChange moveTo={this.props.books}/>
                          </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
                  
                )
              })} 
              </ol>

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default BookshelfBooks



                  