Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var Root = function (_Component) {
  babelHelpers.inherits(Root, _Component);

  function Root() {
    babelHelpers.classCallCheck(this, Root);
    return babelHelpers.possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  babelHelpers.createClass(Root, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.titleContainer },
          _react2.default.createElement(
            _reactNative.Text,
            { style: styles.title },
            'EventSC'
          )
        ),
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.optionsContainer },
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              onPress: function onPress() {
                return _reactNativeRouterFlux.Actions.login();
              },
              style: styles.buttonsContainer },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.button },
              'Login'
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              onPress: function onPress() {
                return _reactNativeRouterFlux.Actions.signup();
              },
              style: styles.buttonsContainer },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.button },
              'Sign Up'
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              onPress: function onPress() {
                return _reactNativeRouterFlux.Actions.main();
              },
              style: styles.buttonsContainer },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.button },
              'Continue as Guest'
            )
          )
        )
      );
    }
  }]);
  return Root;
}(_react.Component);

exports.default = Root;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db'
  },
  title: {
    color: '#FFF',
    fontSize: 30

  },
  optionsContainer: {
    padding: 20
  },
  buttonsContainer: {
    backgroundColor: '#2980b9',
    padding: 10,
    margin: 15

  },
  button: {
    color: '#FFF',
    textAlign: 'center',
    padding: 5
  }

});

module.exports = Root;