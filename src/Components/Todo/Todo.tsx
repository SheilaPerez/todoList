import React, { useState } from 'react';
import Modal from '../../Components/Modal';
import { Todo } from '../../Globals/types';
import OpenModalBtn from '../OpenModalBtn';

interface TodoComponentProps {
  className: string;
}

const TodoComponent: React.FC<TodoComponentProps> = () => {
  const [addTask, setAddTask] = useState<Array<Todo>>([]);
    const [openModal, setOpenModal] = useState(false);
    
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
        <OpenModalBtn onClickNewTask={() => setOpenModal(true)}></OpenModalBtn>
        {openModal && <Modal saveBtn={handleClickSave}></Modal>}
    </div>
  )
};

export default TodoComponent;
