import styles from "./Form.module.scss";

function Form(props: { onSubmit: any; register: any }) {
  return (
    <form className={styles.form} id="form" onSubmit={props.onSubmit}>
      <h1>Обратная связь:</h1>
      <input
        className={styles.inputBlock}
        id="fullName"
        type="text"
        placeholder="Имя"
        {...props.register("fullName", { required: true })}
      />
      <input
        className={styles.inputBlock}
        id="email"
        type="email"
        placeholder="Почта"
        {...props.register("email", { required: true })}
      />
      <textarea
        id="text"
        className={`${styles.inputBlock} ${styles.textarea} `}
        placeholder="Текст..."
        {...props.register("text", { required: true })}
      />
      <input className={styles.button} type="submit" value="Отправить" />
    </form>
  );
}

export default Form;
