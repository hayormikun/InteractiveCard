import React, { useContext } from 'react'
import { CardContext } from './Context'

export const SidePreview = () => {
  const { cardHolder, cardNumber, month, year, cvc } = useContext(CardContext)

  return (
    <div className="w-full h-full bg-purpleImg">
      <div className="absolute m-front left-36 top-32 scale-75 lg:scale-100 z-20">
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
            {`${cardNumber.substr(0, 4)} ${cardNumber.substr(
              4,
              4,
            )} ${cardNumber.substr(8, 4)} ${cardNumber.substr(12, 4)}`}
          </div>

          <div className="absolute bottom-5 left-7 right-5 text-whiteColor w-auto text-md font-normal flex justify-between items-center">
            <p>{cardHolder}</p>
            <p>{`${month} / ${year}`}</p>
          </div>
          <img src="/img/bg-card-front.png" alt="card details front" />
        </div>
      </div>

      <div className="absolute m-back left-56 bottom-32 lg:scale-100 z-10">
        <div className="relative">
          <p
            className="absolute text-white top-[5.3rem] lg:top-[6.7rem] right-12 lg:right-14"
            id="cvc"
          >
            {cvc}
          </p>
          <img src="/img/bg-card-back.png" alt="card details back" />
        </div>
      </div>
    </div>
  )
}
