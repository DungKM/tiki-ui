import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function MenuItem({ to, title, icon, activeIcon, activeIconOrder, numberOrder=false }) {
  return (
    <NavLink
      to={to}
      className={(nav) =>
        cx("wrapper", { active: nav.isActive, activeIconOrder })
      }
    >
      <span className={cx("icon")}>
        <img src={icon} className={cx("icon-img")} />
     {numberOrder &&  <span className={cx("number-orders")}>0</span>} 
      </span>
      <span className={cx("active-icon")}>
        <img src={activeIcon} className={cx("icon-img")} />
      </span>
      <span className={cx("title")}>{title}</span>
      
    </NavLink>
  );
}

export default MenuItem;
