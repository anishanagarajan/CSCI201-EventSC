Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var Profile = function (_Component) {
    babelHelpers.inherits(Profile, _Component);

    function Profile(props) {
        babelHelpers.classCallCheck(this, Profile);

        var _this = babelHelpers.possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

        var obj = JSON.parse(_this.props.info);

        _this.state = {
            fName: obj.fname,
            lName: obj.lname,
            username: obj.username,
            myEvents: obj.myEvents,
            myEventIDs: obj.myEventIDs,
            upcomingEvents: obj.upcomingEvents,
            upcomingEventIDs: obj.upcomingEventIDs,
            pastEventIDs: obj.pastEvents,
            pastEventIDs: obj.pastEventIDs

        };
        return _this;
    }

    babelHelpers.createClass(Profile, [{
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
                        this.state.fname,
                        ' ',
                        this.state.lname
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.subTitle },
                        this.state.username
                    )
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.optionsContainer },
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return _reactNativeRouterFlux.Actions.myEvents({ events: _this2.state.myEvents,
                                    IDs: _this2.state.myEventIDs });
                            },
                            style: styles.buttonsContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.button },
                            'My Events'
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return _reactNativeRouterFlux.Actions.myEvents({ events: _this2.props.upcomingEvents,
                                    IDs: _this2.props.upcomingEventIDs });
                            },
                            style: styles.buttonsContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.button },
                            'Upcoming Events'
                        )
                    ),
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return _reactNativeRouterFlux.Actions.myEvents({ events: _this2.props.pastEvents,
                                    IDs: _this2.props.pastEventIDs });
                            },
                            style: styles.buttonsContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.button },
                            'Past Events'
                        )
                    )
                )
            );
        }
    }]);
    return Profile;
}(_react.Component);

exports.default = Profile;


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

module.exports = Profile;