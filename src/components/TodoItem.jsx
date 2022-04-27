import './TodoItem.scss';

function TodoItem (props) {
    
    const { text, isDone } = props;
    return (
        <div className="todo-item">
            { isDone ? 
                <div>{text}</div> : <div className="done">{text}</div>
            }
        </div>
    )
}

export default TodoItem;