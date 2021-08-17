import React from 'react';
import { getCurrentWeather } from './../api/open-weather';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      location: "",
      temp: "",
    };
  }

  onChange(e) {
    this.setState({
      location: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    getCurrentWeather(this.state.location)
      .then((res) => {
          this.setState({
            temp: res.data.main.temp
          });
      });
  }

  render() {
    const location = this.state.location;
    const temp = this.state.temp

    return (
      <div>
      <form onSubmit={(e) => this.onSubmit(e)}>
        <button type="submit">Search</button>
        <input
          id="search"
          name="search"
          value={location}
          onChange={(e) => this.onChange(e)}>
        </input>
      </form>
      </div>
    )
  }
}

export default SearchBar;