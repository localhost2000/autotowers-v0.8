import { services } from '../data'
import Service from './Service'

export default function Services() {
  return (
    <div className='section'>
      <h1 className='heading'>Услуги</h1>
      <div className='min-tablet:grid-cols-2 max-desktop:gap-4 grid gap-10'>
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </div>
  )
}
