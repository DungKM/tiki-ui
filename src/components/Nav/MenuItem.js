import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function MenuItem({
  iconImage = false,
  iconCategory = false,
  titleAction = false,
  titleCategory = false,
  to,
  title,
  icon,
  activeIcon,
  activeIconOrder,
  numberOrder = false,
}) {
  let classesIcon = cx({
    iconImage,
    iconCategory,
  });
  let classesTitle = cx({
    titleAction,
    titleCategory,
  });
  return (
    <NavLink
      to={to}
      className={(nav) =>
        cx("wrapper", { active: nav.isActive, activeIconOrder })
      }
    >
      <span className={cx("icon")}>
        <img src={icon} className={classesIcon} />
        {numberOrder && <span className={cx("number-orders")}>0</span>}
      </span>
      <span className={cx("active-icon")}>
        <img src={activeIcon} className={classesIcon} />
      </span>
      <span className={classesTitle}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
