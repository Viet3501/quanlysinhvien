import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Navbar({ to, href, children, onClick, ...passProps }) {
    const Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    return (
        <Component className={cx('navbar')} {...props}>
            {children}
        </Component>
    );
}

export default Navbar;
