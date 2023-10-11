import TaskProps from './TaskProps';

interface Action {
  type: string;
}

interface AddTaskAction extends Action {
  payload: TaskProps;
}

export default interface ActionProps {
  type: string;
  payload: Record<string, unknown>;
}
