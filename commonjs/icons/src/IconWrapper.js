"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIs = _interopRequireDefault(require("react-is"));

var _uiBox = _interopRequireDefault(require("ui-box"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * This is an internal helper component for rendering custom or Evergreen icons
 * Box props are applied to the outer Box container, and Evergreen icon-specific props are added to the icon element.
 */
var IconWrapper = (0, _react.memo)((0, _react.forwardRef)(function Icon(_ref, ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      title = _ref.title,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["icon", "color", "size", "title"]);

  if (!icon || typeof icon === 'string') {
    return null;
  }

  var iconProps = {
    color: color,
    size: size,
    title: title
  };
  var iconWithProps = null;

  if (_reactIs["default"].isValidElementType(icon)) {
    var Component = icon;
    iconWithProps = _react["default"].createElement(Component, (0, _extends2["default"])({
      ref: ref
    }, iconProps));
  } else if (_react["default"].isValidElement(icon)) {
    iconWithProps = _react["default"].cloneElement(icon, _objectSpread(_objectSpread(_objectSpread({}, iconProps), icon.props), {}, {
      ref: ref
    }));
  }

  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    display: "inline-flex"
  }, props), iconWithProps);
}));
exports.IconWrapper = IconWrapper;
IconWrapper.propTypes = {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: _propTypes["default"].string,

  /**
   * The icon component - whether an Evergreen icon or a custom icon node:
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given a `JSX.Element`, that element will be rendered, with size/color/title props cloned into it
   * - If given a React element type, it will be rendered with the other icon props
   *   As a consumer, you should never use `<IconWrapper icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),

  /**
   * Size of the icon, in pixels.
   * Icons contains 16px and 20px SVG icon paths,
   * and chooses the appropriate resolution based on this prop.
   */
  size: _propTypes["default"].number,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: _propTypes["default"].string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9zcmMvSWNvbldyYXBwZXIuanMiXSwibmFtZXMiOlsiSWNvbldyYXBwZXIiLCJJY29uIiwicmVmIiwiaWNvbiIsImNvbG9yIiwic2l6ZSIsInRpdGxlIiwicHJvcHMiLCJpY29uUHJvcHMiLCJpY29uV2l0aFByb3BzIiwiUmVhY3RJcyIsImlzVmFsaWRFbGVtZW50VHlwZSIsIkNvbXBvbmVudCIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJlbGVtZW50VHlwZSIsImVsZW1lbnQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBOzs7O0FBSU8sSUFBTUEsV0FBVyxHQUFHLGlCQUN6Qix1QkFBVyxTQUFTQyxJQUFULE9BQXNEQyxHQUF0RCxFQUEyRDtBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXhCQyxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxNQUFkQyxLQUFjOztBQUNwRSxNQUFJLENBQUNKLElBQUQsSUFBUyxPQUFPQSxJQUFQLEtBQWdCLFFBQTdCLEVBQXVDO0FBQ3JDLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1LLFNBQVMsR0FBRztBQUNoQkosSUFBQUEsS0FBSyxFQUFMQSxLQURnQjtBQUVoQkMsSUFBQUEsSUFBSSxFQUFKQSxJQUZnQjtBQUdoQkMsSUFBQUEsS0FBSyxFQUFMQTtBQUhnQixHQUFsQjtBQU1BLE1BQUlHLGFBQWEsR0FBRyxJQUFwQjs7QUFDQSxNQUFJQyxvQkFBUUMsa0JBQVIsQ0FBMkJSLElBQTNCLENBQUosRUFBc0M7QUFDcEMsUUFBTVMsU0FBUyxHQUFHVCxJQUFsQjtBQUNBTSxJQUFBQSxhQUFhLEdBQUcsZ0NBQUMsU0FBRDtBQUFXLE1BQUEsR0FBRyxFQUFFUDtBQUFoQixPQUF5Qk0sU0FBekIsRUFBaEI7QUFDRCxHQUhELE1BR08sSUFBSUssa0JBQU1DLGNBQU4sQ0FBcUJYLElBQXJCLENBQUosRUFBZ0M7QUFDckNNLElBQUFBLGFBQWEsR0FBR0ksa0JBQU1FLFlBQU4sQ0FBbUJaLElBQW5CLGdEQUNYSyxTQURXLEdBRVhMLElBQUksQ0FBQ0ksS0FGTTtBQUdkTCxNQUFBQSxHQUFHLEVBQUhBO0FBSGMsT0FBaEI7QUFLRDs7QUFFRCxTQUNFLGdDQUFDLGlCQUFEO0FBQUssSUFBQSxPQUFPLEVBQUM7QUFBYixLQUErQkssS0FBL0IsR0FDR0UsYUFESCxDQURGO0FBS0QsQ0E1QkQsQ0FEeUIsQ0FBcEI7O0FBZ0NQVCxXQUFXLENBQUNnQixTQUFaLEdBQXdCO0FBQ3RCOzs7QUFHQVosRUFBQUEsS0FBSyxFQUFFYSxzQkFBVUMsTUFKSzs7QUFNdEI7Ozs7Ozs7O0FBUUFmLEVBQUFBLElBQUksRUFBRWMsc0JBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0Ysc0JBQVVHLFdBQVgsRUFBd0JILHNCQUFVSSxPQUFsQyxDQUFwQixDQWRnQjs7QUFnQnRCOzs7OztBQUtBaEIsRUFBQUEsSUFBSSxFQUFFWSxzQkFBVUssTUFyQk07O0FBdUJ0Qjs7Ozs7O0FBTUFoQixFQUFBQSxLQUFLLEVBQUVXLHNCQUFVQztBQTdCSyxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3RJcyBmcm9tICdyZWFjdC1pcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG4vKipcbiAqIFRoaXMgaXMgYW4gaW50ZXJuYWwgaGVscGVyIGNvbXBvbmVudCBmb3IgcmVuZGVyaW5nIGN1c3RvbSBvciBFdmVyZ3JlZW4gaWNvbnNcbiAqIEJveCBwcm9wcyBhcmUgYXBwbGllZCB0byB0aGUgb3V0ZXIgQm94IGNvbnRhaW5lciwgYW5kIEV2ZXJncmVlbiBpY29uLXNwZWNpZmljIHByb3BzIGFyZSBhZGRlZCB0byB0aGUgaWNvbiBlbGVtZW50LlxuICovXG5leHBvcnQgY29uc3QgSWNvbldyYXBwZXIgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEljb24oeyBpY29uLCBjb2xvciwgc2l6ZSwgdGl0bGUsIC4uLnByb3BzIH0sIHJlZikge1xuICAgIGlmICghaWNvbiB8fCB0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgaWNvblByb3BzID0ge1xuICAgICAgY29sb3IsXG4gICAgICBzaXplLFxuICAgICAgdGl0bGVcbiAgICB9XG5cbiAgICBsZXQgaWNvbldpdGhQcm9wcyA9IG51bGxcbiAgICBpZiAoUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUoaWNvbikpIHtcbiAgICAgIGNvbnN0IENvbXBvbmVudCA9IGljb25cbiAgICAgIGljb25XaXRoUHJvcHMgPSA8Q29tcG9uZW50IHJlZj17cmVmfSB7Li4uaWNvblByb3BzfSAvPlxuICAgIH0gZWxzZSBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoaWNvbikpIHtcbiAgICAgIGljb25XaXRoUHJvcHMgPSBSZWFjdC5jbG9uZUVsZW1lbnQoaWNvbiwge1xuICAgICAgICAuLi5pY29uUHJvcHMsXG4gICAgICAgIC4uLmljb24ucHJvcHMsXG4gICAgICAgIHJlZlxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIiB7Li4ucHJvcHN9PlxuICAgICAgICB7aWNvbldpdGhQcm9wc31cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuSWNvbldyYXBwZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29sb3Igb2YgaWNvbi4gRXF1aXZhbGVudCB0byBzZXR0aW5nIENTUyBgZmlsbGAgcHJvcGVydHkuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGljb24gY29tcG9uZW50IC0gd2hldGhlciBhbiBFdmVyZ3JlZW4gaWNvbiBvciBhIGN1c3RvbSBpY29uIG5vZGU6XG4gICAqXG4gICAqIC0gSWYgYG51bGxgIG9yIGB1bmRlZmluZWRgIG9yIGBmYWxzZWAsIHRoaXMgY29tcG9uZW50IHdpbGwgcmVuZGVyIG5vdGhpbmcuXG4gICAqIC0gSWYgZ2l2ZW4gYSBgSlNYLkVsZW1lbnRgLCB0aGF0IGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZCwgd2l0aCBzaXplL2NvbG9yL3RpdGxlIHByb3BzIGNsb25lZCBpbnRvIGl0XG4gICAqIC0gSWYgZ2l2ZW4gYSBSZWFjdCBlbGVtZW50IHR5cGUsIGl0IHdpbGwgYmUgcmVuZGVyZWQgd2l0aCB0aGUgb3RoZXIgaWNvbiBwcm9wc1xuICAgKiAgIEFzIGEgY29uc3VtZXIsIHlvdSBzaG91bGQgbmV2ZXIgdXNlIGA8SWNvbldyYXBwZXIgaWNvbj17PGVsZW1lbnQgLz59YCBkaXJlY3RseTsgc2ltcGx5IHJlbmRlciBgPGVsZW1lbnQgLz5gIGluc3RlYWQuXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudFR5cGUsIFByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIFNpemUgb2YgdGhlIGljb24sIGluIHBpeGVscy5cbiAgICogSWNvbnMgY29udGFpbnMgMTZweCBhbmQgMjBweCBTVkcgaWNvbiBwYXRocyxcbiAgICogYW5kIGNob29zZXMgdGhlIGFwcHJvcHJpYXRlIHJlc29sdXRpb24gYmFzZWQgb24gdGhpcyBwcm9wLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gc3RyaW5nLlxuICAgKiBCcm93c2VycyB1c3VhbGx5IHJlbmRlciB0aGlzIGFzIGEgdG9vbHRpcCBvbiBob3Zlciwgd2hlcmVhcyBzY3JlZW5cbiAgICogcmVhZGVycyB3aWxsIHVzZSBpdCBmb3IgYXVyYWwgZmVlZGJhY2suXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgaXMgc2V0IHRvIHRoZSBpY29uJ3MgbmFtZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICovXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59XG4iXX0=