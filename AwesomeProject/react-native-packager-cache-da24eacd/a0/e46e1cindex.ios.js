

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _root = require('./root.js');

var _root2 = babelHelpers.interopRequireDefault(_root);

var _login = require('./login.js');

var _login2 = babelHelpers.interopRequireDefault(_login);

var _signup = require('./signup.js');

var _signup2 = babelHelpers.interopRequireDefault(_signup);

var _main = require('./main.js');

var _main2 = babelHelpers.interopRequireDefault(_main);

var _search = require('./search.js');

var _search2 = babelHelpers.interopRequireDefault(_search);

var _post = require('./post.js');

var _post2 = babelHelpers.interopRequireDefault(_post);

var _profile = require('./profile.js');

var _profile2 = babelHelpers.interopRequireDefault(_profile);

var _map = require('./map.js');

var _map2 = babelHelpers.interopRequireDefault(_map);

var _event = require('./event.js');

var _event2 = babelHelpers.interopRequireDefault(_event);

var _myEvents = require('./myEvents.js');

var _myEvents2 = babelHelpers.interopRequireDefault(_myEvents);

var AwesomeProject = function (_Component) {
    babelHelpers.inherits(AwesomeProject, _Component);

    function AwesomeProject() {
        babelHelpers.classCallCheck(this, AwesomeProject);
        return babelHelpers.possibleConstructorReturn(this, (AwesomeProject.__proto__ || Object.getPrototypeOf(AwesomeProject)).apply(this, arguments));
    }

    babelHelpers.createClass(AwesomeProject, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactNativeRouterFlux.Router,
                null,
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'root',
                    component: _root2.default,
                    title: 'Entry',
                    initial: true
                }),
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'login',
                    component: _login2.default,
                    title: 'Login'

                }),
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'signup',
                    component: _signup2.default,
                    title: 'Signup'

                }),
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'main',
                    component: _main2.default,
                    title: 'Welcome'

                }),
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'post',
                    component: _post2.default,
                    title: 'Post'

                }),
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'profile',
                    component: _profile2.default,
                    title: 'Profile'

                }),
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'search',
                    component: _search2.default,
                    title: 'Search'

                }),
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'map',
                    component: _map2.default,
                    title: 'Map'

                }),
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'event',
                    component: _event2.default,
                    title: 'Event'

                }),
                _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                    key: 'myEvents',
                    component: _myEvents2.default,
                    title: 'myEvents'

                })
            );
        }
    }]);
    return AwesomeProject;
}(_react.Component);

exports.default = AwesomeProject;


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

_reactNative.AppRegistry.registerComponent('AwesomeProject', function () {
    return AwesomeProject;
});