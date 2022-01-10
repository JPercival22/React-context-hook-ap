import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
            <div className='book-list'>
                <ul>
                    <li>BBC1</li>
                    <li>BBC2</li>
                    <li>ITV</li>
                </ul>
            </div>
        );
    }
}

export default BookList;