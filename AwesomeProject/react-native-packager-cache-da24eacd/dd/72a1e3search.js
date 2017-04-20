Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _reactNativeCheckbox = require('react-native-checkbox');

var _reactNativeCheckbox2 = babelHelpers.interopRequireDefault(_reactNativeCheckbox);

var Search = function (_Component) {
    babelHelpers.inherits(Search, _Component);
    babelHelpers.createClass(Search, [{
        key: 'onSearch',
        value: function onSearch() {
            var response, res, obj, ds, eventList, tempList;
            return regeneratorRuntime.async(function onSearch$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;

                            searchType = "event";
                            this.state.recordType = this.state.userChecked;
                            if (this.state.userChecked) {
                                searchType = "user";
                            }
                            _context.next = 6;
                            return regeneratorRuntime.awrap(fetch('http://10.120.105.99:8080/FinalP/GeneralServlet', {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    requestType: 'Search',
                                    searchType: searchType,
                                    searchParameter: this.state.searchParameter
                                })
                            }));

                        case 6:
                            response = _context.sent;
                            _context.next = 9;
                            return regeneratorRuntime.awrap(response.text());

                        case 9:
                            res = _context.sent;


                            console.log(res);

                            obj = JSON.parse(res);
                            ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
                                    return r1 !== r2;
                                } });
                            eventList = [];

                            for (count = 0; count < obj.eventTitles.length; count++) {
                                tempList = [];

                                tempList.add(obj.eventTitles[count]);
                                tempList.add(obj.posterNames[count]);
                                tempList.add(obj.eventIDs[count]);
                                eventList.add(tempList);
                            }
                            this.setState({ dataSource: ds.cloneWithRows(eventList) });
                            _context.next = 21;
                            break;

                        case 18:
                            _context.prev = 18;
                            _context.t0 = _context['catch'](0);

                            console.error(_context.t0);

                        case 21:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, null, this, [[0, 18]]);
        }
    }]);

    function Search(props) {
        babelHelpers.classCallCheck(this, Search);

        var _this = babelHelpers.possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.userPressed = function () {
            if (_this.state.titleChecked) {
                _this.setState({ titleChecked: false });
                _this.setState({ userChecked: true });
            } else {
                _this.setState({ titleChecked: true });
                _this.setState({ userChecked: false });
            }
        };

        _this.titlePressed = function () {
            if (_this.state.userChecked) {
                _this.setState({ userChecked: false });
                _this.setState({ titleChecked: true });
            } else {
                _this.setState({ userChecked: true });
                _this.setState({ titleChecked: false });
            }
        };

        var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
                return r1 !== r2;
            } });
        _this.state = {
            userChecked: false,
            titleChecked: true,
            recordType: false,
            searchParameter: "",
            dataSource: ds.cloneWithRows([['Item1', 'Item2'], ['Item1', 'Item2'], ['Item1', 'Item2']])
        };
        return _this;
    }

    babelHelpers.createClass(Search, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container },
                _react2.default.createElement(_reactNative.View, { style: styles.empty }),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.formContainer },
                    _react2.default.createElement(_reactNative.TextInput, { style: styles.input,
                        onChangeText: function onChangeText(text) {
                            return _this2.setState({ searchParameter: text });
                        },
                        placeholder: 'Search Content',
                        placeholderTextColor: 'rgba(255,255,255,0.7)'

                    }),
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        {
                            onPress: function onPress() {
                                return _this2.onSearch();
                            },
                            style: styles.buttonsContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { style: styles.button },
                            'Search'
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.checkboxContainer },
                    _react2.default.createElement(_reactNativeCheckbox2.default, {
                        label: 'Users',
                        checked: this.state.userChecked,
                        onChange: function onChange(checked) {
                            return _this2.userPressed();
                        }
                    }),
                    _react2.default.createElement(_reactNativeCheckbox2.default, {
                        label: 'Events',
                        checked: this.state.titleChecked,
                        onChange: function onChange(checked) {
                            return _this2.titlePressed();
                        }
                    })
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.titleContainer },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.title },
                        'Results:'
                    )
                ),
                _react2.default.createElement(_reactNative.ListView, {
                    dataSource: this.state.dataSource,
                    renderRow: this.renderRow.bind(this)
                })
            );
        }
    }, {
        key: 'pressCell',
        value: function pressCell(dataRow) {
            _reactNative.AlertIOS.alert(dataRow[1]);
        }
    }, {
        key: 'renderRow',
        value: function renderRow(dataRow) {
            var _this3 = this;

            return _react2.default.createElement(
                _reactNative.View,
                null,
                _react2.default.createElement(
                    _reactNative.TouchableOpacity,
                    {
                        onPress: function onPress() {
                            return _this3.pressCell(dataRow);
                        },
                        style: styles.buttonsContainer },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.button },
                        dataRow[0]
                    )
                )
            );
        }
    }]);
    return Search;
}(_react.Component);

exports.default = Search;


var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db'
    }, empty: {
        height: 100
    },
    title: {
        color: '#FFF',
        fontSize: 15
    },
    titleContainer: {
        alignItems: 'flex-start'
    },
    resultsContainer: {
        padding: 20
    },
    buttonsContainer: {
        backgroundColor: '#2980b9',
        width: 200,
        height: 60,
        margin: 10,
        alignSelf: 'stretch'
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

module.exports = Search;