import React from 'react';

function SavedCards(props) {
    return(
        <div className="row mt-3">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <p className="lead">Saved Books</p>
                        {props.bookArray.map(book => (
                            <div className="card" key={book._id}>
                                <div className="card-body">
                                    <button type="button" class="btn btn-danger float-right ml-2" onClick={props.deleteBook} data-id={book._id}>Delete</button>
                                    <a href={book.link}>
                                    <button type="button" class="btn btn-secondary float-right">View</button>
                                    </a>
                                    <p className="lead">{book.title}</p>
                                    <p>Written by {book.authors}</p>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-12" >
                                            <img src={book.image} className="img-fluid  p-1"></img>
                                        </div>
                                        <div className="col-lg-9 col-md-9 col-12" >
                                            <p>{book.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedCards;

