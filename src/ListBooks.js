import React from 'react'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'

export default class ListBooks extends React.Component {
    render() {
        const { booksList, changeShelf } = this.props
        const currentlyReading = booksList.filter((book) => book.shelf === 'currentlyReading')
        const read = booksList.filter((book) => book.shelf === 'read')
        const wantToRead = booksList.filter((book) => book.shelf === 'wantToRead')
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentlyReading.map((item) => (
                                        <BookItem item={item} key={item.id} changeShelf={changeShelf} />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToRead.map((item) => (
                                        <BookItem item={item} key={item.id} changeShelf={changeShelf} />
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {read.map((item) => (
                                        <BookItem item={item} key={item.id} changeShelf={changeShelf} />
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/Search'>
                        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}