import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import Slider from "./Slider/Slider";
import Banner from "./Banner";
import SupportBuy from "./SupportBuy/SupportBuy";
import { config } from "~/config";
const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("banner-slider")}>
        <Slider />
        <Banner />
      </div>
        <SupportBuy to={config.routes.support} />
        
    </div>

  );
}

export default Home;
