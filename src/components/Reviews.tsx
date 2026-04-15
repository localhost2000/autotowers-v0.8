import { reviews } from '../data'
import PersonIcon from '/public/person-icon.svg'

export default function Reviews() {
  return (
    <div className='section'>
      <h1 className='my-20 text-5xl font-bold'>Отзывы</h1>
      <div className='grid grid-cols-2 gap-10'>
        {reviews.map(({ author, text }) => (
          <div className='flex items-center gap-6'>
            <div className='flex aspect-square size-20 items-center justify-center rounded-2xl bg-gray-500/20'>
              <img src={PersonIcon} alt='Person' className='size-[60%]' />
            </div>
            <div className='flex flex-col gap-0.5'>
              <span className='font-bold'>{author}</span>
              <span className=''>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
