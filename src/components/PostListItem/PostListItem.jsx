import React from "react";

import "./post-list-item.css";

const PostListItem = ({
  label,
  onDelete,
  onToggleImportant,
  onToggleLiked,
  important,
  like,
}) => {
  let classNames = "app-list-item d-flex justify-content-between";

  if (important) {
    classNames += " important";
  }
  if (like) {
    classNames += " like";
  }

  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onToggleLiked}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onToggleImportant}
          type="button"
          className="btn btn-star btn-sm"
        >
          <i className="bi bi-star-fill"></i>
        </button>
        <button
          onClick={onDelete}
          type="button"
          className="btn btn-trash btn-sm"
        >
          <i className="bi bi-trash-fill"></i>
        </button>
        <i className="bi bi-heart-fill"></i>
      </div>
    </div>
  );
};

export default PostListItem;
