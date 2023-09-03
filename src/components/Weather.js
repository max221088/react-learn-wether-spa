import React from "react";

class Weather extends React.Component {
	render () {
		return (
			<div>
				{ this.props.city &&
					<div>
						<p>City: {this.props.city}</p>
						<p>Country: {this.props.country}</p>
						<p>Temperature: {this.props.temp}</p>
						<p>Pressure: {this.props.pressure}</p>
						<p>Sunset: {this.props.sunset}</p>
					</div>
				}
			</div>
		)
	}
}
export default Weather