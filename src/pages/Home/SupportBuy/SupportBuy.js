import Button from '~/components/Button/Button';
import styles from './SupportBuy.module.scss'
import classNames from 'classnames/bind';
import Images from '~/components/Image';

const cx = classNames.bind(styles);
function SupportBuy() {

    return  <div className = {cx('wrapper')}>
        <div className = {cx('tag-list')}>
            <Button
            imageIcon={Images.CheckIcon}
            >
            100% hàng chính hãng
            </Button>
            <Button
            imageIcon={Images.UserIcon}
            >
            Trợ lý cá nhân
            </Button>
            <Button
            imageIcon={Images.DeliveryIcon}
            >
            Giao nhanh & đúng hẹn
            </Button>
        </div>
        <div className = {cx('item-next')}></div>
            <Button
            imageIconRight={Images.NextIcon}
            >
            An tâm mua sắm
            </Button>
    </div>;

}

export default SupportBuy;







