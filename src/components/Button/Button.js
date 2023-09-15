import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import Images from "~/components/Image";
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
    <div>
      <Comp className={classes} {...props}>
        <span className={cx("title")}>{children}</span>
      </Comp>
    </div>
  );
}

export default Button;
