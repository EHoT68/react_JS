import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./message.module.css";

export const Message = memo(({ message }) => {
  const { author, value } = message;

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === "User",
      })}
    >
      <h3>{value}</h3>
      <p>{author}</p>
      <p>12.03</p>
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
