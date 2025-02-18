import React from 'react';
import { Todo } from '../../types/Todo';
import classNames from 'classnames';
import { Filter } from '../../types/Filter';

type Props = {
  todos: Todo[];
  filter: number;
  setFilter: (value: number) => void;
  handleClearCompleted: () => void;
};
export const Footer: React.FC<Props> = ({
  todos,
  filter,
  setFilter,
  handleClearCompleted,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {[...todos].filter(todo => !todo.completed).length} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', !filter && 'selected')}
          data-cy="FilterLinkAll"
          onClick={() => {
            setFilter(Filter.all);
          }}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames(
            'filter__link',
            filter === Filter.active && 'selected',
          )}
          data-cy="FilterLinkActive"
          onClick={() => {
            setFilter(Filter.active);
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames(
            'filter__link',
            filter === Filter.completed && 'selected',
          )}
          data-cy="FilterLinkCompleted"
          onClick={() => {
            setFilter(Filter.completed);
          }}
        >
          Completed
        </a>
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={handleClearCompleted}
        disabled={todos.filter(todo => todo.completed === true).length === 0}
      >
        Clear completed
      </button>
    </footer>
  );
};
