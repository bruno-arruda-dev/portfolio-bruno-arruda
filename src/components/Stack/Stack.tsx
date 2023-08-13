import classes from './Stack.module.scss';
import { IStackProps } from '../../types/StackProps';

const Stack = ({ stack }: IStackProps) => {
  if (!stack) {
    return null;
  }

  return (
    <div className={`${classes['defaultStack']} ${classes[stack]}`}>
      {stack}
    </div>
  );
}

export default Stack;
