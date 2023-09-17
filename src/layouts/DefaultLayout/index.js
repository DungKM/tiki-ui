import Header from "~/layouts/components/Header";
import SideBar from "~/layouts/components/SideBar";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className = {cx('style-main')}>
          <SideBar />
          {children}
        </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
