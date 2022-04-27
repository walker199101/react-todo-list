import './TodoItem.scss';

function AddItem (props) {
    // const { text, isDone } = props;
    return (
        <div className="add-form">
            <input type="text" />
            <button class="add-btn">+</button>
        </div>
    )
}

export default AddItem;