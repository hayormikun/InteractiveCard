

export const Form = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
        <form>
            <div className="block">
                <label htmlFor="cardHolder" className="text-teal-500" > CARDHOLDER NAME </label>
                <input type="text" placeholder="Jane Appleseed" />
            </div>
            <div className="field">
                <label htmlFor="cardHolder">CARDHOLDER NAME</label>
                <input type="text" placeholder="Jane Appleseed" />
            </div>
            <div className="field">
                <label htmlFor="cardHolder">CARDHOLDER NAME</label>
                <input type="text" placeholder="Jane Appleseed" />
            </div>
            <div className="field">
               <button>Confirm</button>
            </div>
        </form>
    </div>
  )
}
