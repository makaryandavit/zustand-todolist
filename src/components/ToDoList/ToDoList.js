import React, { useState } from 'react'
import styles from "../../global.module.css";
import { useStore } from '../../store';
import { Item } from '../Item';

const ToDoList = () => {

  const { users, addItem, deleteItem} = useStore()
  const [text, setText] = useState("");



  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <input type="text" className={styles.inp} value={text}  placeholder='Write Your Item' onChange={(event) => {
            setText(event.target.value)
        }}/>
        <button className={styles.btn} onClick={() => {
          if(text.length > 1){
            addItem(text)
            setText("")
          }
        }}>Add Item</button>
      </div>
      <div className={styles.container}>
        <ul>
          {
            users.map((item,index) => (
              <Item key={item.id} value={item.label} deleteItem={() => {
                deleteItem(index)
              }} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export  {ToDoList}
