import React from 'react'


class Book extends React.Component {
	state = {
    shelf: ''
  }

  

  updateBookShelf = (shelf) => {
    

    const { book,updateBooks } = this.props;
    console.log(book)
    
    this.setState({shelf})
    updateBooks(book, shelf);
  }

  componentDidMount() {
    const { book } = this.props
    console.log(book)
    let shelf = book.shelf?book.shelf:'none'
    console.log(shelf) 
    this.setState({shelf:shelf})
  }


  render(){
    const { book } = this.props
    const { shelf } = this.state
		return (
			
     
       
        <li key={book.title}>
          <div className="book">
            <div className="book-top">
                     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                     <div className="book-shelf-changer">
                       <select 
                        value={shelf}
                        onChange={(event) => this.updateBookShelf(event.target.value)} 
                       >
                         <option value="None" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                       </select>
                     </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>


        
    
      
			
		)
	}
}

export default Book