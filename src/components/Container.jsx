import TodoList from './TodoList';
import './Container.scss';

function Container () {
    // const { text, isDone } = props;
    return (
        <div className="container">
            <div className="contents">
                <div className="app-title">REACT TODO LIST</div>
                <div>
                    <TodoList />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Container;