import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import Form from './components/Form'
import {useDispatch, useSelector} from "react-redux";
import Items from "./components/Items";
import Header from "./components/Header";
import {clearTasks} from "./store/actions";

function App() {
    const dispatch = useDispatch();
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
                    <span onClick={() => dispatch(clearTasks()) }>Очистить</span>
                </Col>
            </Row>
        </Container>
    );
}

export default App;