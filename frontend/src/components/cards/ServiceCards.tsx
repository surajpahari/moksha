import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faCloud } from "@fortawesome/free-solid-svg-icons"
export const ServiceCards = () => {
  return (
    <div className='bg-sky-900 max-w-fit p-4 pt-10'>
      <div className="flex-col">
        <div>
          <FontAwesomeIcon icon={faCloud} className="h-16 w-16" color="gray" />
        </div>
      </div>
      <div>
        <div className="text-sky-300 m-4">
          Web development
        </div>
        <div className="text-white text-xs">
          <div>
            Lorem ipsum dolor sit amet, qui minim <br />minim sint cillum sint consectetur cupidatat.
          </div>
        </div>
        <div className="text-right mt-4">
          <FontAwesomeIcon icon={faArrowDown} className="h-10 w-10" color="gray" />
        </div>
      </div>
    </div>
  )
}
