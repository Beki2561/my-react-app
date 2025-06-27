import PropTypes from 'prop-types';

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="text-green-600 text-2xl font-semibold">
      Welcome back, {props.username}!
    </h2>
  );

  const loginMessage = (
    <h2 className="text-red-600 text-2xl font-semibold">
      Please log in first, {props.username}.
    </h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginMessage;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: 'Guest',
};

export default UserGreeting;
