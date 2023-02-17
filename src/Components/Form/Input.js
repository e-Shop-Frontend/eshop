import React from "react";

const Input = ({
  id,
  title,
  input,
  textarea,
  type,
  dropdown,
  data,
  setItem,
  value,
  check,
  setCheck,
  placeholder,
  className,
  required,
  password,
  readOnly,
}) => {
  return (
    <div className={`${check ? "flex gap-2 items-center" : "block"} my-2`}>
      <label className='text-black text-sm block font-medium' htmlFor={id}>
        {title}
      </label>
      {input && (
        <input
          className={`block p-4 rounded-md my-2 w-full text-sm ${className}`}
          id={id}
          type={type}
          value={value}
          onChange={setItem}
          name={id}
          required={required}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      )}
      {textarea && (
        <textarea
          className={`w-full rounded-md block p-4 my-2 text-sm ${className}`}
          name={id}
          id=''
          cols='30'
          rows='4'
          value={value}
          onChange={setItem}
          required
        ></textarea>
      )}
      {dropdown && (
        <select
          className={`w-full rounded-md block p-4 my-2 text-sm ${className}`}
          name={id}
          id=''
          onChange={setItem}
          value={value}
          required
        >
          {data.map((item, id) => {
            return (
              <option key={id} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      )}
      {check && (
        <input
          name={id}
          type='checkbox'
          onChange={setItem}
          onClick={setCheck}
        />
      )}
    </div>
  );
};

export default Input;
