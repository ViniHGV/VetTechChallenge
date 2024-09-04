import { Label } from "@radix-ui/react-label";
import { UseFormRegister, FieldError } from "react-hook-form";
import { Input } from "./ui/input";

export interface FormFieldProps extends React.AllHTMLAttributes<any> {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name: any;
  textLabel: string;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
}

export const FormField = ({
  register,
  name,
  textLabel,
  error,
  type,
  maxLength,
  ...props
}: FormFieldProps) => {
  return (
    <div className="w-full">
      <Label className="font-semibold text-sm">{textLabel}</Label>
      <div className="relative">
        <Input className="text-sm" {...props} type={type} {...register(name)} />
      </div>
      {error && (
        <span className="text-xs text-red-600 font-semibold">
          {error.message}
        </span>
      )}
    </div>
  );
};
