import { FC, MouseEventHandler } from 'react';
import { connect } from 'react-redux';

type Props = {
  likes: number;
  onIncrementLikes(): void;
  onDecrementLikes(): void;
};

const Likes: FC<Props> = (props) => {
  const { likes, onIncrementLikes, onDecrementLikes } = props;

  const hadleIncrementLikes: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onIncrementLikes();
  };
  const hadleDecrementLikes: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onDecrementLikes();
  };

  return (
    <div className="button-controls">
      <button onClick={hadleIncrementLikes}>❤︎ {likes}</button>
      <button onClick={hadleDecrementLikes}>Dislike</button>
    </div>
  );
};

function mapStateToProps(state: Props) {
  console.log('mapStateToProps >', state);
  return {
    likes: state.likes,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      const action = { type: 'INCREMENT' };
      dispatch(action);
    },
    onDecrementLikes: () => {
      console.log('click');
      const action = { type: 'DECREMENT' };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
