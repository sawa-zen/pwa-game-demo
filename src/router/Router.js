import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import TopPage from '../pages/TopPage';
import GamePage from '../pages/GamePage';
import ScorePage from '../pages/ScorePage';
import { setCurrentPage } from './routerAction';

const renderPage = (currentPage) => {
  switch (currentPage) {
    case 'start': return <TopPage />;
    case 'game': return <GamePage />;
    case 'score': return <ScorePage />;
  }
};

const Router = pure((props) => (
  <div>
    { renderPage(props.currentPage) }
  </div>
));

const mapStateToProps = (state) => ({
  currentPage: state.router.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  onDestroyed: () => {
    dispatch(setCurrentPage('score'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);
