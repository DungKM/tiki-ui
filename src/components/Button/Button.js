import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  onClick,
  normal,
  HomeIcon,
  info,
  imageIcon,
  imageIconRight,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
  }

  const classes = cx("wrapper", {
    info,
    normal,
  });
  return (
  
      <Comp className={classes} {...props}>
        {imageIcon && <img src={imageIcon} className={cx("icon-img")} />}
        <span className={cx("title", { imageIconRight })}>{children}</span>
        {imageIconRight && (
          <img src={imageIconRight} className={cx("icon-img")} />
        )}
      </Comp>
   
  );
}

export default Button;
