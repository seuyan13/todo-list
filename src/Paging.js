import React from "react";

export default function Paging({ todoData, currentPage, setCurrentPage }) {
  const btn_page = {
    marginTop: "1rem",
    marginLeft: "0.5rem",
    display: "inline-block",
    padding: "0.3rem 1rem",
    fontSize: "0.8rem",
  };

  const totalPages = Math.ceil(todoData.length / 10);

  /**
   * HOWTO
   * ERROR : 페이지를 클릭하면 리스트들이 다 사라지고 안보입니다.
   * COMMENT : currentPage를 받아온 pagenumber로 set해야 하는데,
   * 기존에는 (prevPage) => prevPage + 1 코드로, prevPage에 +1하는 방식이었습니다.
   * 이렇게 하면 currentPage가 1>2>3>4>5 식으로 계속 늘어나기만 하고,
   * 내가 누른 실제 페이지를 반영하지 못하게 됩니다.
   * FIX : 받아온 pageNumber를 setCurrentPage의 인자로 넣어 해결.
   */
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber - 1);
  };

  return (
    <div className="Paging">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          style={btn_page}
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`btn_page${currentPage === pageNumber - 1 ? " active" : ""}`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
