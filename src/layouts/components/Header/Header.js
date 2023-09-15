import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Images from "~/components/Image";
import { useEffect, useState } from "react";
import Popper from "~/layouts/Popper";
import AccountItem from "~/components/AccountItem";
import Menu, { MenuItem } from "~/components/Nav";
import { config } from "~/config";
import ListCategory, { Category } from "~/components/Categories";

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const [placeholder, setPlaceholder] = useState("100% Hàng tuyển chọn");
  useEffect(() => {
    // setTimeout(() => setSearchResult([1, 2, 3]), 0);
    const TimeChangePlacehoder = setInterval(() => {
      if (placeholder === "100% Hàng tuyển chọn") {
        setPlaceholder("Giao hàng nhanh 2H & đúng khung giờ");
      } else {
        setPlaceholder("100% Hàng tuyển chọn");
      }
    }, 10000);
    return () => clearInterval(TimeChangePlacehoder);
  }, [placeholder]);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("inner")}>
          <div className={cx("logo")}>
            <a href="#" className={cx("logo-tiki")}>
              <img src={Images.logo} alt="Tiki" />
            </a>
          </div>
          <div className={cx("action")}>
            <div className={cx("top-action")}>
              <div className={cx("search")}>
                <div className={cx("arousal-search")}>
                  <Tippy
                    interactive
                    // visible
                    offset={[0, -1]}
                    render={(attrs) => (
                      <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                      >
                        <Popper>
                          <AccountItem />
                          <AccountItem />
                          <AccountItem />
                        </Popper>
                      </div>
                    )}
                  >
                    <div className={cx("form-search")}>
                      <img
                        src={Images.searchIcon}
                        alt=""
                        className={cx("icon-search")}
                      />
                      <input
                        type="text"
                        placeholder={placeholder}
                        className={cx("input-search")}
                      />
                      <button className={cx("btn-search")}>Tìm kiếm</button>
                    </div>
                  </Tippy>
                </div>
              </div>

              <Menu className={cx("user-shortcut")}>
                <MenuItem
                  titleAction
                  iconImage
                  to={config.routes.home}
                  title="Trang chủ"
                  icon={Images.HomeIcon}
                  activeIcon={Images.HomeIconActive}
                />
                <MenuItem
                  titleAction
                  iconImage
                  to={config.routes.astra}
                  title="Astra"
                  icon={Images.AstraIcon}
                  activeIcon={Images.AstraIconActive}
                />
                <MenuItem
                  titleAction
                  iconImage
                  to={config.routes.account}
                  title="Tài Khoản"
                  icon={Images.AccountIcon}
                  activeIcon={Images.AccountIcon}
                />
                <MenuItem
                  titleAction
                  iconImage
                  to={config.routes.order}
                  numberOrder
                  activeIconOrder
                  icon={Images.OrderIcon}
                  activeIcon={Images.OrderIcon}
                />
              </Menu>
            </div>

            <div className={cx("bottom-action")}>
              <ListCategory>
                <Category itemCategory>khỏe đẹp</Category>
                <Category itemCategory>nhà cửa</Category>
                <Category itemCategory>sách</Category>
                <Category itemCategory>bách hóa</Category>
                <Category itemCategory>bách hóa</Category>
                <Category itemCategory>bách hóa</Category>
                <Category itemCategory>bách hóa</Category>
                <Category itemCategory>bách hóa</Category>
                <Category itemCategory>bách hóa</Category>
                <Category itemCategory>bách hóa</Category>
              </ListCategory>
              <div className={cx("location")}>
                <div className={cx("delivery")}>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"
                    alt="header-icon-location"
                  />
                  <h4 className={cx("title")}>Giao đến:</h4>
                  <div className={cx("address")}>
                    Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
