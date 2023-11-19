export const Banner = () => {
  return (
    <div className="z-10 bg-dotted-pattern bg-white">
      <div className="h-[720px] bg-cover text-moksha-black bg-main-banner ">
        <div className="flex w-full h-full items-center">
          <div className="flex-col ml-14 mt-20">
            <div className="p-2">
              <div className="text-3xl font-semibold">
                Moksha
              </div>
            </div>
            <div className="p-2">
              <div className="text-3xl italic font-medium">
                Location Matters !
              </div>
            </div>
            <div className="text-xs text-gray-500 p-4">
              Equiping Humankind with geo-intelligence Solution to make Informed Decisions
            </div>
            <div className="mt-20">
              <div className="flex">
                <div className="bg-red-400 p-2 rounded text-white hover:bg-orange-500 cursor-pointer">
                  Get Started with Moksha
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
