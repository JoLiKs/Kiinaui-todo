import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import Form from './components/Form'
import { useSelector } from "react-redux";
import Items from "./components/Items";
import Header from "./components/Header";

function App() {

    const tasks = useSelector(state => state);

    return (
        <Container>
           <Header/>
            <Row>
                <Col>
                    <Form/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Items tasks={ tasks } />
                </Col>
            </Row>
        </Container>
    );
}

export default App;