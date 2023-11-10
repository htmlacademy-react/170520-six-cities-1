import {CommentType} from '../../types/commentType';
import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';

type ReviewsProps = {
  data: CommentType[];
}

function Reviews(props: ReviewsProps): JSX.Element {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{props.data.length}</span></h2>
      <ul className="reviews__list">
        {
          props.data.map((element) => <ReviewsItem key={element.id} data={element}/>)
        }
      </ul>
      <div className="reviews__form">
        <ReviewsForm/>
      </div>
    </section>
  );
}


export default Reviews;

