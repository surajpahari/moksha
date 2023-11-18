
export const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex w-full shadow-md">
        <div className="m-2 ml-6">
          <div className="font-[560] text-lg">
            Mokhsa
          </div>
        </div>
        <div className="flex grow items-center justify-center gap-10">
          <div>
            Services
          </div>
          <div>
            Protfolio
          </div>
          <div>
            Events and Media
          </div>
          <div>
            Company
          </div>
        </div>
        <div>
          <div>
            <div className="rounded m-2 mr-0 bg-red-400">
              <div className="text-white p-1  pr-10">
                Let's talk
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
