Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _reactNativeMaps = require('react-native-maps');

var _reactNativeMaps2 = babelHelpers.interopRequireDefault(_reactNativeMaps);

var Map = function (_Component) {
  babelHelpers.inherits(Map, _Component);

  function Map() {
    babelHelpers.classCallCheck(this, Map);
    return babelHelpers.possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));
  }

  babelHelpers.createClass(Map, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container },
        _react2.default.createElement(_reactNativeMaps2.default, { style: styles.map,
          showUserLocation: true,
          initialRegion: {
            latitude: 34.0207044,
            longitude: -118.284963,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.021
          }
        })
      );
    }
  }]);
  return Map;
}(_react.Component);

exports.default = Map;


var styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }

});

module.exports = Map;