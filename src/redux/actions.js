export const addTask = payload => ({
  type: 'ADD_TASK',
  payload: { ...payload, id: Date.now() },
});

export const delTask = payload => ({
  type: 'DEL_TASK',
  payload,
});

export const editTask = payload => ({
  type: 'EDIT_TASK',
  payload,
});

export const toggleTask = payload => ({
  type: 'TOGGLE_TASK',
  payload,
});
