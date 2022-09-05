import { createContext, useState } from 'react'

export const CardContext = createContext<any>(null)

export const CardContextProvider = ({ children }: any) => {
  const [cardHolder, setCardHolder] = useState('JANE APPLESEED')
  const [cardNumber, setCardNumber] = useState('0000000000000000')
  const [month, setMonth] = useState('00')
  const [year, setYear] = useState('00')
  const [cvc, setCvc] = useState('000')

  return (
    <CardContext.Provider
      value={{
        cardHolder,
        setCardHolder,
        cardNumber,
        setCardNumber,
        month,
        setMonth,
        year,
        setYear,
        cvc,
        setCvc,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
