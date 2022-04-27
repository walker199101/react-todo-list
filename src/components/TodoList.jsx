import TodoItem from './TodoItem';
import AddItem from './AddItem';
import React, { useState, useEffect } from 'react';

// * 주로, 마운트 시에 하는 작업들은 다음과 같은 사항들이 있습니다.
// props 로 받은 값을 컴포넌트의 로컬 상태로 설정
// 외부 API 요청 (REST API 등)
// 라이브러리 사용 (D3, Video.js 등...)
// setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

// * 언마운트 시에 하는 작업들은 다음과 같은 사항이 있습니다.
// setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
// 라이브러리 인스턴스 제거

function TodoList () {
    const [listItems, setListItems] = useState([]);
    const todoData = [
        { key: 1, text: "산책하기", isDone: true },
        { key: 2, text: "독서하기", isDone: false },
        { key: 3, text: "프로그래밍 연습", isDone: true }
    ]
    // useEffect
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        setListItems(todoData);
        return () => {
          // cleanup 함수
          console.log('컴포넌트가 화면에서 사라짐');
        };
      }, []);

    return (
        <div>
            {
                listItems.map((el) => 
                    <TodoItem key={el.key} text={el.text} isDone={el.isDone} />
                )
            }
            <AddItem  />
        </div>
    )
}

export default TodoList;