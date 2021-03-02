"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _uiBox = require("ui-box");

var _IconWrapper = require("../../icons/src/IconWrapper");

var _icons = require("../../icons");

var _typography = require("../../typography");

var _spinner = require("../../spinner");

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var styles = {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
};
var TextDropdownButton = (0, _react.memo)((0, _react.forwardRef)(function TextDropdownButton(props, ref) {
  var theme = (0, _theme.useTheme)();
  var className = props.className,
      intent = props.intent,
      height = props.height,
      _props$isActive = props.isActive,
      isActive = _props$isActive === void 0 ? false : _props$isActive,
      children = props.children,
      disabled = props.disabled,
      appearance = props.appearance,
      isLoading = props.isLoading,
      paddingRight = props.paddingRight,
      paddingLeft = props.paddingLeft,
      paddingTop = props.paddingTop,
      paddingBottom = props.paddingBottom,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? _icons.CaretDownIcon : _props$icon,
      restProps = (0, _objectWithoutProperties2["default"])(props, ["className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "icon"]);
  var themedClassName = (0, _classnames["default"])(theme.getTextDropdownButtonClassName(), className);
  return _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
    is: "button",
    ref: ref,
    className: themedClassName,
    paddingX: 4,
    marginX: -4,
    paddingY: 2,
    marginY: -2,
    size: 300,
    "data-active": isActive
  }, styles, restProps, {
    disabled: disabled
  }), isLoading && _react["default"].createElement(_spinner.Spinner, {
    marginLeft: -Math.round(height / 8),
    marginRight: Math.round(height / 4),
    size: Math.round(height / 2)
  }), children, _react["default"].createElement(_IconWrapper.IconWrapper, {
    icon: icon,
    marginLeft: 2,
    color: "default",
    size: 12
  }));
}));
TextDropdownButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: _propTypes["default"].bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * An Evergreen icon or custom icon node. By default it uses CaretDownIcon
   */
  icon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
});
var _default = TextDropdownButton;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9UZXh0RHJvcGRvd25CdXR0b24uanMiXSwibmFtZXMiOlsic3R5bGVzIiwicG9zaXRpb24iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJUZXh0RHJvcGRvd25CdXR0b24iLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaW50ZW50IiwiaGVpZ2h0IiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsImRpc2FibGVkIiwiYXBwZWFyYW5jZSIsImlzTG9hZGluZyIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpY29uIiwiQ2FyZXREb3duSWNvbiIsInJlc3RQcm9wcyIsInRoZW1lZENsYXNzTmFtZSIsImdldFRleHREcm9wZG93bkJ1dHRvbkNsYXNzTmFtZSIsIk1hdGgiLCJyb3VuZCIsInByb3BUeXBlcyIsImRpbWVuc2lvbnMiLCJzcGFjaW5nIiwibGF5b3V0IiwiUHJvcFR5cGVzIiwiYm9vbCIsIm9uZU9mVHlwZSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLFFBQVEsRUFBRSxVQURHO0FBRWJDLEVBQUFBLFVBQVUsRUFBRSxJQUZDO0FBR2JDLEVBQUFBLFVBQVUsRUFBRSxHQUhDO0FBSWJDLEVBQUFBLE9BQU8sRUFBRSxhQUpJO0FBS2JDLEVBQUFBLFVBQVUsRUFBRSxRQUxDO0FBTWJDLEVBQUFBLFFBQVEsRUFBRTtBQU5HLENBQWY7QUFTQSxJQUFNQyxrQkFBa0IsR0FBRyxpQkFDekIsdUJBQVcsU0FBU0Esa0JBQVQsQ0FBNEJDLEtBQTVCLEVB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LENBQXBCLENBcENSOztBQXNDRTs7OztBQUlBM0IsRUFBQUEsU0FBUyxFQUFFdUIsc0JBQVVLO0FBMUN2QjtlQTZDZWhDLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEljb25XcmFwcGVyIH0gZnJvbSAnLi4vLi4vaWNvbnMvc3JjL0ljb25XcmFwcGVyJ1xuaW1wb3J0IHsgQ2FyZXREb3duSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vc3Bpbm5lcidcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGZvbnRGYW1pbHk6ICd1aScsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGZsZXhXcmFwOiAnbm93cmFwJ1xufVxuXG5jb25zdCBUZXh0RHJvcGRvd25CdXR0b24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHREcm9wZG93bkJ1dHRvbihwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaW50ZW50LFxuICAgICAgaGVpZ2h0LFxuICAgICAgaXNBY3RpdmUgPSBmYWxzZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNMb2FkaW5nLFxuXG4gICAgICBwYWRkaW5nUmlnaHQsXG4gICAgICBwYWRkaW5nTGVmdCxcbiAgICAgIHBhZGRpbmdUb3AsXG4gICAgICBwYWRkaW5nQm90dG9tLFxuXG4gICAgICBpY29uID0gQ2FyZXREb3duSWNvbixcbiAgICAgIC4uLnJlc3RQcm9wc1xuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gY3goXG4gICAgICB0aGVtZS5nZXRUZXh0RHJvcGRvd25CdXR0b25DbGFzc05hbWUoKSxcbiAgICAgIGNsYXNzTmFtZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImJ1dHRvblwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgcGFkZGluZ1g9ezR9XG4gICAgICAgIG1hcmdpblg9ey00fVxuICAgICAgICBwYWRkaW5nWT17Mn1cbiAgICAgICAgbWFyZ2luWT17LTJ9XG4gICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICB7Li4uc3R5bGVzfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmVyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXstTWF0aC5yb3VuZChoZWlnaHQgLyA4KX1cbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDQpfVxuICAgICAgICAgICAgc2l6ZT17TWF0aC5yb3VuZChoZWlnaHQgLyAyKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxJY29uV3JhcHBlciBpY29uPXtpY29ufSBtYXJnaW5MZWZ0PXsyfSBjb2xvcj1cImRlZmF1bHRcIiBzaXplPXsxMn0gLz5cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH0pXG4pXG5cblRleHREcm9wZG93bkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICogVXNlZnVsIGluIGNvbmp1Y3Rpb24gd2l0aCBhIFBvcG92ZXIuXG4gICAqL1xuICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICogaXNMb2FkaW5nIGFsc28gc2V0cyB0aGUgYnV0dG9uIHRvIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbiBFdmVyZ3JlZW4gaWNvbiBvciBjdXN0b20gaWNvbiBub2RlLiBCeSBkZWZhdWx0IGl0IHVzZXMgQ2FyZXREb3duSWNvblxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dERyb3Bkb3duQnV0dG9uXG4iXX0=