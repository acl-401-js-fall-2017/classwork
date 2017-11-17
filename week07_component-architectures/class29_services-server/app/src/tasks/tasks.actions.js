import shortid from 'shortid';

export const createTask = title => ({ 
  _id: shortid.generate(),
  title, 
  completed: false 
});


export function addTask(state, task) {
  return {
    ...state,
    tasks: [
      ...state.tasks,
      task
    ]
  };
}

export function removeTask(state, _id) {
  const index = state.tasks.findIndex(t => t._id === _id);
  if(index === -1) return state;

  const tasks = state.tasks.slice();
  tasks.splice(index, 1);
  
  return {
    ...state,
    tasks
  };
}

export function updateTask(state, task) {
  const { tasks } = state;
  const index = tasks.findIndex(t => t._id === task._id);
  if(index === -1) return state;
  
  return {
    ...state,
    tasks: [
      ...tasks.slice(0, index),
      task,
      ...tasks.slice(index + 1)
    ]
  };
}