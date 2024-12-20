import { ReactElement } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type FormRowProps = {
  label: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  children: ReactElement;
};

function FormRow({ label, error, children }: FormRowProps) {
  return (
    <div className="form__row">
      {label && (
        <label className="form__label" htmlFor={children?.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="form__error">{error}</span>}
    </div>
  );
}

export default FormRow;
