import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import ModalWindow from './components/ModalWindow/ModalWindow';
import TaskItem from './components/TaskItem/TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './redux/actions';

// const store = [
//   { id: 0, taskName: 'Vasa', taskDesc: 'tra la la', taskComplete: true },
//   { id: 1, taskName: 'Petya', taskDesc: 'BUBUB', taskComplete: false },
// ];

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    console.log('object');
    dispatch(
      addTask({
        taskName: 'Alesha',
        taskDesc: 'tra la la',
        taskComplete: true,
      })
    );
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const afterOpenModal = () => {
    // Ваш код после открытия модального окна
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 gap-2">
      <h1 className="mb-5">Task Manager React App</h1>
      <Button onClick={handleAddTask} variant="info" className="mb-2">
        ADD
      </Button>
      <Button onClick={openModal} variant="info" className="mb-2">
        Add Task
      </Button>
      {tasks.map(task => (
        <TaskItem key={task.id} {...task} />
      ))}
      <ModalWindow
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      />
    </Container>
  );
}
