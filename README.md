# Weather App React

This is a weather application built with [ReactJS](https://react.dev/) for The Odin Project's Javascript course. This app is fully functional and will display live weather conditions for any location using data pulled from [weatherapi.com](https://www.weatherapi.com/docs/).

### Features / Technologies used

- React
  - `useState`
  - `useEffect`
  - Conditional rendering
  - Props
- APIs
- Promises & `async / await`
- ES6
  - Template literals
  - Higher-order array methods
  - Arrow functions
  - Import / Export
  - Destructuring assignment
- Environment variables (dotenv)
- `date-fns` date formatting library
- Fully responsive styling
- Dynamic background images

### How to use

Simply type a location into the search bar at the top of the page and hit "Search" or <kbd>Enter</kbd>.

If the location is not found, an error message will appear beneath the search bar. If you enter a valid city which returns no results, try adding the state / province / country etc. following the city name.

Below the temperature reading, you can swap the units between imperial and metric by clicking on the ºF / ºC button. This will change both the temperature units as well as any other displayed units (mph -> kph, in -> cm, etc.)

Within the 24 hour forecast, only 8 hours are displayed at a time. Simply click the navigation arrows to display a the next / previous 8 hour group.

The application's background image will change based on the weather conditions of the entered location. If it is night time, a standard night image will be displayed regardless of weather conditions.

### Installation and setup

##### 1. Clone the git repository locally.

- Open your terminal, create a new directory and run the below `git clone` command.

      mkdir weather-app
      git clone git@github.com:dsimrayh/weather-app-react.git

##### 2. Install dependencies

- Within the cloned repository, navigate to the application's root directory and run the below commands to install the project dependencies.

      npm init -y
      npm install

##### 3. Add your API key

- You will need to add your own weatherapi API key to make the application function properly. If you do not have an API key, you can generate one for free by navigating to [weatherapi.com](https://www.weatherapi.com/) and creating an account.

- Create a `.env` file within the application's root directory

        touch .env

- Open the `.env` file and add your API key as shown below.

        VITE_API_KEY="YOUR_API_KEY_HERE"

- Within the application's root directory, run the below command to start the local dev server. The application should now be fully functional and accessible at http://localhost:5173/.

        npm run dev
