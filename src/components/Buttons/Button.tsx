import { HTMLMotionProps, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button(props: IButtonProps) {
  if (props.type === 'link') {
    const { type: as, ...rest } = props;
    return (
      <Link to={props.to}>
        <motion.div {...rest} />
      </Link>
    );
  }

  const { type: as, ...rest } = props;
  return (
    <div style={{ display: 'inline-block' }}>
      <motion.button {...rest} />
    </div>
  );
}

interface IDivProps extends HTMLMotionProps<'div'> {
  type: 'link';
  to: string;
}

interface IBtn extends HTMLMotionProps<'button'> {
  type?: 'button';
}

type IButtonProps = IDivProps | IBtn;
