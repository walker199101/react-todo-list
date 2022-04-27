import React, { useState, useRef } from 'react';
import './TodoItem.scss';
import './AddItem.scss';

function AddItem (props) {
    const [text, setText] = useState('');
    const { onAddItem } = props;
    const onChange = (e) => {
        setText(e.target.value);
    }

    const nameInput = useRef();
    
    const onReset = () => {
        setText('');
        nameInput.current.focus();
    }

    const onClickAddBtn = () => {
        // TODO: key값도 추가하기
        if (text !== '') {
            onAddItem({ text: text, isDone: false });
            onReset();
        }
    }

    return (
        <div className="add-form">
            <input type="text" onChange={onChange} 
            value={text} placeholder="입력해 주세요" ref={nameInput} />
            <button onClick={onClickAddBtn} class="add-btn">+</button>
        </div>
    )
}

export default AddItem;