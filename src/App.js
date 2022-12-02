import React from 'react';
import {Container, Col, Row} from "react-bootstrap";
import Form from './components/Form'
import {useDispatch, useSelector} from "react-redux";
import Items from "./components/Items";
import Header from "./components/Header";
import {clearTasks} from "./store/actions";
import cls from './App.module.css';
import Footer from "./components/Footer";

function App() {
    const tasks = useSelector(state => state);

    return (
        <div className={cls.App}>
           <Header/>
            <Row>
                <Col>
                    <Form/>
                </Col>
            </Row>
            <div className={cls.items} >
            <Row>
                <Col>
                    <Items tasks={ tasks } />
                    </Col>
            </Row>
            </div>
            <Footer  tasks={ tasks } />
        </div>
    );
}

export default App;