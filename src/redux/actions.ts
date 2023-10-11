export const addTask = payload => ({
  type: 'ADD_TASK',
  payload: { ...payload, id: Date.now() },
});

export const delTask = payload => ({
  type: 'DEL_TASK',
  payload,
});

// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id,
// });
