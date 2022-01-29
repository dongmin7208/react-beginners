import PropTypes from "prop-types";

function Button({ text }) {
    return (
        <button
            style={{
                backgroundColor: "red",
                color: "white",
                padding: "25px",
                borderRadius: "50px",
            }}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Button;
