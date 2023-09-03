import React from "react";
import Info from "./components/Info"
import Form from './components/Form'
import Weather from "./components/Weather";

const API_KEY = '0263cb9c02f9aacb96568fc556b466f9'

class App extends React.Component {

	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		pressure: undefined,
		sunset: undefined,
		error: undefined
	}

	getTime = (time) => {
		let date = new Date();
		date.setTime(time);
		let curentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
		
		return curentTime;
	}

	gettingWeather = async (e)=> {
		e.preventDefault();
		const city = e.target.elements.city.value;
		if (city) {
		const api = await 
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
		const data = await api.json();
		console.log(data)
		this.setState({
			temp: data.main.temp,
			city: data.name,
			country: data.sys.country,
			pressure: data.main.pressure,
			sunset: this.getTime(data.sys.sunset),
			error: ""
		})
		}
	}

	render () {
		return (
			<div>
				<Info/>
				<Form weatherMethod={this.gettingWeather} />
				< Weather 
					temp={this.state.temp}
					city={this.state.city}
					country={this.state.country}
					pressure={this.state.pressure}
					sunset={this.state.sunset}
				/>
			</div>
		)
	}
}
export default App
