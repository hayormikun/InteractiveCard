import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react'
import { CardContext } from './Context'

const schema = yup.object().shape({
  cardHolder: yup.string().required("Can't be blank"),
  cardNumber: yup
    .number()
    .typeError('Wrong format, numbers only')
    .min(1000000000000000, 'Minimum of 16 digits')
    .max(9999999999999999, 'Maximum of 16 digits')
    .required("Can't be blank"),
  month: yup
    .number()
    .typeError('Wrong format')
    .min(1, 'Wrong format')
    .max(12, 'Wrong format')
    .required("Can't be blank"),
  year: yup
    .number()
    .typeError('Wrong format')
    .min(1, 'Wrong format')
    .max(99, 'Wrong format')
    .required(`Can't be blank`),
  cvc: yup
    .number()
    .typeError('Wrong format')
    .min(100, 'Wrong format')
    .max(999, 'Wrong format')
    .required("Can't be blank"),
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
  const {
    setCardHolder,
    setCardNumber,
    setMonth,
    setYear,
    setCvc,
  } = useContext(CardContext)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const { cardHolder, cardNumber, month, year, cvc } = data
    if (month < 10) {
      let mont = month.toString()
      let mm = `0${mont}`
      setMonth(mm)
    } else {
      setMonth(month.toString())
    }

    if (year < 10) {
      let yea = year.toString()
      let yy = `0${yea}`
      setYear(yy)
    } else {
      setYear(year.toString())
    }

    setCardHolder(cardHolder.toUpperCase())
    setCardNumber(cardNumber.toString())

    setCvc(cvc.toString())

    setIsCompleted(true)
  }

  return (
    <div className="lg:flex lg:mt-64 h-full w-full lg:w-6/12 mx-auto">
      {!isCompleted ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-8/12 mx-auto"
        >
          <div className="flex flex-col">
            <label
              htmlFor="holder"
              className="text-darkViolet text-[14px] mb-1"
            >
              {' '}
              CARDHOLDER NAME{' '}
            </label>
            <span
              className={
                errors.cardHolder
                  ? ''
                  : 'grad h-fit active:outline-none focus:outline-none rounded-md w-[99.6%] p-0 m-0'
              }
            >
              <input
                className={
                  errors.cardHolder
                    ? 'm-[1px] p-2 w-[99.5%] rounded-md border border-redError active:border-redError focus:border-redError active:outline-none focus:outline-none'
                    : 'm-[1px] p-2 w-[99.5%] rounded-md border border-darkGrayViolet active:border-none focus:border-none active:outline-none focus:outline-none'
                }
                type="text"
                {...register('cardHolder')}
                placeholder="e.g. Jane Appleseed"
              />
            </span>
            {errors.cardHolder && (
              <span className="text-redError mt-2">
                {errors.cardHolder.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mt-5">
            <label
              htmlFor="number"
              className="text-darkViolet text-[14px] mb-1"
            >
              {' '}
              CARD NUMBER{' '}
            </label>
            <span
              className={
                errors.cardNumber
                  ? ''
                  : 'grad h-fit active:outline-none focus:outline-none rounded-md w-[99.6%] p-0 m-0'
              }
            >
              <input
                className={
                  errors.cardNumber
                    ? 'm-[1px] p-2 w-[99.5%] rounded-md border border-redError active:border-redError focus:border-redError active:outline-none focus:outline-none'
                    : 'm-[1px] p-2 w-[99.5%] rounded-md border border-darkGrayViolet active:border-none focus:border-none active:outline-none focus:outline-none'
                }
                type="number"
                {...register('cardNumber')}
                placeholder="e.g. 1234 5678 9123 0000"
              />
            </span>
            {errors.cardNumber && (
              <span className="text-redError mt-2">
                {errors.cardNumber.message}
              </span>
            )}
          </div>
          <div className="flex md:grid md:grid-cols-2 gap-5 mt-5">
            <div className="md:col-span-1 flex flex-col">
              <label
                htmlFor="holder"
                className="text-[14px] mb-1 text-darkViolet"
              >
                {' '}
                EXP. DATE (MM/YY){' '}
              </label>
              <div className="flex gap-2">
                <span
                  className={
                    errors.month
                      ? ''
                      : 'grad h-fit active:outline-none focus:outline-none rounded-md w-[97%] p-0 m-0'
                  }
                >
                  <input
                    className={
                      errors.month
                        ? 'm-[1px] p-2 pl-3 w-[97%] font-normal rounded-md border border-redError active:border-redError focus:border-redError active:outline-none focus:outline-none'
                        : 'm-[1px] p-2 pl-3 w-[97%] font-normal rounded-md border border-darkGrayViolet active:border-none focus:border-none active:outline-none focus:outline-none'
                    }
                    {...register('month')}
                    type={'number'}
                    placeholder="MM"
                  />
                </span>

                <span
                  className={
                    errors.year
                      ? ''
                      : 'grad h-fit active:outline-none focus:outline-none rounded-md w-[97%] p-0 m-0'
                  }
                >
                  <input
                    className={
                      errors.year
                        ? 'm-[1px] p-2 pl-3 w-[97%] font-normal rounded-md border border-redError active:border-redError focus:border-redError active:outline-none focus:outline-none'
                        : 'm-[1px] p-2 pl-3 w-[97%] font-normal rounded-md border border-darkGrayViolet active:border-none focus:border-none active:outline-none focus:outline-none'
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
                    <span className="text-redError mt-2">
                      {errors.month?.message || errors.year?.message}
                    </span>
                  ))}
              </div>
            </div>

            <div className="md:col-span-1 flex flex-col">
              <label
                htmlFor="holder"
                className="text-darkViolet mb-1 text-[14px]"
              >
                {' '}
                CVC
              </label>
              <span
                className={
                  errors.cvc
                    ? ''
                    : 'grad h-fit active:outline-none focus:outline-none rounded-md w-[98.5%] p-0 m-0'
                }
              >
                <input
                  className={
                    errors.cvc
                      ? 'm-[1px] p-2 w-[98.5%] font-normal rounded-md border border-redError active:border-redError focus:border-redError active:outline-none focus:outline-none'
                      : 'm-[1px] p-2 w-[98.5%] font-normal rounded-md border border-darkGrayViolet active:border-none focus:border-none active:outline-none focus:outline-none'
                  }
                  {...register('cvc')}
                  type={'number'}
                  placeholder="e.g.
                  123"
                />
              </span>
              {errors.cvc && (
                <span className="text-redError mt-2">{errors.cvc.message}</span>
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
              reset()
              setCardHolder('JANE APPLESEED'),
                setCardNumber('0000000000000000'),
                setMonth('00'),
                setYear('00'),
                setCvc('000'),
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
