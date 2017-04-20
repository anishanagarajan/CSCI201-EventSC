Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var MyEvents = function (_Component) {
    babelHelpers.inherits(MyEvents, _Component);

    function MyEvents() {
        babelHelpers.classCallCheck(this, MyEvents);
        return babelHelpers.possibleConstructorReturn(this, (MyEvents.__proto__ || Object.getPrototypeOf(MyEvents)).apply(this, arguments));
    }

    babelHelpers.createClass(MyEvents, [{
        key: 'goToEvent',
        value: function goToEvent(eventID) {
            var response, res, obj;
            return regeneratorRuntime.async(function goToEvent$(_context) {
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
                                    requestType: 'Event',
                                    eventID: eventID
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

                            _reactNativeRouterFlux.Actions.event({ eventInfo: res });

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
                _react2.default.createElement(_reactNative.View, { style: styles.empty }),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.titleContainer },
                    _react2.default.createElement(_reactNative.Text, { style: styles.title })
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.optionsContainer },
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return _this2.goToEvent(_this2.props.IDs[0]);
                            },
                            style: styles.buttonsContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.button },
                            this.props.events[0]
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return _this2.goToEvent(_this2.props.IDs[1]);
                            },
                            style: styles.buttonsContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.button },
                            this.props.events[1]
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return _this2.goToEvent(_this2.props.IDs[2]);
                            },
                            style: styles.buttonsContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.button },
                            this.props.events[2]
                        )
                    )
                )
            );
        }
    }]);
    return MyEvents;
}(_react.Component);

exports.default = MyEvents;


var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db'
    },
    empty: {
        height: 100
    },
    title: {
        color: '#FFF',
        fontSize: 30
    },
    subTitle: {
        color: '#FFF',
        fontSize: 20
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    optionsContainer: {
        padding: 20
    },
    buttonsContainer: {
        width: 250,
        height: 85,
        backgroundColor: '#2980b9',
        padding: 10,
        margin: 25
    },
    button: {
        padding: 15,
        alignSelf: 'center',
        fontSize: 25
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

module.exports = MyEvents;