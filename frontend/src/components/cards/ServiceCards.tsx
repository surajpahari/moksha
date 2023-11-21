import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloud } from "@fortawesome/free-solid-svg-icons"
export const ServiceCards = () => {
  return (
    <div className='bg-moksha-dark-blue max-w-fit p-4 pt-10 cursor-pointer transition-colors'>
      <div className="flex-col">
        <div>
          <FontAwesomeIcon icon={faCloud} className="h-16 w-16" color="gray" />
        </div>
      </div>
      <div className="w-full">
        <div className="text-moksha-blue  text-xl font-semibold leading-6  m-4 mb-9">
          Web development
        </div>
        <div className="text-white text-sm">
          <div className="pl-4">
            Lorem ipsum dolor sit amet, qui minim <br />minim sint cillum sint consectetur cupidatat.
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div>
            <img src="./src/assets/arrow-down-right.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}
