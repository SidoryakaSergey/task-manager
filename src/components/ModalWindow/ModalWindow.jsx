import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../../redux/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
  },
};
const initialFormState = {
  taskName: '',
  taskDesc: '',
  taskComplete: false,
};

const initialErrors = {
  taskName: false,
};

export default function ModalWindow(props) {
  const { isOpen, onAfterOpen, onRequestClose, taskID } = props;

  const [errors, setErrors] = useState(initialErrors);

  const task = useSelector(state =>
    state.tasks.find(task => task.id === taskID)
  );
  // console.log('task: ', task);

  const [formState, setFormState] = useState(() => {
    if (task) {
      // console.log('1');
      return task;
    } else {
      // console.log('2');
      return initialFormState;
    }
  });

  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(editTask(formState));
  };

  const handleAddTask = () => {
    dispatch(addTask(formState));
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <Form>
        <div className="d-flex justify-content-between">
          <Button
            disabled={errors.taskName}
            onClick={() => {
              const isValid = !!formState.taskName;

              if (isValid) {
                setErrors(initialErrors);
                setFormState(initialFormState);
                taskID ? handleEditTask() : handleAddTask();
                onRequestClose();
              } else {
                setErrors({ taskName: true });
              }
            }}
          >
            {taskID ? 'SAVE' : 'ADD'}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setErrors(initialErrors);
              setFormState(initialFormState);
              onRequestClose();
            }}
          >
            X
          </Button>
        </div>
        <div>
          <InputGroup hasValidation>
            <div className="w-100">
              <Form.Label className="mt-3" htmlFor="inputName">
                Name
              </Form.Label>
              <Form.Control
                onChange={event => {
                  const isValid = !!event.target.value;
                  if (isValid) {
                    setFormState(state => ({
                      ...state,
                      taskName: event.target.value,
                    }));
                    setErrors(initialErrors);
                  } else {
                    setErrors({ taskName: true });
                  }
                }}
                value={formState.taskName}
                type="text"
                id="inputName"
                isInvalid={errors.taskName}
              />
              <Form.Control.Feedback type="invalid">
                Task name is required!
              </Form.Control.Feedback>
            </div>
          </InputGroup>
          <Form.Label className="mt-3" htmlFor="inputDesc">
            Description
          </Form.Label>
          <Form.Control
            onChange={event => {
              setFormState(state => ({
                ...state,
                taskDesc: event.target.value,
              }));
            }}
            value={formState.taskDesc}
            type="text"
            id="inputDesc"
          />
          <Form.Check
            onChange={event => {
              setFormState(state => ({
                ...state,
                taskComplete: event.target.checked,
              }));
            }}
            checked={formState.taskComplete}
            className="mt-3"
            type="switch"
            id="custom-switch"
            label="Status Task"
          />
        </div>
      </Form>
    </Modal>
  );
}
