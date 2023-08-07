import {useState} from 'react';


function Button(props: any) {
  const {onSubmit, children} = props;
  return (<button className="button" type="button" onClick={onSubmit}>{children}</button>);
}

function Details({review, rating}) {

  return (
    <>
      <h2>Проверка введённых данных:</h2>
      <p>
        <b>Комментарий: </b> {review}
        <b>Оценка: </b>{rating}<br/>
      </p>
    </>
  );
}

function Form() {

  const [formData, setFormData] = useState({
    review: '',
    rating: 0
  });

  // function setFormDataButton() {
  //   console.log('foobar');
  // }

  const fieldChangeHandle = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <>
      <form className="form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        {/*<div className="reviews__rating-form form__rating">*/}
        {/*  <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>*/}
        {/*  <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">*/}
        {/*    <svg className="form__star-image" width="37" height="33">*/}
        {/*      <use xlinkHref="#icon-star"></use>*/}
        {/*    </svg>*/}
        {/*  </label>*/}
        {/*  <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>*/}
        {/*  <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">*/}
        {/*    <svg className="form__star-image" width="37" height="33">*/}
        {/*      <use xlinkHref="#icon-star"></use>*/}
        {/*    </svg>*/}
        {/*  </label>*/}
        {/*  <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>*/}
        {/*  <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">*/}
        {/*    <svg className="form__star-image" width="37" height="33">*/}
        {/*      <use xlinkHref="#icon-star"></use>*/}
        {/*    </svg>*/}
        {/*  </label>*/}
        {/*  <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>*/}
        {/*  <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">*/}
        {/*    <svg className="form__star-image" width="37" height="33">*/}
        {/*      <use xlinkHref="#icon-star"></use>*/}
        {/*    </svg>*/}
        {/*  </label>*/}
        {/*  <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>*/}
        {/*  <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">*/}
        {/*    <svg className="form__star-image" width="37" height="33">*/}
        {/*      <use xlinkHref="#icon-star"></use>*/}
        {/*    </svg>*/}
        {/*  </label>*/}
        {/*</div>*/}
        <input onChange={fieldChangeHandle} value={formData.rating} type="text" name="rating"/>
        <textarea onChange={fieldChangeHandle} value={formData.review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <div className="reviews__submit">
            {/*<Button onSubmit={setFormDataButton}>Submit</Button>*/}
            <button type="submit">Send</button>
          </div>
        </div>
      </form>
      <Details {...formData}/>
    </>
  );
}

export default Form;
