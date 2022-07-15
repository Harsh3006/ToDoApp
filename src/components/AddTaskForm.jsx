const AddTaskForm = ( {newTask, setNewTask, addTaskHandler} ) => {
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
      </div>
    </>
  );
};

export default AddTaskForm;
