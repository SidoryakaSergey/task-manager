const initialState = {
  tasks: [
    { id: 2, taskName: 'Task manager', taskDesc: '', taskComplete: true },
  ],
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    }
    case 'DEL_TASK': {
      return {
        ...state,
        tasks: state.tasks.filter(el => el.id !== action.payload.id),
      };
    }
    case 'EDIT_TASK': {
      return {
        ...state,
        tasks: state.tasks.map(el =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    }
    case 'TOGGLE_TASK': {
      return {
        ...state,
        tasks: state.tasks.map(el =>
          el.id === action.payload.id
            ? { ...el, taskComplete: !el.taskComplete }
            : el
        ),
      };
    }
    default:
      return state;
  }
}
