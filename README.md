# Weather_App

A simple Node.js app that shows current weather for any city using OpenWeatherMap API, with dynamic backgrounds based on temperature.

## Features

- Search weather by city name  
- Displays temperature and weather conditions  
- Dynamic background images based on temperature ranges  
- Built with Express.js and EJS templating

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Weather_App.git

2. Navigate into the project directory.
   ```bash
   cd Weather_App

3. Install dependencies:
   ```bash
   npm install

4. Add your OpenWeatherMap API key in server.js:
   - You can get a free API key by signing up here: 
   https://home.openweathermap.org
   ```bash
   const apiKey = 'YOUR_API_KEY';
   
5. Start the server:
   ```bash
   node server.js

## Usage

- Enter the name of any city
- Click “Get Weather”
- See the current temperature, weather conditions, and background change based on temperature
