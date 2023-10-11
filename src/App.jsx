import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ModalWindow from './components/ModalWindow/ModalWindow';
import TaskItem from './components/TaskItem/TaskItem';

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const tasks = useSelector(state => state.tasks);
  const [editingTaskID, setEditingID] = useState(null);
  const [selected, setSelected] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setEditingID(null);
    setIsOpen(false);
  };

  const afterOpenModal = () => {};

  const filteredTasks =
    selected === ''
      ? tasks
      : selected === 'complete'
      ? tasks.filter(task => task.taskComplete)
      : tasks.filter(task => !task.taskComplete);
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 gap-2">
      <h1 className="mb-5">Task Manager</h1>
      <Button onClick={openModal} variant="info" className="mb-2">
        Add Task
      </Button>
      <Form.Select
        onChange={event => setSelected(event.target.value)}
        value={selected}
        aria-label="Default select example"
      >
        <option value="">Show all</option>
        <option value="complete">Show complete</option>
        <option value="notComplete">Show not complete</option>
      </Form.Select>
      {filteredTasks.map(task => (
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
