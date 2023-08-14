export default function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <div className='absolute -top-12 flex-col items-center hidden mb-6 group-hover:flex'>
      <span className='relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg'>
        {children}
      </span>
      <div className='w-3 h-3 -mt-2 rotate-45 bg-black'></div>
    </div>
  );
}
