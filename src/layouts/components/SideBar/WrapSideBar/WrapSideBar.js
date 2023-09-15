import { MenuItem } from "~/components/Nav";
import styles from "./WrapSideBar.module.scss";
import classNames from "classnames/bind";
import Images from "~/components/Image";
import { config } from "~/config";
const cx = classNames.bind(styles);
function WrapSideBar({ title }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("list-item")}>
        <div className={cx("title")}>{title}</div>
        <MenuItem
          iconCategory
          titleCategory
          to={config.routes.itemcategory}
          title="Đồ chơi - Mẹ & Bé"
          icon={Images.CategoryIcon}
        />
        <MenuItem
          iconCategory
          titleCategory
          to={config.routes.itemcategory}
          title="Đồ chơi - Mẹ & Bé"
          icon={Images.CategoryIcon}
        />
        <MenuItem
          iconCategory
          titleCategory
          to={config.routes.itemcategory}
          title="Đồ chơi - Mẹ & Bé"
          icon={Images.CategoryIcon}
        />
      </div>
    </div>
  );
}

export default WrapSideBar;
