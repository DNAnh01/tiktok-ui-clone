import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1a8e91ef4c661a64127b1b61b551816c~c5_720x720.jpeg?x-expires=1694329200&x-signature=MDTjZIIdTHER0y52ZcFlndg31lk%3D"
                alt="Avatar img"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Do Nguyen Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>donguyenanh</span>
            </div>
        </div>
    );
}

export default AccountItem;
