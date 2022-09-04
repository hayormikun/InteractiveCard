import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { createContext, useState } from 'react'

const schema = yup.object().shape({
  cardHolder: yup.string().required('Card holder name is required'),
  cardNumber: yup
    .number()
    .positive('')
    .integer('')
    .max(9999999999999999, 'Invalid card number')
    .required('card number is required'),
  month: yup.number().max(12, 'Invalid format').required("Can't be blank"),
  year: yup.number().max(99, 'Invalid format').required(`Can't be blank`),
  cvc: yup.number().max(999, 'Invalid format').required("Can't be blank"),
})

type FormValues = {
  cardHolder: string
  cardNumber: number
  month: number
  year: number
  cvc: number
}

type FormInputs = yup.InferType<typeof schema>

export const Form = () => {
  const [isCompleted, setIsCompleted] = useState(false)
  // const [cardHolder, setCardHolder] = useState('')
  // const [cardNumber, setCardNumber] = useState('')
  // const [month, setMonth] = useState('')
  // const [year, setYear] = useState('')
  // const [cvc, setCvc] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    // shouldUseNativeValidation: true,
  })

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const { cardHolder, cardNumber, month, year, cvc } = data

    // setCardHolder(cardHolder)
    // setCardNumber(cardNumber.toString())
    // setMonth(month.toString())
    // setYear(year.toString())
    // setCvc(cvc.toString())

    setIsCompleted(true)
  }

  return (
    <div className="md:flex md:mt-64 h-full w-full md:w-6/12 mx-auto">
      {!isCompleted ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-8/12 mx-auto"
        >
          <div className="flex flex-col">
            <label
              htmlFor="holder"
              className="text-darkViolet text-[12px] mb-1"
            >
              {' '}
              CARDHOLDER NAME{' '}
            </label>
            <span className="h-fit">
              <input
                className={
                  errors.cardHolder
                    ? 'm-[1px] p-2 w-[99.5%] rounded-md border border-redError'
                    : 'm-[1px] p-2 w-[99.5%] rounded-md border border-darkGrayViolet'
                }
                type="text"
                {...register('cardHolder')}
                placeholder="e.g. Jane Appleseed"
              />
            </span>
            {errors.cardHolder && (
              <span className="text-redError">{errors.cardHolder.message}</span>
            )}
          </div>
          <div className="flex flex-col mt-5">
            <label
              htmlFor="number"
              className="text-darkViolet text-[12px] mb-1"
            >
              {' '}
              CARD NUMBER{' '}
            </label>
            <span className="h-fit">
              <input
                className={
                  errors.cardNumber
                    ? 'm-[1px] p-2 w-[99.5%] rounded-md border border-redError'
                    : 'm-[1px] p-2 w-[99.5%] rounded-md border border-darkGrayViolet'
                }
                type="number"
                {...register('cardNumber')}
                placeholder="e.g. 1234 5678 9123 0000"
              />
            </span>
            {errors.cardNumber && (
              <span className="text-redError">{errors.cardNumber.message}</span>
            )}
          </div>
          <div className="flex md:grid md:grid-cols-2 gap-5 mt-5">
            <div className="md:col-span-1 flex flex-col">
              <label
                htmlFor="holder"
                className="text-[12px] mb-1 text-darkViolet"
              >
                {' '}
                EXP. DATE (MM/YY){' '}
              </label>
              <div className="flex gap-2">
                <span className="h-fit">
                  <input
                    className={
                      errors.month
                        ? 'm-[1px] p-2 pl-3 w-[97%] font-normal rounded-md border border-redError'
                        : 'm-[1px] p-2 pl-3 w-[97%] font-normal rounded-md border border-darkGrayViolet'
                    }
                    {...register('month')}
                    type={'number'}
                    placeholder="MM"
                  />
                </span>

                <span className="h-fit">
                  <input
                    className={
                      errors.year
                        ? 'm-[1px] p-2 pl-3 w-[97%] font-normal rounded-md  border border-redError'
                        : 'm-[1px] p-2 pl-3 w-[97%] font-normal rounded-md border border-darkGrayViolet'
                    }
                    {...register('year')}
                    type={'number'}
                    placeholder="YY"
                  />
                </span>
              </div>
              <div className="text-redError">
                {errors.month?.message ||
                  (errors.year?.message && (
                    <span className="text-redError">
                      {errors.month?.message || errors.year?.message}
                    </span>
                  ))}
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col">
              <label
                htmlFor="holder"
                className="text-darkViolet mb-1 text-[12px]"
              >
                {' '}
                CVC
              </label>
              <span className="h-fit">
                <input
                  className={
                    errors.cvc
                      ? 'm-[1px] p-2 w-[98.5%] rounded-md  border border-redError'
                      : 'm-[1px] p-2 w-[98.5%] rounded-md border border-darkGrayViolet'
                  }
                  {...register('cvc')}
                  type={'number'}
                  placeholder="e.g.
                123"
                />
              </span>
              {errors.cvc && (
                <span className="text-redError">{errors.cvc.message}</span>
              )}
            </div>
          </div>

          <button className="my-5 py-3 px-5 font-medium rounded-md text-lg bg-darkViolet text-white tracking-wider w-full">
            Confirm
          </button>
        </form>
      ) : (
        <div className="flex flex-col text-center w-8/12 mx-auto">
          <div className="mx-auto">
            <svg
              width="80"
              height="80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="url(#a)" />
              <path
                d="M28 39.92 36.08 48l16-16"
                stroke="#fff"
                stroke-width="3"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="-23.014"
                  y1="11.507"
                  x2="0"
                  y2="91.507"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6348FE" />
                  <stop offset="1" stop-color="#610595" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="mt-10 text-2xl text-darkViolet">THANK YOU!</p>
          <span className="mt-4 text-lg text-lightGrayishViolet">
            We've added your card details
          </span>
          <button
            onClick={() => {
              setIsCompleted(!isCompleted)
            }}
            className="mt-10 py-3 px-5 font-medium rounded-md bg-darkViolet text-white tracking-wider w-full"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  )
}
