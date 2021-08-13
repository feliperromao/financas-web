import { InputHTMLAttributes } from "react"

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>

type InputProps = {
  invalid: boolean;
 } & Omit<DefaultInputProps, 'size'>;

export function Input(props: InputProps) {
  let styles = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  if (props.invalid) {
    styles = styles + " border-red-500"
  }
  return (
    <input
      className={styles}
      {...props}
    />
  )
}