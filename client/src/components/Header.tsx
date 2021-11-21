import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes['header-welcome']}>
            <h1>Sentence creator.</h1>
        </header>
    )
}

export default Header;