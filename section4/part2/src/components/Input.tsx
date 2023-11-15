import { forwardRef, type ComponentPropsWithRef } from "react";

// type InputProps = {
//   label: string;
//   id: string;
// } & ComponentPropsWithoutRef<"input">;

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }: InputProps, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type="text" {...props} ref={ref} />
      </p>
    );
  }
);

export default Input;
