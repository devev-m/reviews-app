import React from 'react';
import './styles.css';

interface MainProps {
  language: string;
  reviewsData: {
    [key: string]: {
      [key: string]: {
        name: string;
        review: string;
        date: string;
      };
    };
  };
}

interface MainState {
  currentPage: number;
  reviewsPerPage: number;
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      currentPage: 1,
      reviewsPerPage: 10,
    };
  }

  handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const page = Number(event.currentTarget.textContent);
    this.setState({
      currentPage: page,
    });
  };

  render(): JSX.Element {
    const { currentPage, reviewsPerPage } = this.state;

    const reviews = Object.values(this.props.reviewsData[this.props.language.toLowerCase()]);

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="reviews-inner">
        <div className="reviews-group">
          {currentReviews.map((review, index) => (
            <div
              className="review"
              key={index}
            >
              <strong>{review.name}</strong>: {review.review} <div>{review.date}</div>
            </div>
          ))}
        </div>
        <div className="button-group">
          {pageNumbers.map((number) => (
            <button
              className={currentPage === number ? 'button active' : 'button'}
              key={number}
              onClick={(e) => this.handleClickButton(e)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
