import PropTypes from "prop-types";

const Button = ({ onClick, color, text }) => {
  return (
    <>
      <div className="action">
        <button
          onClick={onClick}
          style={{ backgroundColor: color }}
          className="btn"
        >
          {text}
        </button>
      </div>
    </>
  );
};

Button.defaultProps = {
  // cara menggil props juga
  text: "Capung",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
