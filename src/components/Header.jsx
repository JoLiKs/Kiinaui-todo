import cls from './Header.module.css';

function Header() {
    return (
        <header className={cls.header}>
            <h2>Дневной список дел</h2>
        </header>
    );
}
export default Header;