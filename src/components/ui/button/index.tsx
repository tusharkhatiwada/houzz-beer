interface ButtonProps {
  label: string;
  buttonType?: "primary" | "secondary" | "link";
  [x: string]: any;
}

export default function Button({
  label,
  buttonType = "primary",
  ...rest
}: ButtonProps) {
  let btnClass;
  switch (buttonType) {
    case "primary":
      btnClass =
        "rounded bg-primary px-2 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
      break;
    case "secondary":
      btnClass =
        "rounded bg-gray-200 px-2 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200";
      break;
    case "link":
      btnClass =
        "text-primary hover:text-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
      break;
    default:
      btnClass =
        "rounded bg-primary px-2 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  }
  return (
    <button type='button' className={btnClass} {...rest}>
      {label}
    </button>
  );
}
