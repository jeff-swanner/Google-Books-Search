import React from "react";

function Search(props) {
  return(
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <p className="lead">Book Search</p>
            <form>
              <div className="form-group">
                <label>Book</label>
                <input type="text" className="form-control" id="bookInput" name="searchTerm" value={props.searchTerm} onChange={props.handleInputChange} placeholder="Harry Potter"/>
              </div>
              <button onClick={props.bookSearch} className="btn btn-primary float-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;

