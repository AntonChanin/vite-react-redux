import { FC, MouseEventHandler } from 'react';
import { connect } from 'react-redux';
import { decrementLikes, incrementLikes } from './redux/actions';

type Props<T> = {
  onIncrementLikes(): void;
  onDecrementLikes(): void;
} & T;

const Likes: FC<Props<{ likes: number }>> = (props) => {
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

function mapStateToProps(state: Props<{ likesReducer: { likes: number } }>) {
  console.log('mapStateToProps >', state);
  const { likesReducer: { likes } } = state;
  return {
    likes,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
