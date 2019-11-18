import React, { Component } from "react";
import API from "../utils/API";
import SavedCards from "../components/SavedCards";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

class Search extends Component {
  state = {
    bookArray: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ bookArray: res.data }))
      .catch(err => console.log(err));
  }

  deleteBook = (event) => {
    event.preventDefault();
    console.log(event.target.getAttribute('data-id'));
    API.deleteBook(event.target.getAttribute('data-id'))
      .then(res => {
        API.getBooks()
          .then(res => this.setState({ bookArray: res.data }))
          .catch(err => console.log(err));
      })
  }

  render() {
    return (
      <div>
        <Navbar
          saved = "active"
        />
        <Jumbotron/>
        <div className="container">
          <SavedCards
            bookArray = {this.state.bookArray}
            deleteBook = {this.deleteBook}
          />
        </div>
      </div>
    );
  }
}

export default Search;
