import history from '../history';

const pushHistory = (path) => {
  history.push(`/${path}`);
};

export default pushHistory;
