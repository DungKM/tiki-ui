import Header from "~/layouts/components/Header";
import styles from "./HeaderOnlyLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function HeaderOnlyLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnlyLayout;
