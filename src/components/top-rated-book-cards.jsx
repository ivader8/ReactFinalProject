import React, { Component, Fragment } from 'react'
import BookCard from './book-card';
import Loading from '../loading';
import BooksService from '../services/books-service';
import BookCardWithContext from './book-card';

class TopRatedBookCards extends Component {
    state = {
        books: [],
        isLoading: false

    }

    static service = new BooksService();

    render() {

        const { books, isLoading } = this.state;

        if (isLoading) {
            return <Loading />;
        }

        if (!books.length && !isLoading) {
            return (
                <div>
                    <br />
                    <h2> No books</h2>
                </div>

            )
        }

        if (books.length > 6) {
            return (        
                <Fragment>
                    <h2 align="center">Latest Products:</h2>
                    <br />
                    <div className="row">
                        <div align="center" className="card-deck space-top">
                            {
                                books.map(book => (
                                    <BookCard key={book.id}{...book} />
                                ))
                            }
                        </div>
                    </div>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <h2 align="center">Our Products:</h2>
                <br />
                <div className="row">
                    <div className="card-deck space-top">
                        {
                            books.map(book => (
                                <BookCardWithContext key={book.id}{...book} />
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        );
    }

    async componentDidMount() {
        try {
            const books = await TopRatedBookCards.service.getTopRatedBooks();

            this.setState({ books });
        } catch (error) {
            console.error(error)
        }
    }
}



export default TopRatedBookCards;