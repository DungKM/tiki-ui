import { Link } from 'react-router-dom';
import styles from './Banner.module.scss'
import classNames from 'classnames/bind';
// import { useEffect, useRef, useState } from 'react';
// import Data from "~/ImageSlider.json";
const cx = classNames.bind(styles)
function Home() {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const intervalRef = useRef(null);
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       (prevIndex + 1) % Data.length
  //     );
  //   }, 20000);

  //   return () => {
  //     clearInterval(intervalRef.current);
  //   };
  // }, []);
    return (
      <div className = {cx('wrapper')}>
      <div className = {cx('inner')}>
        <Link>
          {/* <img src={Data[currentImageIndex].image} alt="Banner" /> */}
          <img src='https://salt.tikicdn.com/cache/w750/ts/tikimsp/64/75/08/bdeabe1d8f2e649547ca1c607f6382d4.png.webp'/>
        </Link>
      </div>
      </div>
    );
  }
  
  export default Home;
  