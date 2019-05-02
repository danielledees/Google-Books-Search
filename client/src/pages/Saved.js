import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Books extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!",
  };

//    componentDidMount() {
//             this.loadBooks();
//           }

//           loadBooks = () => {
//             API.getBooks()
//               .then(res => this.setState({ books: res.data.items}))
//               .catch(err => console.log(err));
//           };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

   getBooks = () => {

     const query = this.state.q
     console.log(query)
    API.search(query)
      .then(res =>
        this.setState({
          books: res.data.items
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //  this.getBooks();
    const query = this.state.search
    console.log("hey")
    console.log(this.state.search)
    API.search(query)
      .then(res =>
        this.setState({
          books: res.data.items
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  


  render() {
    console.log(this.state.books)
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Saved Books.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <SearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => {
                    let author = book.volumeInfo.authors[0] == "undefined" ? "NA" : book.volumeInfo.authors[0]
                    return <Book

                      key={book.id}
                      title={book.volumeInfo.title}
                      //subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      author = {author}
                      description={book.volumeInfo.description}
                      //image={book.volumeInfo.imageLinks.thumbnail}
                    //   Button={() => (
                    //     <button
                    //       onClick={() => this.handleBookSave(book.id)}
                    //       className="btn btn-primary ml-2"
                    //     >
                    //       Save
                    //    </button>
                    //   )}
                    />
                    })}
                     
                </List>
              ) : (
                  <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Books;






// import React, { Component } from "react";
// import API from "../utils/API";
// import Jumbotron from "../components/Jumbotron";
// import SearchForm from "../components/SearchForm";
// import Search from "../components/Search";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import Results from "../components/Results";


// class Books extends Component {
//     state = {
//         search: "",
//         books: [],
//         results:[],
//         title: "",
//         author: "",
//         synopsis: "",
//         error: ""
//     };

//     componentDidMount() {
//         this.loadBooks();
//       }

//       loadBooks = () => {
//         API.getBooks()
//           .then(res => this.setState({ books: res.data}))
//           .catch(err => console.log(err));
//       };

//     handleInputChange = (event) => {
//       const name = event.target.name;
//       const value = event.target.value;
//         this.setState({ [name]: value})
//         };


//    handleFormSubmit = (event) => {
//        event.preventDefault();
//        console.log("hey")
//        const query = this.state.search
//        API.search(query)
//        .then(res => {
//          console.log(res.data);
//          this.setState({ results: res.data.items})
//         })
//        .catch(err => console.log(err))
//        if (this.state.title && this.state.author) {



//       }
//    };

//    saveBtn = (book, auth, about) => {
//      console.log(book, auth, about);

//      this.setState({
//        title: book,
//        author: auth
//      });

//      console.log(this.state.title, this.state.author);

//      if (this.state.title && this.state.author) {
//       API.saveBook({
//         title: this.state.title,
//         author: this.state.author,
//         synopsis: this.state.description

//       })
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));

//      } 
//    }

//    handleBookSave = id => {
//     const book = this.state.books.find(book => book.id === id);
//     console.log(book);
//    }


//     render () {
//         return (

//                 <Container fluid >
//                 <Row>
//                     <Col size="md-12">
//                     <Jumbotron />



//                 <SearchForm
//                      handleFormSubmit={this.handleFormSubmit}
//                      handleInputChange={this.handleInputChange}
//                      books={this.state.books}
//                 />
//                 <Results results={this.state.results}
//                 saveBtn = {this.saveBtn} 
//                 />
//                   </Col>
//                 </Row>
//                 </Container>

//         );
//       }
//     };



// export default Books;