import "./form.css";

const Input = (props) => {
  const element =
    props.element === "input" ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );

  return (
    <div className="input-wrapper">
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
