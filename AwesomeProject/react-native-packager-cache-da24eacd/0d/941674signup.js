Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var Signup = function (_Component) {
    babelHelpers.inherits(Signup, _Component);

    function Signup() {
        babelHelpers.classCallCheck(this, Signup);

        var _this = babelHelpers.possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

        _this.state = {
            fname: "",
            lname: "",
            username: "",
            password: "",
            errorHeight: 0
        };
        return _this;
    }

    babelHelpers.createClass(Signup, [{
        key: 'onLoginPressed',
        value: function onLoginPressed() {
            var response, res, obj;
            return regeneratorRuntime.async(function onLoginPressed$(_context) {
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
                                    requestType: 'SignUp',
                                    fname: this.state.fname,
                                    lname: this.state.lname,
                                    username: this.state.username,
                                    password: this.state.password
                                })
                            }));

                        case 3:
                            response = _context.sent;
                            _context.next = 6;
                            return regeneratorRuntime.awrap(response.text());

                        case 6:
                            res = _context.sent;

                            console.log(res);
                            obj = JSON.parse(res);

                            if (obj.ifSuccess) {
                                _reactNativeRouterFlux.Actions.main();
                            } else {
                                this.state.errorHeight = 50;
                            }

                            _context.next = 15;
                            break;

                        case 12:
                            _context.prev = 12;
                            _context.t0 = _context['catch'](0);

                            console.error(_context.t0);

                        case 15:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, null, this, [[0, 12]]);
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
                    { style: styles.formContainer },
                    _react2.default.createElement(_reactNative.TextInput, {
                        onChangeText: function onChangeText(text) {
                            return _this2.setState({ fname: text });
                        },
                        style: styles.input,
                        placeholder: 'first name',
                        placeholderTextColor: 'rgba(255,255,255,0.7)'

                    }),
                    _react2.default.createElement(_reactNative.TextInput, {
                        onChangeText: function onChangeText(text) {
                            return _this2.setState({ lname: text });
                        },
                        style: styles.input,
                        placeholder: 'last name',
                        placeholderTextColor: 'rgba(255,255,255,0.7)'

                    }),
                    _react2.default.createElement(_reactNative.TextInput, {
                        onChangeText: function onChangeText(text) {
                            return _this2.setState({ username: text });
                        },
                        style: styles.input,
                        placeholder: 'username',
                        placeholderTextColor: 'rgba(255,255,255,0.7)'

                    }),
                    _react2.default.createElement(_reactNative.TextInput, {
                        onChangeText: function onChangeText(text) {
                            return _this2.setState({ password: text });
                        },
                        placeholder: 'password',
                        placeholderTextColor: 'rgba(255,255,255,0.7)',
                        secureTextEntry: true,
                        style: styles.input
                    })
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.optionsContainer },
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return _this2.onLoginPressed();
                            },
                            style: styles.buttonsContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.button },
                            'Sign Up'
                        )
                    )
                )
            );
        }
    }]);
    return Signup;
}(_react.Component);

exports.default = Signup;


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

module.exports = Signup;