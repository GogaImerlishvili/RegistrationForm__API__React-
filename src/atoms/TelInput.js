import React, { useState, useEffect } from "react";
import { AiOutlineCheck, AiOutlineMinusSquare } from "react-icons/ai";

const TelInput = ({ name, val }) => {
  const [value, setValue] = useState(val);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (value && value.length < 12) {
      setHasError(true);
    } else if (value && value.length > 12) {
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
        type="tel"
        placeholder="+995 5__ __ __ __"
        name={name}
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

export default TelInput;
