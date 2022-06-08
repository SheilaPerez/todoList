import React, {useState, ChangeEvent} from 'react';
interface ModalProps {
    saveBtn: (title: string, description: string) => void
}
const Modal: React.FC<ModalProps> = ({saveBtn}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle((event.target as HTMLInputElement).value);
    }

    const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription((event.target as HTMLInputElement).value)
    }

    return (
        <div>
            <input placeholder="Title" onChange={handleChangeTitle}></input>
            <input placeholder="Description" onChange={handleChangeDescription}></input>
            <button onClick={() => saveBtn(title, description)}>Save</button>
        </div>
    )
}

export default Modal;