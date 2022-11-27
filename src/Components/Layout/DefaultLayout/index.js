import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';
import Header from './Header';
import Body from './Body';
const cx = classNames.bind(styles)
function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Body />
        </div>
    );
}

export default DefaultLayout;
