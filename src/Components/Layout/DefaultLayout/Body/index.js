import styles from './Body.module.scss'
import classNames from 'classnames/bind';
import Content from "./Content";
import Sidebar from "./Sidebar";
const cx = classNames.bind(styles)
function Body() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Sidebar className={cx('sidebar')}/>
                <Content className={cx('content')}/>
            </div>
        </div>
        
     );
}

export default Body;