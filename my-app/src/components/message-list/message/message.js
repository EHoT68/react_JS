import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./message.module.css";

export const Message = memo(({ message }) => {
   const { author, value } = message;
   const currDate = new Date().toLocaleTimeString();

   return (
      <div
         className={classNames(styles.message, {
            [styles.currentMessage]: author === "User",
         })}
      >
         <h3>{author}</h3>
         <p>{value}</p>
         <p>{currDate}</p>
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
