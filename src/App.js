import React from 'react'
import { Route } from 'react-router'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
//import BookItem from './BookItem'

class BooksApp extends React.Component {
  state = {
    booksList: [],
    searchedList: []
  }
  getAllUserBooks = () => {
    BooksAPI.getAll().then((res) => {
      //console.log({ res })
      this.setState({ booksList: res })
    })
  }
  componentDidMount() {
    this.getAllUserBooks()
  }

  onSearch = (query) => {
    /*     if (query.length === 0) {
          this.setState({ searchedList: [] })
        }
        else { */
    BooksAPI.search(query)
      .then((res) => {
        if (Array.isArray(res)) {
          let response = res
          let { booksList } = this.state
          response.map((resItem) => (
            booksList.map((bookItem) => {
              if (resItem.id === bookItem.id) {
                resItem.shelf = bookItem.shelf
              }
              return false
            })
          ))
          this.setState({ searchedList: res })
          // console.log({ res })
        }
        else {
          this.setState({ searchedList: [] })
        }

      })
      .catch((err) => {
        console.log(err)
      })
    //}

  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((res) => {
        //console.log(res)
        this.getAllUserBooks()
      })
  }

  render() {
    let { booksList, searchedList } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (<ListBooks booksList={booksList} changeShelf={this.changeShelf} />)} />
        <Route exact path='/Search' render={() => (<SearchBooks onSearch={this.onSearch} searchedList={searchedList} changeShelf={this.changeShelf} />)} />
      </div>
    )
  }
}

export default BooksApp
