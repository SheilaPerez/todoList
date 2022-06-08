import React from 'react';
import TodoComponent from '../../Components/Todo';
import InProgress from '../../Components/InProgress';
import Done from '../../Components/Done';
import styles from './TodoList.module.css';

const TodoList = () => {

  return (
    <div>
      <TodoComponent className={styles.listContainer}></TodoComponent>
      <InProgress></InProgress>
      <Done></Done>
    </div>
  )
};

export default TodoList;
