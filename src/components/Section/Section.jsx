import PropTypes from 'prop-types';

function Section({ message, children }) {
  return (
    <section>
      <h2>{message}</h2>
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  children: PropTypes.element,
  message: PropTypes.string,
};
