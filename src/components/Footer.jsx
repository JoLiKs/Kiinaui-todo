import cls from "./Footer.module.css";
import {clearTasks} from "../store/actions";
import React from "react";
import {useDispatch} from "react-redux";
import Task from "./Task";

function Footer(tasks) {
    const dispatch = useDispatch()
    let completed = 0
    let all = 0;
    if (tasks.tasks) {
        tasks.tasks.map(task => {if (task.completed) completed++;})
        all = tasks.tasks.length }
    return(
        <div className={cls.footer}>
            {all > 0 ? <span>{completed}/{all} дело завершено</span> : <span>дело завершено</span>}
            <span className={cls.clear} onClick={() => dispatch(clearTasks())}>Очистить</span>
        </div>
            )}
export default Footer;