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
          className={`btn_page${
            currentPage === pageNumber - 1 ? " active" : ""
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}
