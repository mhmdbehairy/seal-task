import { notification } from 'antd';

const notify = (
  type,
  message,
  description,
  duration = 4.5,
  placement = 'topRight'
) =>
  notification[type]({
    message: message,
    description: description,
    duration,
    placement
  });

export default notify;
