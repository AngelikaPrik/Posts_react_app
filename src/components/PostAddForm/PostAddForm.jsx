import React, { useState } from "react";
import {Input} from "reactstrap"

import "./post-add-form.css"

const PostAddForm = ({onAdd}) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  }
  
  return (
    <form 
      className="bottom-panel d-flex"
      onSubmit={onSubmit} >
      <Input
        сlassName="form-control new-post-label"
        type="text"
        placeholder="О чем вы думаете сейчас?"
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <button
       className="btn btn-outline-secondary" 
       type="submit">
        Добавить
      </button>
    </form>
  );
};

export default PostAddForm;
