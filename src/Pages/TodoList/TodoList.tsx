import React, { useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import { Todo } from '../../Globals/types';

const TodoList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [addTask, setAddTask] = useState<Array<Todo>>([]);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  }

  const handleClickSave = (title: string, description: string) => {
    setAddTask([
      ...addTask,
      { title,
        description,
    }])
  }

  return (
    <div>
      <h3>To do</h3>
      {addTask.map((task: Todo) => {
        return (
          <div>
            <p>{task.title}</p>
            <p>{task.description}</p>
          </div>
        )
      })}
      <button onClick={handleClickOpenModal}>+ Add new task</button>
      {openModal && <Modal saveBtn={handleClickSave}></Modal>}
    </div>
  )
};

export default TodoList;
