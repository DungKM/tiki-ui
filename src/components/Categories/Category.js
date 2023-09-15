import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Categories.module.scss'
const cx = classNames.bind(styles)
function Category({ to, children, className,itemCategory }) {
  const classes = cx({
    itemCategory
  })
  return <Link to={to} className={classes}>{children}</Link>;
}

export default Category;
