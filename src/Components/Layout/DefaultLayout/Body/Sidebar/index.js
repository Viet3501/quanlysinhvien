import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Navbar from '~/Components/Navbar';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div class="d-flex align-items-start">
                <div
                    class="nav flex-column nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                    style={{ width: '100%', backgroundColor: '#ccc' }}
                >
                    <a
                        href="http://localhost:3000"
                        class="nav-link active"
                        id="v-pills-home-tab"
                        type="button"
                        role="tab"
                    >
                        Trang chủ
                    </a>
                    <a
                        href="/Loggin"
                        class="nav-link"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                    >
                        Quản lý sinh viên
                    </a>
                    <a
                        class="nav-link"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                    >
                        Hỗ trợ
                    </a>
                    <a
                        class="nav-link"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                    >
                        Liên hệ
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
