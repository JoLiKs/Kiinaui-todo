import cls from './Form.module.css';
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import * as actions from "../store/actions";

function Form() {
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();
    let inpRef = React.createRef();

    const handleTaskTitleChange = (e) => {
        setTaskTitle(e.target.value);
    }

    const handleTaskSubmit = () => {
        dispatch(actions.addTask({
            title: taskTitle
        }));
        inpRef.current.value = "";
        setTaskTitle('');
    }
    return (
        <div className={cls.form}>
            <input type="text" ref={inpRef} placeholder="Добавить новый элемент" onChange={e => handleTaskTitleChange(e)}/>
            <input onClick={handleTaskSubmit} className={cls.addBtn} type="button" value="Добавить"/>
        </div>
    );
}
export default Form;