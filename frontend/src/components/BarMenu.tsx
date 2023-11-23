import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
export const BarMenu = (props: {}) => {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <div className="p-2 " onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`${open ? 'fixed' : 'hidden'} w-full   bg-moksha-blue-mutant text-white h-screen scroll-auto z-20`}>
        <div className='flex justify-end text-2xl'>
          <div className='p-2' onClick={() => { setOpen(!open) }}>
            <span className='text-2xl cursor-pointer'>
              <FontAwesomeIcon icon={faClose} />
            </span>
          </div>
        </div>
        <div className='text-2xl'>
          <div>
            Moksha
          </div>
          <div>
            Services
          </div>
          <div>
            Protfolio
          </div>
          <div>
            Company
          </div>
          <div>
            Events and Media
          </div>
          <div>
            Blogs
          </div>
        </div>
      </div>
    </div>
  )
}
