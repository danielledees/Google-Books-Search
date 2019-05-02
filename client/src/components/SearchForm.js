import React from "react";

function SearchForm(props) {
  return (
    <form>
        <h1>Search Books</h1>
      <div className="form-group">
        <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Book</label>
        <input className="form-control-lg" 
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For Books"
          id="q"
        />
        
       
        
    
        <button onClick={props.handleFormSubmit}className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

