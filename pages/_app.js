import '../styles/styles.css';
import propTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = {
  Component: propTypes.func,
  pageProps: propTypes.object,
};
