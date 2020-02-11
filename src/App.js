import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LocationList from "./components/LocactionList";
import Header from "./components/Header";
import ForecastExtended from "./components/ForecastExtended";

import { Container, Row, Col} from "react-bootstrap";

const cities = [
  "Amsterdam,netherlands",
  "Monterrey, mx",
  "Madrid,es",
  "Washington, us"
];

class App extends Component {

  constructor(){
    super();
    this.state = {city: 'Nueva Ciudad'};
  }
  handleSelectionLocation = city => {
    this.setState({ city});
    console.log(`handleSelectionLocation ${city}`);
  };

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <br></br>
        <Container>
          <Row>
            <Col>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectionLocation}
              ></LocationList>
            </Col>
            <Col>
              <ForecastExtended city={ this.state.city }></ForecastExtended>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
