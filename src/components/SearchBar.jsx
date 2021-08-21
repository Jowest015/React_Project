import React from 'react';
import { submitWeatherData } from '../redux/actions';
import { connect } from 'react-redux';
import { getCurrentWeather } from './../api/open-weather';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      location: ''
    };
  }

  onInputChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    getCurrentWeather(this.state.location)
      .then((res) => {
        console.log(res.data)
          this.setState({
            ...this.state,
            name: res.data.name,
            temp: res.data.main.temp, 
            description: res.data.weather[0].main,
            humidity: res.data.main.humidity,
            windspd: res.data.wind.speed
          },
          );

          // dispatch function
          this.props.onSubmit(res.data);

      });
  }

  render() {
    const location = this.state.location;
    // const name = this.state.name;
    // const temp = this.state.temp;
    // const humidity = this.state.humidity;
    // const windspd = this.state.windspd;
    // const description = this.state.description;

    return (
      <div>
      <form onSubmit={(e) => this.onFormSubmit(e)}>        
      <input
          id="search"
          name="search"
          value={location}
          placeholder="City name goes here"
          onChange={(e) => this.onInputChange(e)}>
        </input>
        <br />
        <button type="submit">Check Weather</button>
      </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
    return {weatherData: state.weatherData};
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmit: function (weatherData) {
      dispatch(submitWeatherData(weatherData));
    }
  }
}

var ConnectedWeather = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default ConnectedWeather;