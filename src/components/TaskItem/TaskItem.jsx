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
import { delTask } from '../../redux/actions';

const iconStyle = {
  width: '1.5rem',
  height: '1.5rem',
};

function TaskItem(props) {
  const { taskName, taskDesc, taskComplete, id } = props;
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(delTask({ id }));
  };

  return (
    <Container fluid className="bg-warning rounded">
      <Row className="justify-content-between align-items-center m-2">
        <Col>
          {taskComplete ? (
            <Button variant="success">
              <CheckCircleIcon style={iconStyle} />
            </Button>
          ) : (
            <Button variant="danger">
              <XCircleIcon style={iconStyle} />
            </Button>
          )}
        </Col>
        <Col>{taskName}</Col>
        <Col>{taskDesc}</Col>

        <Col className="d-flex justify-content-end gap-1">
          <Button variant="primary">
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
