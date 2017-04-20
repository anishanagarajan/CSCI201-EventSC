'use strict';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var PropTypes = _react2.default.PropTypes;

var CB_ENABLED_IMAGE = require('./cb_enabled.png');
var CB_DISABLED_IMAGE = require('./cb_disabled.png');

var CheckBox = function (_Component) {
    babelHelpers.inherits(CheckBox, _Component);

    function CheckBox(props) {
        babelHelpers.classCallCheck(this, CheckBox);

        var _this = babelHelpers.possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

        _this.state = {
            internalChecked: false
        };

        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    babelHelpers.createClass(CheckBox, [{
        key: 'onChange',
        value: function onChange() {
            if (this.props.onChange && typeof this.props.checked === 'boolean') {
                this.props.onChange(this.props.checked);
            } else {
                var internalChecked = this.state.internalChecked;

                if (this.props.onChange) {
                    this.props.onChange(internalChecked);
                }
                this.setState({
                    internalChecked: !internalChecked
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var container = _react2.default.createElement(
                _reactNative.View,
                { style: this.props.containerStyle || styles.container },
                _react2.default.createElement(_reactNative.Image, {
                    style: this.props.checkboxStyle || styles.checkbox,
                    source: source }),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.labelContainer },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: [styles.label, this.props.labelStyle] },
                        this.props.label
                    )
                )
            );

            var source = void 0;

            if (typeof this.props.checked === 'boolean') {
                source = this.props.checked ? this.props.checkedImage : this.props.uncheckedImage;
            } else {
                source = this.state.internalChecked ? this.props.checkedImage : this.props.uncheckedImage;
            }

            if (this.props.labelBefore) {
                container = _react2.default.createElement(
                    _reactNative.View,
                    { style: this.props.containerStyle || [styles.container, styles.flexContainer] },
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.labelContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { numberOfLines: this.props.labelLines, style: [styles.label, this.props.labelStyle] },
                            this.props.label
                        )
                    ),
                    _react2.default.createElement(_reactNative.Image, {
                        style: [styles.checkbox, this.props.checkboxStyle],
                        source: source })
                );
            } else {
                container = _react2.default.createElement(
                    _reactNative.View,
                    { style: [styles.container, this.props.containerStyle] },
                    _react2.default.createElement(_reactNative.Image, {
                        style: [styles.checkbox, this.props.checkboxStyle],
                        source: source }),
                    _react2.default.createElement(
                        _reactNative.View,
                        { style: styles.labelContainer },
                        _react2.default.createElement(
                            _reactNative.Text,
                            { numberOfLines: this.props.labelLines, style: [styles.label, this.props.labelStyle] },
                            this.props.label
                        )
                    )
                );
            }

            return _react2.default.createElement(
                _reactNative.TouchableHighlight,
                { onPress: this.onChange, underlayColor: this.props.underlayColor, style: styles.flexContainer },
                container
            );
        }
    }]);
    return CheckBox;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    checkbox: {
        width: 26,
        height: 26
    },
    labelContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    label: {
        fontSize: 15,
        color: 'grey'
    }
});

CheckBox.propTypes = {
    label: PropTypes.string,
    labelBefore: PropTypes.bool,
    labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    labelLines: PropTypes.number,
    checkboxStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    checked: PropTypes.bool,
    checkedImage: PropTypes.number,
    uncheckedImage: PropTypes.number,
    underlayColor: PropTypes.string,
    onChange: PropTypes.func
};

CheckBox.defaultProps = {
    label: 'Label',
    labelLines: 1,
    labelBefore: false,
    checked: null,
    checkedImage: CB_ENABLED_IMAGE,
    uncheckedImage: CB_DISABLED_IMAGE,
    underlayColor: 'white'
};

module.exports = CheckBox;