import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function SideBar() {
  return <h2 className={cx("sidebar")}>SideBar</h2>;
}

export default SideBar;
