import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';

// * 주로, 마운트 시에 하는 작업들은 다음과 같은 사항들이 있습니다.
// props 로 받은 값을 컴포넌트의 로컬 상태로 설정
// 외부 API 요청 (REST API 등)
// 라이브러리 사용 (D3, Video.js 등...)
// setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

// * 언마운트 시에 하는 작업들은 다음과 같은 사항이 있습니다.
// setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
// 라이브러리 인스턴스 제거

function TodoList () {
    const todoData = [
        { id: 1, text: "산책하기", isDone: true },
        { id: 2, text: "독서하기", isDone: false },
        { id: 3, text: "프로그래밍 연습", isDone: true }
    ]
    const [listItems, setListItems] = useState(todoData);
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
            // cleanup 함수
            console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);

    const onAddItem = (item) => {
        item.id = listItems && listItems.length + 1;
        setListItems([...listItems, item]);
    }

    const onCompleteItem = (id) => {
        setListItems(
            // * 일부 value 갱신 시는 map 반복문 사용
            listItems.map(
                el => el.id === id ? { ...el, isDone: !el.isDone } : el
            )
        )
    }

    const onRemoveItem = (id) => {
        // filter는 조건에 부합하는 요소만 남김
        setListItems(listItems.filter(el => el.id !== id));
    }

    return (
        <div>
            {
                listItems.map((el) => 
                    <TodoItem itemData={el} onCompleteItem={onCompleteItem}
                    onRemoveItem={onRemoveItem} />
                )
            }
            <AddItem onAddItem={onAddItem} />
        </div>
    )
}

export default TodoList;