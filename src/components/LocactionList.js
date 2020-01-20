import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
//import { Container, Row, Col, Card,Button } from 'react-bootstrap';
//import ForecastExtended from './ForecastExtended';


const LocationList = ({ cities, onSelectedLocation }) => {
   
    const handleWeatherLocactionClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }    

    const strToComponents = cities => (
        cities.map(city => 
            (
                <WeatherLocation 
                    key={city} 
                    city={city} 
                    onWeatherLocactionClick={() => handleWeatherLocactionClick(city)}/>))
    );
    
    return(
    <div>
         {strToComponents(cities)}
    {/* <Container>
        <Row>
            <Col sm>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {strToComponents(cities)}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm>
                <ForecastExtended></ForecastExtended>
            </Col>
        </Row>
    </Container> */}
    </div>);

};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func,
}

export default LocationList;