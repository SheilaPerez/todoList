import React from 'react';
interface ModalBtnProps {
    onClickNewTask: () => void;
}

const OpenModalBtn: any = ({ onClickNewTask }: ModalBtnProps) => {

    const handleClickOpenModal = () => {
        onClickNewTask();
    }
    return (
        <button onClick={handleClickOpenModal}>+ Add new task</button>    
    )
}

export default OpenModalBtn;