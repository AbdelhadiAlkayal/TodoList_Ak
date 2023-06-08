import style from "./ErrorModal.module.css";

function ErrorModel(props) {
  return (
    <div>
      <div className={style.backdrop} />
      <div className={`${style.card} ${style.modal}`}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <button className={style.button} onClick={props.onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
export default ErrorModel;
