import React from 'react'
import styles from './MealItemForm.module.css'
import Input from '../ui/Input'

const MealItemForm = () => {
  return (
    <form className={styles.form}>
        <Input id='addToCart' label='Quantity' type='number' />
        <button type='submit'>Add to cart</button>
    </form>
  )
}

export default MealItemForm