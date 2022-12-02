import React from "react";
import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import {disableTask} from "../store/actions";

const Task = ({ task }) => {
    const { id, title, completed } = task;
    const dispatch = useDispatch();

    return (
        <ListGroup.Item>
            <input checked={completed} type="checkbox"/>
            <span onClick={() => dispatch(disableTask(id))}>{title}</span>
        </ListGroup.Item>
    )
}

export default Task;