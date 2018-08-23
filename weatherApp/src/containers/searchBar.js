import React, { Component } from "react";
import { connect } from "react-redux";
/* Remember this code to bind your Action Creators */
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  /* This is how you initialize state */
  /* Remember to use a constructor function followed by line 12 */
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    /* This is how to bind 'this' to a function */
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    /* How to get the value of the event */
    /* if youre going to use 'this' in a function, make sure to bind it. Reference line 15 */
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    /* Prevents the form from refreshing the page. Remember it's an SPA */
    event.preventDefault();
    /* Remember that fetchWeather takes one property, city. See actions/index.js line 12 */
    this.props.fetchWeather(this.state.searchTerm);
    /* After we run the fetchWeather function, we set the searchTerm state to an empty string, clearing the search bar */
    this.setState({ searchTerm: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five day forcast in your favorite US city"
            className="form-control"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

/* We are passing null in is because that mapDispatchToProps is the second argument  */
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
