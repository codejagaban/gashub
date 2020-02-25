import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import MapBox from './components/MapBox';


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
        <Col md="4">
          <div className="description">
          <section className="active" id="intro">
            <h1>First Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>

            This is the First page and an Intro to the gasHub Platform
           <div className="text-center ">
           <a href="#2ndPage"><img src="assets/icons/arrow_down.svg" className="arrow_down" width="150"/></a>

           </div>

          </section>


          <section className="" id="2ndPage">
          <div className="text-center arrow_up">
           <a href="#intro"><img src="assets/icons/arrow_up.svg" width="150"/></a>

           </div>

            <h1>Bunkering Activities In Sapele</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>

            This is the First page and an Intro to the gasHub Platform
        
            <div className="text-center arrow_down">
           <a href="#3rdPage"><img src="assets/icons/arrow_down.svg" width="150"/></a>

           </div>

          </section>

          <section className="" id="3rdPage">
          <div className="text-center arrow_up">
           <a href="#2ndPage"><img src="assets/icons/arrow_up.svg" width="150"/></a>

           </div>


            <h1>Third Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero consequuntur corporis autem enim necessitatibus illum dolor veniam voluptatum id voluptatibus, assumenda tenetur asperiores repudiandae, minima ut. Cumque, minima eum.</p>

            This is the First page and an Intro to the gasHub Platform
            <div className="text-center arrow_down ">
           <a href="#intro"><img src="assets/icons/arrow_down.svg" width="150"/></a>

           </div>


          </section>


          </div>
      
        </Col>
        <Col md="8">
          <MapBox/>
        </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default App;
