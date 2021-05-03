import React from 'react'
import { Link } from 'react-router-dom'
import BookItem from './BookItem'

export default class SearchBooks extends React.Component {

    componentWillUnmount(){
        this.props.onSearch('')
    }

    render() {
        const { onSearch, searchedList,changeShelf } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(e) => onSearch(e.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedList && searchedList.map((item) => (
                            <BookItem item={item} key={item.id} changeShelf={changeShelf} />
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}