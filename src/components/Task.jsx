import React from "react";
import { useDispatch } from "react-redux";
import { ListGroup } from "react-bootstrap";
import {disableTask} from "../store/actions";
import cls from "./Task.module.css";

const Task = ({ task }) => {
    const { id, title, completed } = task;
    const dispatch = useDispatch();
    return (
        <ListGroup.Item className={cls.text}>
            <label className={cls.label}>
                <input onClick={() => dispatch(disableTask(id))} className={cls.label__checkbox} type="checkbox"/>
                <span className={cls.label__text}>
                    <span className={cls.label__check}>
                {completed ? <i className="fa fa-check icon"></i> : <span></span>}
                    </span>
                </span>
            </label>
            {!completed ? <span>{title}</span> : <span className={cls.completed}>{title}</span>}
        </ListGroup.Item>
    )
}

export default Task;