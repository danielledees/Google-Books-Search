import React from "react";
import {Component} from "react";
import {ListItem, List} from "./List";
import {Container, Row, Col} from "./Grid";

class Results extends Component {
    render () {
        return (
            <List className="list-group">
            {this.props.results.map(result => (      
              <ListItem className="list-group-item" key={result.id}>
              <div style={{float:"left"}}>
              <strong>{result.volumeInfo.title} by {result.volumeInfo.authors} </strong></div>
                  <a href={result.volumeInfo.previewLink} target="_black">
                  <button type="button" className="btn btn-primary mt-3 btnNew">View</button>
                  </a>
                  <button type="button"  id={result.id} 
                  onClick={() => {
                    this.props.saveBtn (result.volumeInfo.title, result.volumeInfo.authors, result.volumeInfo.description)
                  }} 
                  className="btn btn-primary mt-3 btnNew">Save</button>
                  <br></br>
                  <br></br>
                  <Row>
                    {/* <Col size="md-2">                  
                      <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.smallThumbnail} />
                    </Col> */}
                    <Col size="md-10">
                    <span id="synopsis">{result.volumeInfo.description}</span>    
                    </Col>
                  </Row>       
            </ListItem>
            ))}
          </List>
      
  );
    }
};

export default Results;