import React, { Component } from "react";
import BookCards from "../components/BookCards";
import API from "../utils/API";

var bookArray = {
  items: []
};

class Search extends Component {
  state = {
    bookArray: bookArray,
    savedBookids: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => {
        let ids = [];
        res.data.forEach(book => ids.push(book.bookID))
        this.setState({ savedBookids: ids });
        console.log(ids)
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  bookSearch = (event) => {
    event.preventDefault();
    fetch("https://www.googleapis.com/books/v1/volumes?q="+this.state.searchTerm+"&printType=books&key=AIzaSyCqwaY-3wWYY4jadfbnn8bv2zPEjZA2Moo")
    .then(res => res.json())
    .then(
        (result) => {
          if(result.items) {
            console.log(result.items)
            this.setState({bookArray: result})
          }
        },
        (error) => {
        this.setState({
            isLoaded: true,
            error
        });
        }
    )
  }

  saveBook = event => {
    event.preventDefault();
    let bookID = event.target.getAttribute('data-bookid');
    if (true) {
      API.saveBook({
        title: event.target.getAttribute('data-title'),
        authors: event.target.getAttribute('data-authors'),
        description: event.target.getAttribute('data-description'),
        image: event.target.getAttribute('data-image'),
        link: event.target.getAttribute('data-link'),
        bookID: event.target.getAttribute('data-bookid')
      })
        .then(res => {
          var temp = this.state.savedBookids.concat(bookID);
          this.setState({ savedBookids: temp })
        })
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <p className="lead">Book Search</p>
                  <form>
                    <div class="form-group">
                      <label>Book</label>
                      <input type="text" className="form-control" id="bookInput" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} placeholder="Harry Potter"/>
                    </div>
                    <button onClick={this.bookSearch} class="btn btn-primary float-right">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <BookCards
            bookArray = {this.state.bookArray}
            saveBook = {this.saveBook}
            savedBookids = {this.state.savedBookids}
          />
        </div>
      </div>
    );
  }
}

export default Search;
