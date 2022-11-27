import styles from './Content.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">StudentID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Họ</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Quê quán</th>
                        <th scope="col">Học lớp</th>
                        <th scope="col">Điểm GPA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>

                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}

export default Content;
