Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var Event = function (_Component) {
    babelHelpers.inherits(Event, _Component);

    function Event(props) {
        babelHelpers.classCallCheck(this, Event);

        var _this = babelHelpers.possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

        var obj = JSON.parse(_this.props.eventInfo);

        _this.state = {
            title: obj.title,
            location: obj.location,
            date: obj.date,
            time: obj.time,
            eventID: obj.eventID,
            description: obj.description,
            posterName: obj.posterName,
            posterID: obj.posterID,
            coordinateX: obj.coordinateX,
            coordinateY: obj.coordinateY,
            posterRating: obj.posterRating
        };

        return _this;
    }

    babelHelpers.createClass(Event, [{
        key: 'sendRSVP',
        value: function sendRSVP() {
            var response, res, obj;
            return regeneratorRuntime.async(function sendRSVP$(_context) {
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
                                    requestType: 'RSVP',
                                    eventID: this.state.eventID
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
                                console.log("loaded event");
                            } else {}

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
                        this.state.title
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.subTitle },
                        this.state.posterName
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.subTitle },
                        this.state.location
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.subTitle },
                        this.state.date
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.subTitle },
                        this.state.time
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.subTitle },
                        this.state.description
                    )
                ),
                _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    {
                        onPress: function onPress() {
                            return _this2.sendRSVP();
                        },
                        style: styles.buttonsContainer },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.button },
                        'RSVP'
                    )
                )
            );
        }
    }]);
    return Event;
}(_react.Component);

exports.default = Event;


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

module.exports = Event;