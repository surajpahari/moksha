import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
  return (
    <div className="w-full text-black min-h-full">
      <div className="flex w-full  shadow-md h-14 min-h-max">

        <div className="m-2 ml-6">
          <div className="font-[560] text-lg">
            Mokhsa
          </div>
        </div>

        <div className="flex grow items-center justify-center gap-8">
          <div className="cursor-pointer">
            Services
          </div>
          <div>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="m-1 cursor-pointer">
                Protfolio&nbsp;
                <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1]  text-black menu p-2 shadow bg-white  w-48">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>


          <div>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="m-1">
                Company&nbsp;
                <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1]  text-black menu p-2 shadow bg-white  w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>

          <div >
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="m-1 cursor-pointer">
                Events and Media&nbsp;
                <FontAwesomeIcon icon={faCaretDown} className="text-sm" />
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1]  text-black menu p-2 shadow bg-white w-52">
                <li><a className="hover:text-black">Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>

          <div className="cursor-pointer text-medium">
            Blogs
          </div>


        </div>
        <div>

          <div className="mr-2">
            <div className="rounded m-2 mr-0 bg-moksha-red cursor-pointer hover:bg-moksha-orange">
              <div className="text-white p-1  ">
                Let's talk
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}
