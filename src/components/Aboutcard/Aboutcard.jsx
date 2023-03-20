import React from 'react'
import './aboutcard.css'
const Aboutcard = () => {
  return (
    <>
      <div className="container background">
        <div className="row">
          <div className="col-lg-4 py-5">
              <div className="contents">
                <h5 className='Title'>
                “Jay Ram Karki thinks this versatile experience can help him teach the younger folks more effectively. ”
                </h5>
                <p className="sub pt-3 red">
                  — Online Khabar,Nepal
                </p>
              </div>
            </div>
            <div className="col-lg-4 py-5">
              <div className="contents">
                <h5 className='Title'>
                “Jay Ram, only in his twenties, has perfected his own unique style.”
                </h5>
                <p className="sub pt-3 red">
                — SickDrummer Magaines
                </p>
              </div>
            </div>
            <div className="col-lg-4 py-5">
              <div className="contents">
                <h5 className='Title'>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore asperiores recusandae.”
                </h5>
                <p className="sub pt-3 red">
                —Lorem ipsum.
                </p>
              </div>
            </div>
        
        </div>
      </div>
    </>
  )
}

export default Aboutcard