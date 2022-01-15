import styles from "./Reviews.module.scss";
import Review from "../Review";

function Reviews(props: { comments: any }) {
  return (
    <div className={styles.reviews__container}>
      <h2>Отзывы:</h2>
      {props.comments.map((comment: any, index: number) => {
        return (
          <Review
            key={index}
            id={index}
            fullName={comment.fullName}
            createdAt={comment.createdAt}
            text={comment.text}
          />
        );
      })}
    </div>
  );
}

export default Reviews;
