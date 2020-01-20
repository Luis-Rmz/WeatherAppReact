import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationList from './components/LocactionList';
import Header from './components/Header';




const cities = [
  'Amsterdam,netherlands',
  'Monterrey, mx',
  'Madrid,es',
  'Washington, us',
]

class App extends Component {

  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (

        <div className="App">
          <Header></Header>
          <br></br>
          <LocationList cities={cities}
            onSelectedLocation={this.handleSelectionLocation}></LocationList>
        </div>
      

    );
  }

}

export default App;
