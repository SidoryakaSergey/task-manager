import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ModalWindow from './components/ModalWindow/ModalWindow';
import TaskItem from './components/TaskItem/TaskItem';

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const tasks = useSelector(state => state.tasks);
  const [editingTaskID, setEditingID] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setEditingID(null);
    setIsOpen(false);
  };

  const afterOpenModal = () => {};

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 gap-2">
      <h1 className="mb-5">Task Manager React App</h1>
      <Button onClick={openModal} variant="info" className="mb-2">
        Add Task
      </Button>
      {tasks.map(task => (
        <TaskItem
          onEditClick={id => {
            setEditingID(id);
            setIsOpen(true);
          }}
          key={task.id}
          {...task}
        />
      ))}
      {modalIsOpen && (
        <ModalWindow
          taskID={editingTaskID}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        />
      )}
    </Container>
  );
}
