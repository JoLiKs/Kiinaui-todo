import cls from "./Footer.module.css";
import {clearTasks} from "../store/actions";
import React from "react";
import {useDispatch} from "react-redux";

function Footer() {
    const dispatch = useDispatch();

    return(
        <div>
            <span>дело завершено</span>
            <span className={cls.clear} onClick={() => dispatch(clearTasks())}>Очистить</span>
        </div>
            )}
export default Footer;