import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Button from '~/Components/Button';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        width="160"
                        height="60"
                        src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png"
                        class="header_logo header-logo lazyloaded"
                        alt="SOICT"
                        data-ll-status="loaded"
                    />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Tìm kiếm lớp..." spellCheck={false} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>
                    <div>
                        <Button text>Đăng ký</Button>
                    </div>
                    <div>
                        <Button text>Đăng nhập</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
