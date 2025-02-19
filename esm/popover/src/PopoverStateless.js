import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../layers';
var PopoverStateless = memo(forwardRef(function PopoverStateless(props, ref) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(Card, _extends({
    role: "dialog",
    elevation: 3,
    overflow: "hidden",
    minWidth: 200,
    borderRadius: 10,
    backgroundColor: "white",
    ref: ref
  }, rest), children);
}));
PopoverStateless.propTypes = _objectSpread(_objectSpread({}, Card.propTypes), {}, {
  /**
   * The content of the Popover.
   */
  children: PropTypes.node
});
export default PopoverStateless;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL3NyYy9Qb3BvdmVyU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJQcm9wVHlwZXMiLCJDYXJkIiwiUG9wb3ZlclN0YXRlbGVzcyIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJyZXN0IiwicHJvcFR5cGVzIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUVBLElBQU1DLGdCQUFnQixHQUFHSixJQUFJLENBQzNCQyxVQUFVLENBQUMsU0FBU0csZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUFBLE1BQ3ZDQyxRQUR1QyxHQUNqQkYsS0FEaUIsQ0FDdkNFLFFBRHVDO0FBQUEsTUFDMUJDLElBRDBCLDRCQUNqQkgsS0FEaUI7O0FBRy9DLFNBQ0Usb0JBQUMsSUFBRDtBQUNFLElBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxJQUFBLFNBQVMsRUFBRSxDQUZiO0FBR0UsSUFBQSxRQUFRLEVBQUMsUUFIWDtBQUlFLElBQUEsUUFBUSxFQUFFLEdBSlo7QUFLRSxJQUFBLFlBQVksRUFBRSxFQUxoQjtBQU1FLElBQUEsZUFBZSxFQUFDLE9BTmxCO0FBT0UsSUFBQSxHQUFHLEVBQUVDO0FBUFAsS0FRTUUsSUFSTixHQVVHRCxRQVZILENBREY7QUFjRCxDQWpCUyxDQURpQixDQUE3QjtBQXFCQUgsZ0JBQWdCLENBQUNLLFNBQWpCLG1DQUlLTixJQUFJLENBQUNNLFNBSlY7QUFNRTs7O0FBR0FGLEVBQUFBLFFBQVEsRUFBRUwsU0FBUyxDQUFDUTtBQVR0QjtBQVlBLGVBQWVOLGdCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5cbmNvbnN0IFBvcG92ZXJTdGF0ZWxlc3MgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFBvcG92ZXJTdGF0ZWxlc3MocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgIGVsZXZhdGlvbj17M31cbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICBtaW5XaWR0aD17MjAwfVxuICAgICAgICBib3JkZXJSYWRpdXM9ezEwfVxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DYXJkPlxuICAgIClcbiAgfSlcbilcblxuUG9wb3ZlclN0YXRlbGVzcy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgQ2FyZCBhcyB0aGUgYmFzZS5cbiAgICovXG4gIC4uLkNhcmQucHJvcFR5cGVzLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyU3RhdGVsZXNzXG4iXX0=