interface TextAreaProps {
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export default function TextArea({
  name,
  placeholder,
  ...rest
}: TextAreaProps) {
  return (
    <div className='mt-2'>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={3}
        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
        {...rest}
      />
    </div>
  );
}
