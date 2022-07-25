function Input(props) {
  const {
    label,
    type,
    name,
    onValueChange,
    error,
    isValid,
    value,
    placeholder,
    varient,
    styleClass,
    ...inputProps
  } = props;

  let variantClass = "bg-primary";
  switch (varient) {
    case "small":
      variantClass = "h-10 rounded-full";
      break;
    case "squarebox-small":
      variantClass = "h-10 rounded-md";
      break;
    case "squarebox-large":
      variantClass = "h-14 rounded-md";
      break;
    case "large":
      variantClass = "h-14 rounded-full";
      break;
    default:
      variantClass = "";
  }

  let typeClass = "";
  switch (type) {
    case "input":
      typeClass = "w-full";
      break;
    case "checkbox":
      typeClass = "";
      break;
    default:
      typeClass = "w-full";
  }

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        className={`${variantClass} ${styleClass} ${typeClass} px-4 py-1 placeholder-secondary-7 relative bg-white text-sm border-2 border-secondary-4 outline-none focus:ring ring-default ring-primary disabled:bg-secondary-9 disabled:text-textcolor-7 disabled:border-secondary-15`}
        {...inputProps}
        autoComplete="off"

        // value={inputValue}
        // onChange={handleChange}
      />

      {error && <span className="text-primary mx-5">{error.message}</span>}
    </>
  );
}

export default Input;
