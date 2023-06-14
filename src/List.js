import React from "react";

export default function List({ todoData, setTodoData, currentPage }) {
  const todosPerPage = 10;
  const indexOfLastTodo = (currentPage + 1) * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  const btn_X = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (finished) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: finished ? "line-through" : "none",
    };
  };
  /**
   * HOWTO
   * ERROR : 10개를 초과하여 리스트들을 작성하면 새로운 페이지가 만들어지고
   * 새롭게 만들어진 페이지에서 리스트들을 삭제하거나 체크박스를 클릭하면 리스트 전체가 다 사라집니다.
   * COMMENT : todoData가 30개 currentTodos가 10개인 경우, currentTodos 10개를 받아온 다음, 삭제/체크 등 작업을 수행하면,
   * setcurrentTodos가 아닌 setTodoData를 진행했습니다. 그러면 전체 todoData가 currentTodos에 있던 데이터로 대치됩니다.
   * 이렇게 되면, todo 체크/삭제 시 현재 페이지에 나오지 않는 데이터는 모두 날아갑니다.
   * FIX : App에서 List로 보내는 todoData prop을 currentTodos에서 실제 App의 todoData로 변경하고,
   * currentPage prop을 새로 만들어 currentPage를 가져왔습니다.
   * App의 currentTodos 관련 내용은 삭제했습니다.
   * 그리고, 렌더링 하는 부분에서 todoData를 index로 필터링하여, currentPage에 해당하는 항목만 보여주도록 변경했습니다.
   * 참고로, filter 순서 바꾸면 다르게 동작합니다. 꼭 뒤를 먼저 자르고 앞을 잘라야 정상적으로 index로 필터링할 수 있습니다.
   */

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleFinished = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.finished = !data.finished;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData
        .filter((n, index) => indexOfLastTodo > index)
        .filter((n, index) => indexOfFirstTodo <= index).map((data) => (
        <div style={getStyle(data.finished)} key={data.id}>
          <input
            type="checkbox"
            onChange={() => handleFinished(data.id)}
            defaultChecked={false}
          />
          {data.title}
          <button style={btn_X} onClick={() => handleClick(data.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
