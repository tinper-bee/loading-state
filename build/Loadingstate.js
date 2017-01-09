'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeLoading = require('bee-loading');

var _beeLoading2 = _interopRequireDefault(_beeLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
	/**
  * @title loading时间
  */
	loadingTime: _react.PropTypes.number,
	/**
  * @title loading时的文字
  */
	loadingText: _react.PropTypes.string,
	/**
  * @title 
  */
	children: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node])

};

var defaultProps = {
	loadingTime: '300'

};

var Loadingstate = function (_Component) {
	_inherits(Loadingstate, _Component);

	function Loadingstate(props) {
		_classCallCheck(this, Loadingstate);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.state = {
			clickFlag: false,
			loadingText: _this.props.children
		};
		return _this;
	}
	/**
  * 手动触发修改状态
  */


	Loadingstate.prototype.handleClick = function handleClick() {
		this.setState({ clickFlag: true, loadingText: this.props.loadingText });
		/**
   * 设置定时器 根据参数时间 设定定时时间 而去改变状态
   */
		this.timer = setTimeout(function () {
			this.setState({ clickFlag: false, loadingText: this.props.children });
		}.bind(this), this.props.loadingTime);
	};
	// 组件移除


	Loadingstate.prototype.componentWillUnmount = function componentWillUnmount() {

		clearInterval(this.timer);
	};

	Loadingstate.prototype.render = function render() {
		var _props = this.props,
		    loadingTime = _props.loadingTime,
		    loadingText = _props.loadingText,
		    children = _props.children,
		    others = _objectWithoutProperties(_props, ['loadingTime', 'loadingText', 'children']);

		console.log(typeof loadingText === 'undefined' ? 'undefined' : _typeof(loadingText));

		var loadingTextTypeString = typeof loadingText === 'string';

		return _react2["default"].createElement(
			'span',
			null,
			loadingTextTypeString && loadingText && _react2["default"].createElement(
				_beeButton2["default"],
				_extends({
					className: 'ladda-button',
					disabled: this.state.clickFlag,
					onClick: this.handleClick.bind(this)
				}, others),
				_react2["default"].createElement(
					'span',
					{ className: 'ladda-label' },
					children
				),
				_react2["default"].createElement(
					'span',
					{ className: 'ladda-text' },
					' ',
					loadingText,
					' '
				)
			),
			!loadingText && _react2["default"].createElement(
				_beeButton2["default"],
				_extends({
					className: 'ladda-button',
					disabled: this.state.clickFlag,
					onClick: this.handleClick.bind(this)
				}, others),
				_react2["default"].createElement(
					'span',
					{ className: 'ladda-label' },
					children
				),
				_react2["default"].createElement(
					'span',
					{ className: 'ladda-spinner' },
					_react2["default"].createElement(_beeLoading2["default"], null)
				)
			)
		);
	};

	return Loadingstate;
}(_react.Component);

Loadingstate.propTypes = propTypes;
Loadingstate.defaultProps = defaultProps;

exports["default"] = Loadingstate;
module.exports = exports['default'];