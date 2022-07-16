const AddTaskForm = ({ todos, newTask, setNewTask, addTaskHandler, clearAll }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
        </div>
        <div className="col-auto">
          <button onClick={addTaskHandler} className="success">
            Add Task
          </button>
        </div>
        {todos && todos.length ? (
          <div className="col-auto">
            <button onClick={clearAll} className="success">
              Clear All
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default AddTaskForm;
