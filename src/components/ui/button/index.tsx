interface ButtonProps {
  label: string;
  buttonType?: "primary" | "link";
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
        "rounded bg-primary px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-primary/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
      break;
    case "link":
      btnClass =
        "text-primary hover:text-primary/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
      break;
    default:
      btnClass =
        "rounded bg-primary px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-primary/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  }
  return (
    <button type='button' className={btnClass} {...rest}>
      {label}
    </button>
  );
}
