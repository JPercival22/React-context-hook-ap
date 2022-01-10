import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
            <div className='book-list'>
                <ul>
                    <li>Of Mice and Men</li>
                    <li>Johnny Cash - The Autobiography</li>
                    <li>Nowhere Boy</li>
                </ul>
            </div>
        );
    }
}

export default BookList;