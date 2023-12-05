import React from 'react'
import styles from './MealItemForm.module.css'
import Input from '../ui/Input'
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
  const [isQuantityValid, setIsQuantityValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredQuantity = amountInputRef.current.value
    const enteredQuantityNumber = +enteredQuantity

    if (enteredQuantity.trim().length === 0 || enteredQuantity < 1 || enteredQuantity > 5 ) {
      setIsQuantityValid(false)
      return
    }

    props.addToCart(enteredQuantityNumber)
  }

  

  return (
    <form className={styles.form} onSubmit={submitHandler}>
        <Input label='Quantity' 
        ref={amountInputRef}
        input={{
            id: 'addToCart_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button type='submit'>Add to cart</button>
        {!isQuantityValid && <p>Please submit a valid quantity</p>}
    </form>
  )
}

export default MealItemForm