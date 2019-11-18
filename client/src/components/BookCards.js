import React from 'react';

function BookCards(props) {
    return(
        <div className="row mt-3">
            <div className="col-lg-12">
                <div className="card">
                <div className="card-body">
                    <p className="lead">Results</p>
                        {props.bookArray.items ? (
                            <div>
                            {props.bookArray.items.map(book => (
                                <div className="card" key={book.id}>
                                    <div className="card-body">
                                        {props.savedBookids.includes(book.id) ? (
                                            <button type="button" className="btn btn-warning float-right ml-2" disabled>Saved</button>
                                        ) : ( 
                                            <button type="button" className="btn btn-secondary float-right ml-2" onClick={props.saveBook} data-title={book.volumeInfo.title} data-authors={book.volumeInfo.authors[0]} data-description={book.volumeInfo.description} data-image={book.volumeInfo.imageLinks.thumbnail} data-link={book.volumeInfo.infoLink} data-bookid={book.id}>Save</button>
                                        )}
                                        <a href={book.volumeInfo.infoLink}>
                                        <button type="button" class="btn btn-info float-right">View</button>
                                        </a>
                                        <p className="lead">{book.volumeInfo.title}</p>
                                        {book.volumeInfo.authors.length > 0 &&
                                            <p>Written by {book.volumeInfo.authors[0]}</p>
                                        }
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12" >
                                                <img src={book.volumeInfo.imageLinks.thumbnail} className="img-fluid  p-1"></img>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12" >
                                                <p>{book.volumeInfo.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))} 
                            </div>
                        ) : (
                            <h3>No Results to Display</h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCards;

