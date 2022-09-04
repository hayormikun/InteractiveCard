import React from 'react'

export const SidePreview = () => {
  return (
    <div className='w-full h-full bg-purpleImg'>
        <div className="absolute left-20 top-32 z-20">
            <div className="relative">
              <div className="absolute top-5 left-7 flex items-center">
                <svg
                  width="84"
                  height="47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="23.478"
                    cy="23.5"
                    rx="23.478"
                    ry="23.5"
                    fill="#fff"
                  />
                  <path
                    d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
                    stroke="#fff"
                  />
                </svg>
              </div>
              <div className="absolute bottom-16 left-7 text-whiteColor text-3xl">
                0000 0000 0000 0000
              </div>

              <div className="absolute bottom-5 left-7 right-5 text-whiteColor w-auto text-sm font-normal flex justify-between items-center">
                <p>JANE APPLESEED</p>
                <p>00/00</p>
              </div>
              <img src="/img/bg-card-front.png" alt="card details front" />
            </div>
          </div>

          <div className="absolute left-44 bottom-36 z-20">
            <div className="relative">
              <p className="absolute text-white top-[6.7rem] right-14">000</p>
              <img src="/img/bg-card-back.png" alt="card details back" />
            </div>
          </div>

    </div>
  )
}
