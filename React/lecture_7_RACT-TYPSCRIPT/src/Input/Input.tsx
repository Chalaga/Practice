import { InputPropsType } from "../Types/Common";

export const Input = ({
  width,
  height,
  rounded,
  backgroundColor,
  textColor,
  placeholder,
  type,
}: InputPropsType) => {
  return (
    <div>
      <input
        style={{
          width: width,
          height: height,
          borderRadius: rounded,
          backgroundColor: backgroundColor,
          color: textColor,
        }}
        placeholder={placeholder}
        type={type}
      />
      <h1>Eveything I type</h1>
    </div>
  );
};
