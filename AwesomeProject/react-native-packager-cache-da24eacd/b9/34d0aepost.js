Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var Post = function (_Component) {
    babelHelpers.inherits(Post, _Component);

    function Post() {
        babelHelpers.classCallCheck(this, Post);

        var _this = babelHelpers.possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this));

        _this.state = {
            title: "",
            month: "4",
            date: "20",
            year: "2017",
            hours: "12",
            minutes: "30",
            location: "",
            locationX: "100",
            locationY: "100",
            description: ""

        };

        return _this;
    }

    babelHelpers.createClass(Post, [{
        key: 'onSubmitPressed',
        value: function onSubmitPressed() {
            var response, res;
            return regeneratorRuntime.async(function onSubmitPressed$(_context) {
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
                                    requestType: 'Post',
                                    title: this.state.title,
                                    month: this.state.month,
                                    date: this.state.date,
                                    year: this.state.year,
                                    hours: this.state.hours,
                                    minutes: this.state.minutes,
                                    location: this.state.location,
                                    locationX: this.state.locationX,
                                    locationY: this.state.locationY,
                                    description: this.state.description
                                })
                            }));

                        case 3:
                            response = _context.sent;
                            _context.next = 6;
                            return regeneratorRuntime.awrap(response.text());

                        case 6:
                            res = _context.sent;

                            console.log(res);
                            _reactNativeRouterFlux.Actions.event({ eventInfo: res });

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
                _react2.default.createElement(_reactNative.View, { style: styles.empty }),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.titleContainer },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.title },
                        'Create a New Event'
                    )
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.formContainer },
                    _react2.default.createElement(_reactNative.TextInput, {
                        onChangeText: function onChangeText(text) {
                            return _this2.setState({ title: text });
                        },
                        style: styles.titleInput,
                        placeholder: 'title (10 words max)',
                        placeholderTextColor: 'rgba(255,255,255,0.7)'

                    }),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.pickerContainer },
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: styles.datePicker },
                            _react2.default.createElement(
                                _reactNative.Picker,
                                { style: styles.picker,
                                    selectedValue: this.state.month,
                                    onValueChange: function onValueChange(month) {
                                        return _this2.setState({ month: month });
                                    } },
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'Jan', value: '1' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'Feb', value: '2' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'March', value: '3' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'April', value: '4' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'May', value: '5' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'June', value: '6' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'July', value: '7' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'Aug', value: '8' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'Sept', value: '9' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'Oct', value: '10' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'Nov', value: '11' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: 'Dec', value: '12' })
                            ),
                            _react2.default.createElement(
                                _reactNative.Picker,
                                { style: styles.picker,
                                    selectedValue: this.state.date,
                                    onValueChange: function onValueChange(date) {
                                        return _this2.setState({ date: date });
                                    } },
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '1', value: '1' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '2', value: '2' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '3', value: '3' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '4', value: '4' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '5', value: '5' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '6', value: '6' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '7', value: '7' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '8', value: '8' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '9', value: '9' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '10', value: '10' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '11', value: '11' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '12', value: '12' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '13', value: '13' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '14', value: '14' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '15', value: '15' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '16', value: '16' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '17', value: '17' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '18', value: '18' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '19', value: '19' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '20', value: '20' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '21', value: '21' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '22', value: '22' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '23', value: '23' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '24', value: '24' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '25', value: '25' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '26', value: '26' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '27', value: '27' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '28', value: '28' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '29', value: '29' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '30', value: '30' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '31', value: '31' })
                            ),
                            _react2.default.createElement(
                                _reactNative.Picker,
                                { style: styles.picker,
                                    selectedValue: this.state.year,
                                    onValueChange: function onValueChange(year) {
                                        return _this2.setState({ year: year });
                                    } },
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '2015', value: '2015' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '2016', value: '2016' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '2017', value: '2017' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '2018', value: '2018' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '2019', value: '2019' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '2020', value: '2020' })
                            )
                        ),
                        _react2.default.createElement(
                            _reactNative.View,
                            { style: styles.timePicker },
                            _react2.default.createElement(
                                _reactNative.Picker,
                                { style: styles.picker,
                                    selectedValue: this.state.hours,
                                    onValueChange: function onValueChange(hours) {
                                        return _this2.setState({ hours: hours });
                                    } },
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '1', value: '1' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '2', value: '2' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '3', value: '3' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '4', value: '4' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '5', value: '5' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '6', value: '6' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '7', value: '7' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '8', value: '8' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '9', value: '9' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '10', value: '10' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '11', value: '11' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '12', value: '12' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '13', value: '13' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '14', value: '14' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '15', value: '15' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '16', value: '16' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '17', value: '17' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '18', value: '18' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '19', value: '19' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '20', value: '20' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '21', value: '21' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '22', value: '22' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '23', value: '23' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '24', value: '24' })
                            ),
                            _react2.default.createElement(
                                _reactNative.Picker,
                                { style: styles.picker,
                                    selectedValue: this.state.minutes,
                                    onValueChange: function onValueChange(minutes) {
                                        return _this2.setState({ minutes: minutes });
                                    } },
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '00', value: '00' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '15', value: '15' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '30', value: '30' }),
                                _react2.default.createElement(_reactNative.Picker.Item, { label: '45', value: '45' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.locationInputContainer },
                        _react2.default.createElement(_reactNative.TextInput, {
                            placeholder: 'location (Ex. RTH 201)',
                            placeholderTextColor: 'rgba(255,255,255,0.7)',
                            style: styles.locationInput
                        })
                    ),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.locationContainer },
                        _react2.default.createElement(_reactNative.MapView, { style: styles.map,
                            showUserLocation: true,
                            region: {
                                latitude: 34.0207044,
                                longitude: -118.284963,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.001
                            }
                        })
                    ),
                    _react2.default.createElement(_reactNative.TextInput, {
                        onChangeText: function onChangeText(text) {
                            return _this2.setState({ description: text });
                        },
                        placeholder: 'description',
                        placeholderTextColor: 'rgba(255,255,255,0.7)',
                        style: styles.descriptionInput
                    })
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.optionsContainer },
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return _this2.onSubmitPressed();
                            },
                            style: styles.buttonsContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.button },
                            'Submit'
                        )
                    )
                )
            );
        }
    }]);
    return Post;
}(_react.Component);

exports.default = Post;


var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#3498db',
        flexDirection: 'column'
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        alignSelf: 'center'

    },
    optionsContainer: {
        padding: 20,
        alignItems: 'center'
    },
    buttonsContainer: {
        backgroundColor: '#2980b9',
        padding: 10,
        width: 70,
        height: 40,
        alignItems: 'center'

    },
    formContainer: {
        margin: 10
    },
    titleInput: {
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: "rgba(255,255,255,0.2)",
        color: '#FFF',
        paddingHorizontal: 10
    },
    titleContainer: {
        height: 30

    },

    descriptionInput: {
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: "rgba(255,255,255,0.2)",
        color: '#FFF',
        paddingHorizontal: 10
    },
    locationInput: {
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: "rgba(255,255,255,0.2)",
        color: '#FFF',
        paddingHorizontal: 10
    },
    picker: {
        width: 60,
        height: 150
    },
    datePicker: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginRight: 20,
        height: 200
    },

    timePicker: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        marginLeft: 20,
        height: 200
    },

    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 10
    },

    locationContainer: {
        height: 150,
        alignSelf: 'stretch',
        margin: 10
    },

    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    empty: {
        height: 100
    }

});

module.exports = Post;