import { NavLink } from 'react-router-dom';
import { SentencePaths } from '../routes/config';
import { useTypedSelector } from '../hooks/use-typed-selector';

import classes from './NavigationLinks.module.css';

const NavigationLinks = () => {
    const sentence = useTypedSelector(state => state.sentence);


    return (
            <ul className={classes['navigation-wrapper']}>
                {SentencePaths.map(path => {
                    return (<li key={path}
                                className={`${sentence[path] ? classes.completed : ''}`}
                            >
                            <NavLink 
                                className={(navData => navData.isActive ? classes.active : '')} 
                                to={`/${path}`} >
                                    {path}
                            </NavLink>
                            </li>)
                })}
            </ul>
    )
}

export default NavigationLinks;