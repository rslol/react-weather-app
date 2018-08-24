/* Step 1) type rcc then hit tab */
import React, { Component } from "react";
/* Step 4) import connect from react-redux (remember this is the glue between react and redux) */
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/googleMap";

class ForecastList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(data => data.main.temp);
    const humidity = cityData.list.map(data => data.main.humidity);
    const visibility = cityData.list.map(data => data.clouds.all);
    const { lon, lat } = cityData.city.coord;

    return (
      /* Remember with adding a key, add it to the top level of the element and make it unique */
      <tr key={name}>
        {/* The reason why its cityData.city.name is because that is how the data is coming back
                from the API */}
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temp} color="red" />
        </td>
        <td>
          <Chart data={humidity} color="blue" />
        </td>
        <td>
          <Chart data={visibility} color="yellow" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Visibility</th>
            </tr>
          </thead>
          {/* The rest of the steps are specific to this solving this puzzle. */}
          {/* There will be a comprehensive step-by-step guide to generally getting set up with react/redux */}
          <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
        </table>
      </div>
    );
  }
}

/* Step 5) create the function mapStateToProps, that takes state as a parameter */
function mapStateToProps(state) {
  /* Step 6) return weather as a prop from state.weather, which is found in reducers/index.js line 5 */
  return { weather: state.weather };
  /* Remember this is now available as this.props.weather */
}

/* Step 2) export container (smart component) */
export default connect(mapStateToProps)(ForecastList);
/* Step 3) within component/app.js, import the file and render the component within the main class  */
