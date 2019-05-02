import React from "react";
import {Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import Results from "./Results";


class Search extends Component {
  state = {
    search: "",
    results:[]
  };


  componentDidMount() {
    this.searchBooks("");
  }

  searchBooks = (query) => {
    API.search(query)
    .then(res => this.setState({ results: res.data.item}))
    .catch(err => console.log(err))
  }

  saveBook = (event) => {
    const thisBook = this.state.results.find(book => book.id === event.target.id);

    const dbBook = {
      title: thisBook.volumeInfo.title,
      authors: thisBook.volumnInfo.authors,
      synopsis: thisBook.volumnInfo.description,
      image: thisBook.volumeInfo.imageLinks.smallThumbnail,
      link: thisBook.volumeInfo.infoLink
    };

    API.saveBook(dbBook)
    .then(res => {
      console.log(res.status);
    })
    .catch(err => {
      console.log(err);
    })
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });

  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
    this.searchBooks(this.state.search);
    
  };


  render () {
    return (
      <div>
        <SearchForm 
        search = {this.state.search}
        handleInputChange = {this.handleInputChange}
        handleFormSubmit = {this.handleFormSubmit}
        />

        <Results results = {this.state.results}
        />
      </div>
      
    )
  }
}



  

export default Search;
