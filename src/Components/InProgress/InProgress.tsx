import React, {useState} from 'react';
import OpenModalBtn from '../OpenModalBtn';
import Modal from '../Modal';
import { Todo } from '../../Globals/types';

const InProgress = () => {
    const [openModal, setOpenModal] = useState(false);
    const [addTask, setAddTask] = useState<Array<Todo>>([]);


    const handleClickSave = (title: string, description: string) => {
        setAddTask([
          ...addTask,
          { title,
            description,
        }])
      }
    
    return (
        <div>
            <h3>In progress</h3>
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
}

export default InProgress;