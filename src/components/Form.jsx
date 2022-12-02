import cls from './Form.module.css';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import * as actions from "../store/actions";

function Form() {
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();

    const handleTaskTitleChange = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleTaskSubmit = () => {
        dispatch(actions.addTask({
            title: taskTitle
        }));
        setTaskTitle('');
    }
    return (
        <form>
            <input placeholder="Добавить новый элемент" onChange={e => handleTaskTitleChange(e)}/>
            <input onClick={handleTaskSubmit} className={cls.addBtn} type="button" value="Добавить"/>
        </form>
    );
}
export default Form;