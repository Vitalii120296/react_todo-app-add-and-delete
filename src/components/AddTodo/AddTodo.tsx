import React, { useRef } from 'react';

type Props = {};

export const AddTodo: React.FC<Props> = ({}) => {
  const inputRef = useRef<HTMLInputElement>(null); //focus on input element

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        value={newTodo}
        onChange={event => setNewTodo(event.target.value)}
        disabled={isSubmiting}
      />
    </form>
  );
};
