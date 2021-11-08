//import { format } from "date-fns";
import { memo } from "react";
import PropTypes from "prop-types";
import { sessionSelector } from "../../../store/session";
import { useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./message.module.css";

export const Message = memo(({ message }) => {
  const { author, value, /*date */} = message;
  const session = useSelector(sessionSelector);

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === session.email,
      })}
    >
       <p>{author}</p>
      <h3>{value}</h3>
      {/* <p>{format(new Date(date), "yyyy-MM-dd")}</p>*/}
    </div>
  );
});

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  test: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};
