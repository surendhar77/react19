import React from 'react'
import { IoCafeSharp } from 'react-icons/io5'
import { MdPlace } from 'react-icons/md'
import { TbMailPlus } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import footerContact from "../../api/footerContact.json"

const Footer = () => {
  const iconMap ={
        MdPlace : <MdPlace />,
    TbMailPlus :<TbMailPlus />, 
    IoCafeSharp:<IoCafeSharp  />
  }
  return (
    <footer className='footer-section'>
      <div className="container">
        <div className="grid grid-three-cols" >
          {
            footerContact.map((curData) => {
              const {icon,title,details} = curData;
              return (
                <>
                  <div className="footer-contact">
                    <div className="icon">
                      {/* <IoCafeSharp /> */}
                      {iconMap[icon]}
                    </div>
                    <div className="footer-contact-text">
                      <p>{title}</p>
                      <p>{details}</p>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>
    </footer>
  )
}

export default Footer