import React, { Component } from "react";
import SearchCard from "../components/SearchCard"
import BookCards from "../components/BookCards";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

class Search extends Component {
  state = {
    bookArray: [],
    savedBookids: [],
    searchTerm:''
  };

  componentDidMount() {
    API.getBooks()
      .then(res => {
        let ids = [];
        res.data.forEach(book => ids.push(book.bookID))
        this.setState({ savedBookids: ids });
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
    let searchTerm;
    if(this.state.searchTerm) {
      searchTerm = this.state.searchTerm;
    } else {
      searchTerm = "Harry Potter";
    };
    fetch("https://www.googleapis.com/books/v1/volumes?q="+searchTerm+"&printType=books&key=AIzaSyCqwaY-3wWYY4jadfbnn8bv2zPEjZA2Moo")
    .then(res => res.json())
    .then(
      (result) => {
        if(result.items) {
          this.setState({bookArray: result})
        } else {
          this.setState({bookArray: []})
        }
      },
      (error) => {
        console.log(error);
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
        <Navbar
          search = "active"
        />
        <Jumbotron/>
        <div className="container">
          <SearchCard 
            searchTerm = {this.state.searchTerm}
            handleInputChange = {this.handleInputChange}
            bookSearch = {this.bookSearch}
          />
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
