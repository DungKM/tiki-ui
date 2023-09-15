import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import WrapSideBar from "./WrapSideBar/WrapSideBar";
const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div>
      <WrapSideBar title="Danh mục" />
    </div>
  );
}

export default SideBar;
