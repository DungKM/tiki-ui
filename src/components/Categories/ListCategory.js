import classNames from "classnames/bind";
import styles from './Categories.module.scss'
const cx = classNames.bind(styles)
function ListCategory({ children }) {
  return <nav className = {cx('list-category')}>{children}</nav>;
}

export default ListCategory;
