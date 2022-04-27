import React, { useState, useEffect } from 'react';
import './TodoItem.scss';
import './AddItem.scss';

function AddItem (props) {
    const [text, setText] = useState('');
    const { onAddItem } = props;
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    const onClickAddBtn = () => {
        // TODO: key값도 추가하기
        onAddItem({ text: text, isDone: false });
    }

    return (
        <div className="add-form">
            <input type="text" onChange={onChange} value={text} placeholder="입력해 주세요" />
            <button onClick={onClickAddBtn} class="add-btn">+</button>
        </div>
    )
}

export default AddItem;