import React from 'react';


class SearchBar extends React.Component {

  state = { term: ''}

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
    //the prop is coming from app.js
  }




  render(){
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text"
             value={this.state.term}
             onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
