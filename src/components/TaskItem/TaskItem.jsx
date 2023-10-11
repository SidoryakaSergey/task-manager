import {
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { useDispatch } from 'react-redux';
import { delTask, toggleTask } from '../../redux/actions';

const iconStyle = {
  width: '1.5rem',
  height: '1.5rem',
};

function TaskItem(props) {
  const { taskName, taskDesc, taskComplete, id, onEditClick } = props;
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask({ id }));
  };

  const handleDeleteTask = () => {
    dispatch(delTask({ id }));
  };

  return (
    <Container fluid className="bg-warning rounded">
      <Row className="justify-content-between align-items-center m-2">
        <Col>
          {taskComplete ? (
            <Button onClick={handleToggle} variant="success">
              <CheckCircleIcon style={iconStyle} />
            </Button>
          ) : (
            <Button onClick={handleToggle} variant="danger">
              <XCircleIcon style={iconStyle} />
            </Button>
          )}
        </Col>
        <Col>
          <div
            style={{
              textDecoration: taskComplete ? 'line-through' : 'none',
            }}
          >
            {taskName}
          </div>
        </Col>
        <Col>
          <div
            style={{
              textDecoration: taskComplete ? 'line-through' : 'none',
            }}
          >
            {taskDesc}
          </div>
        </Col>

        <Col className="d-flex justify-content-end gap-1">
          <Button
            onClick={() => {
              onEditClick(id);
            }}
            variant="primary"
          >
            <PencilIcon style={iconStyle} />
          </Button>
          <Button onClick={handleDeleteTask} variant="danger">
            <TrashIcon style={iconStyle} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskItem;
