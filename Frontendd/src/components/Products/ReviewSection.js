import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const ReviewSection = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  useEffect(() => {
    // Fetch reviews for the product
    // This is a mock implementation. Replace with actual API call.
    setReviews([
      { id: 1, rating: 4, comment: "Great product!", user: "User1" },
      { id: 2, rating: 5, comment: "Excellent quality!", user: "User2" },
    ]);
  }, [productId]);

  const handleSubmitReview = () => {
    // Submit the new review
    // This is a mock implementation. Replace with actual API call.
    const review = { ...newReview, id: reviews.length + 1, user: "CurrentUser" };
    setReviews([...reviews, review]);
    setNewReview({ rating: 5, comment: '' });
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Customer Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="mb-2">
          <div className="flex items-center">
            <Star className="text-yellow-400" />
            <span className="ml-1">{review.rating}</span>
          </div>
          <p>{review.comment}</p>
          <p className="text-sm text-gray-500">By {review.user}</p>
        </div>
      ))}
      <div className="mt-4">
        <h4 className="font-bold mb-2">Write a Review</h4>
        <div className="relative inline-block w-full">
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} {rating === 1 ? 'Star' : 'Stars'}
              </option>
            ))}
          </select>
        </div>
        <input
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="text"
          placeholder="Write your review..."
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        />
        <button
          className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSubmitReview}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
