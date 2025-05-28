import React from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { ReviewCard } from './styles';

const Review = ({ user, date, rating, comment, likes, dislikes }) => {
  return (
    <ReviewCard>
      <div className="d-flex align-items-center gap-3">
        <div
          className="rounded-circle"
          style={{
            width: '2.5rem',
            height: '2.5rem',
            backgroundImage: `url(${user.avatar})`,
            backgroundSize: 'cover'
          }}
        />
        <div>
          <p className="text-white mb-0 fw-medium">{user.name}</p>
          <small className="text-muted">{date}</small>
        </div>
      </div>

      <div className="d-flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            fill={i < rating ? '#e92932' : 'none'}
            color={i < rating ? '#e92932' : '#8b4649'}
          />
        ))}
      </div>

      <p className="text-white">{comment}</p>

      <div className="d-flex gap-4 text-muted">
        <button className="btn btn-link text-muted p-0 d-flex align-items-center gap-2">
          <ThumbsUp size={20} />
          <span>{likes}</span>
        </button>
        <button className="btn btn-link text-muted p-0 d-flex align-items-center gap-2">
          <ThumbsDown size={20} />
          <span>{dislikes}</span>
        </button>
      </div>
    </ReviewCard>
  );
};

export default Review;
