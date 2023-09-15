import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://salt.tikicdn.com/cache/100x100/ts/tka/fd/c8/f2/b15ec4ec270123a399b25de5c207272b.jpg.webp"
        className={cx("avatar")}
        alt="user"
      />
      <div className={cx("content")}>
        <div className={cx("brand-title")}>
          Freeship không giới hạn trong 2h
        </div>
        <div className={cx("brand-subtitle")}>
          <div className={cx("brand-subtitle__ad")}>Tài trợ bởi</div>
          <div className={cx("brand-subtitle__content")}>Magic Korea</div>
          <div className={cx("brand-subtitle__divider")}></div>
          <div className={cx("brand-subtitle__rating")}>5</div>
          <div className={cx("brand-subtitle__rating-star")}>
            <FontAwesomeIcon icon={faStar} className={cx("icon-star")} />
          </div>
        </div>
      </div>
      <span className={cx("icon")}>
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          className={cx("icon-next")}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0B74E5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
          ></path>
        </svg>
      </span>
    </div>
  );
}

export default AccountItem;
