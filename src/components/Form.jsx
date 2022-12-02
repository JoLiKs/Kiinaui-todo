import cls from "./Form.module.css";

function Form() {
    return (
        <form>
            <input/>
            <input className={cls.addBtn} type="button"/>
        </form>
    );
}
export default Form;