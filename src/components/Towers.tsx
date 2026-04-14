export default function Towers() {
  return (
    <div className='p-8'>
      <div className='flex justify-between gap-4'>
        <button className='animation rounded-2xl bg-[#f36d4f] px-4 font-bold text-white shadow-lg shadow-black/40'>
          L
        </button>

        <div className='grid w-full grid-cols-8 gap-4'>
          {Array.from({ length: 8 }).map((item, index) => (
            <img
              key={index}
              src=''
              alt=''
              className='aspect-square size-full rounded-2xl bg-gray-400 opacity-20'
            />
          ))}
        </div>

        <button className='animation rounded-2xl bg-[#f36d4f] px-4 font-bold text-white shadow-lg shadow-black/40'>
          R
        </button>
      </div>
    </div>
  )
}
