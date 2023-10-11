const initialState = {
  tasks: [
    { id: 0, taskName: 'Vasa', taskDesc: 'tra la la', taskComplete: true },
    { id: 1, taskName: 'Petya', taskDesc: 'BUBUB', taskComplete: false },
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
    default:
      return state;
  }
}
