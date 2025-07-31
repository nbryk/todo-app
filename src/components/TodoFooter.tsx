import classNames from 'classnames';
import { FilterStatus } from '../types/FilterStatus';

interface PropsTodoFooter {
  activeTodosCount: number;
  filterStatus: FilterStatus;
  setFilterStatus: (status: FilterStatus) => void;
  onClearCompleted: () => void;
  hasCompletedTodos: boolean;
}

export const TodoFooter = ({
  activeTodosCount,
  filterStatus,
  setFilterStatus,
  onClearCompleted,
  hasCompletedTodos,
}: PropsTodoFooter) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodosCount} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: filterStatus === FilterStatus.All,
          })}
          data-cy="FilterLinkAll"
          onClick={() => setFilterStatus(FilterStatus.All)}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: filterStatus === FilterStatus.Active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => setFilterStatus(FilterStatus.Active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: filterStatus === FilterStatus.Completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilterStatus(FilterStatus.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={onClearCompleted}
        disabled={!hasCompletedTodos}
      >
        Clear completed
      </button>
    </footer>
  );
};
