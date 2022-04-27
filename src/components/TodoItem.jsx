import './TodoItem.scss';

function TodoItem (props) {
    const { itemData, onCompleteItem, onRemoveItem } = props;
    const { id, text, isDone } = itemData;
    
    return (
        <div className="todo-item">
            <div>
            { isDone ? 
                <span className="done">{text}</span> : <span>{text}</span>
            }
            <button className="complete-btn" onClick={() => onCompleteItem(id)}
            >O</button><button className="delete-btn" onClick={() => onRemoveItem(id)}
            >X</button>
            </div>
        </div>
    )
}

export default TodoItem;