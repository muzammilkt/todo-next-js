import React, { useEffect, useState } from "react";
function Button(props) {
  const { size, variant, disabled, styleClass, type, ...inputProps } = props;
  // const [size] = useState(props.size);
  const [buttonDisabled, setButtonDisabled] = useState(disabled);

  function handleClick() {
    if (props.onClick) props.onClick();
  }

  useEffect(() => {
    setButtonDisabled(props.disabled);
  }, [props.disabled]);

  const buttonClasses = props.className ? props.className : "";
  let variantClass = "bg-primary";

  let heightClass = "";

  switch (variant) {
    case "primary":
      variantClass =
        "py-3 bg-primary text-white border-2 border-primary rounded-full px-8 text-base";
      break;
    case "primary-narrow":
      variantClass =
        "bg-primary px-4 py-2 rounded-xl text-white w-full px-8 text-base";
      break;
    case "primary-narrowrounded":
      variantClass =
        "bg-primary px-4 py-2 rounded-full text-white w-full px-8 text-base";
      break;
    case "secondary":
      variantClass =
        "py-3 bg-secondary-1 text-textcolor-3 border-2 border-secondary-1 rounded-full px-8 text-base";
      break;
    case "secondary-11":
      variantClass =
        "py-3 bg-secondary-11 text-textcolor-3 border-2 border-secondary-11 rounded-full px-8 text-base";
      break;
    case "outline":
      variantClass =
        "py-3 bg-white border-2 border-secondary-3 text-primary rounded-full px-8 text-base";
      break;
    case "tiny-rounded":
      variantClass = "bg-white text-primary text-xs py-1 px-3 rounded-full";
      break;
    case "tiny-rounded-primary":
      variantClass = "bg-primary text-white text-xs py-1 px-3 rounded-full";
      break;

    default:
      variantClass = "bg-primary";
  }

  return (
    <button
      type={type ? type : "button"}
      className={`${variantClass} ${heightClass} ${styleClass} hover:bg-blue-700  focus:outline-none ${buttonClasses}`}
      onClick={handleClick}
      disabled={buttonDisabled}
      {...inputProps}
    >
      {props.children}
    </button>
  );
}
export default Button;
