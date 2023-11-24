import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloud } from "@fortawesome/free-solid-svg-icons"
export const ServiceCard = ({ ServiceCardInfo }: any) => {
  console.log(ServiceCardInfo)
  const info = {
    icon: {
      faCloud
    },
    title: "Web Development",
    description: "Upsela has been featured nationally in 2023 for our marketing strategies"
  }
  return (
    <div className='bg-moksha-dark-blue max-w-fit p-4 pt-10 cursor-pointer transition-colors'>
      <div className="flex-col">
        <div>
          <FontAwesomeIcon icon={faCloud} className="h-16 w-16" color="gray" />
        </div>
      </div>
      <div className="w-full">
        <div className="text-moksha-blue  text-xl font-semibold leading-6  m-4 mb-9">
          {info.title}
        </div>
        <div className="text-white text-sm mb-5">
          <div className="pl-4 max-w-[295px]">
            <span>
              Upsela has been featured nationally in 2023 for our marketing strategies
            </span>
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
