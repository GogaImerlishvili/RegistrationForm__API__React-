import { useState, useEffect } from "react";
import { AiOutlineCheck, AiOutlineMinusSquare } from "react-icons/ai";

const EmailInput = ({ name, val }) => {
  const [value, setValue] = useState(val);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (value && value.length < 8) {
      setHasError(true);
    } else if (value && value.length > 8) {
      setHasError(false);
    }
  }, [value]);

  const renderClassName = () => {
    let className = "input";
    if (hasError && value) {
      className += "is-danger";
    } else if (!hasError && value) {
      className += "is-success";
    }
    return className;
  };
  return (
    <p className="control">
      <input
        className={renderClassName()}
        type="email"
        placeholder="E Mail"
        name={name}
        autoComplete="email"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        required
      />
      {!hasError && value && (
        <span className="icon">
          <AiOutlineCheck />
        </span>
      )}

      {hasError && value && (
        <span className="icon-minus">
          <AiOutlineMinusSquare />
        </span>
      )}
    </p>
  );
};

export default EmailInput;
