interface InputProps {
  type?: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export default function Input({
  type = "text",
  name,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <div className='mt-2'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
        {...rest}
      />
    </div>
  );
}
