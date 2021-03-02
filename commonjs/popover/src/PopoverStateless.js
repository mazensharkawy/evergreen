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

var _layers = require("../../layers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PopoverStateless = (0, _react.memo)((0, _react.forwardRef)(function PopoverStateless(props, ref) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2["default"])(props, ["children"]);
  return _react["default"].createElement(_layers.Card, (0, _extends2["default"])({
    role: "dialog",
    elevation: 3,
    overflow: "hidden",
    minWidth: 200,
    borderRadius: 10,
    backgroundColor: "white",
    ref: ref
  }, rest), children);
}));
PopoverStateless.propTypes = _objectSpread(_objectSpread({}, _layers.Card.propTypes), {}, {
  /**
   * The content of the Popover.
   */
  children: _propTypes["default"].node
});
var _default = PopoverStateless;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlBvcG92ZXJTdGF0ZWxlc3MiLCJwcm9wcyIsInJlZiIsImNoaWxkcmVuIiwicmVzdCIsInByb3BUeXBlcyIsIkNhcmQiLCJQcm9wVHlwZXMiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxpQkFDdkIsdUJBQVcsU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUFBLE1BQ3ZDQyxRQUR1QyxHQUNqQkYsS0FEaUIsQ0FDdkNFLFFBRHVDO0FBQUEsTUFDMUJDLElBRDBCLDZDQUNqQkgsS0FEaUI7QUFHL0MsU0FDRSxnQ0FBQyxZQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLElBQUEsU0FBUyxFQUFFLENBRmI7QUFHRSxJQUFBLFFBQVEsRUFBQyxRQUhYO0FBSUUsSUFBQSxRQUFRLEVBQUUsR0FKWjtBQUtFLElBQUEsWUFBWSxFQUFFLEVBTGhCO0FBTUUsSUFBQSxlQUFlLEVBQUMsT0FObEI7QUFPRSxJQUFBLEdBQUcsRUFBRUM7QUFQUCxLQVFNRSxJQVJOLEdBVUdELFFBVkgsQ0FERjtBQWNELENBakJELENBRHVCLENBQXpCO0FBcUJBSCxnQkFBZ0IsQ0FBQ0ssU0FBakIsbUNBSUtDLGFBQUtELFNBSlY7QUFNRTs7O0FBR0FGLEVBQUFBLFFBQVEsRUFBRUksc0JBQVVDO0FBVHRCO2VBWWVSLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5cbmNvbnN0IFBvcG92ZXJTdGF0ZWxlc3MgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFBvcG92ZXJTdGF0ZWxlc3MocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgIGVsZXZhdGlvbj17M31cbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICBtaW5XaWR0aD17MjAwfVxuICAgICAgICBib3JkZXJSYWRpdXM9ezEwfVxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DYXJkPlxuICAgIClcbiAgfSlcbilcblxuUG9wb3ZlclN0YXRlbGVzcy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgQ2FyZCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkNhcmQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyU3RhdGVsZXNzXG4iXX0=