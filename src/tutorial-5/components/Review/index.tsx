import React from "react";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Review.module.scss";
import { AppContext } from "../../App";

function Review(props: {
  fullName: string;
  createdAt: string;
  text: string;
  id: number;
}) {
  const { deleteComment } = React.useContext(AppContext);

  return (
    <div className={styles.review__wrapper}>
      <div className={styles.reviewAvatar}>
        <AccessibleForwardIcon />
      </div>
      <div className={styles.reviewHead}>
        <div className={styles.top}>
          <h3 className={styles.fullName}>
            {props.fullName}
            <span>{props.createdAt}</span>
          </h3>
          <button onClick={() => deleteComment(props.id)}>
            <CloseIcon />
          </button>
        </div>
        <p className={styles.reviewText}>{props.text}</p>
      </div>
    </div>
  );
}

export default Review;
