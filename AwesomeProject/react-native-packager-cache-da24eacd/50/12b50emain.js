Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _search = require('./search.js');

var _search2 = babelHelpers.interopRequireDefault(_search);

var _profile = require('./profile.js');

var _profile2 = babelHelpers.interopRequireDefault(_profile);

var _post = require('./post.js');

var _post2 = babelHelpers.interopRequireDefault(_post);

var _map = require('./map.js');

var _map2 = babelHelpers.interopRequireDefault(_map);

var Main = function (_Component) {
  babelHelpers.inherits(Main, _Component);

  function Main() {
    babelHelpers.classCallCheck(this, Main);
    return babelHelpers.possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  babelHelpers.createClass(Main, [{
    key: 'onProfilePressed',
    value: function onProfilePressed() {
      var response, res;
      return regeneratorRuntime.async(function onProfilePressed$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch('http://10.120.105.99:8080/FinalP/GeneralServlet', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  requestType: 'Profile'
                })
              }));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(response.text());

            case 6:
              res = _context.sent;

              console.log(res);
              _reactNativeRouterFlux.Actions.profile({ info: res });

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);

              console.error(_context.t0);

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this, [[0, 11]]);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
                return _this2.onProfilePressed();
              },
              style: styles.buttonsContainer },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.button },
              'Profile'
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              onPress: function onPress() {
                return _reactNativeRouterFlux.Actions.post();
              },
              style: styles.buttonsContainer },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.button },
              'Post'
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              onPress: function onPress() {
                return _reactNativeRouterFlux.Actions.map();
              },
              style: styles.buttonsContainer },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.button },
              'Map'
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              onPress: function onPress() {
                return _reactNativeRouterFlux.Actions.search({ anisha: "anisha" });
              },
              style: styles.buttonsContainer },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.button },
              'Search'
            )
          )
        )
      );
    }
  }]);
  return Main;
}(_react.Component);

exports.default = Main;


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
    padding: 10

  },
  formContainer: {
    margin: 20
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  }

});

module.exports = Main;