import React from 'react'

export default class BookItem extends React.Component {
    render() {
        let { item, changeShelf } = this.props
        return (
            <li key={item.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${item.imageLinks && item.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={item.shelf? item.shelf:'none'} onChange={(e) => changeShelf(item, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{item.title}</div>
                    <div className="book-authors">{item.authors && item.authors.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
            </li>
        )
    }
}