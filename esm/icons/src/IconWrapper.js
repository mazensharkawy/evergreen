import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import ReactIs from 'react-is';
import Box from 'ui-box';
/**
 * This is an internal helper component for rendering custom or Evergreen icons
 * Box props are applied to the outer Box container, and Evergreen icon-specific props are added to the icon element.
 */

export var IconWrapper = memo(forwardRef(function Icon(_ref, ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["icon", "color", "size", "title"]);

  if (!icon || typeof icon === 'string') {
    return null;
  }

  var iconProps = {
    color: color,
    size: size,
    title: title
  };
  var iconWithProps = null;

  if (ReactIs.isValidElementType(icon)) {
    var Component = icon;
    iconWithProps = React.createElement(Component, _extends({
      ref: ref
    }, iconProps));
  } else if (React.isValidElement(icon)) {
    iconWithProps = React.cloneElement(icon, _objectSpread(_objectSpread(_objectSpread({}, iconProps), icon.props), {}, {
      ref: ref
    }));
  }

  return React.createElement(Box, _extends({
    display: "inline-flex"
  }, props), iconWithProps);
}));
IconWrapper.propTypes = {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: PropTypes.string,

  /**
   * The icon component - whether an Evergreen icon or a custom icon node:
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given a `JSX.Element`, that element will be rendered, with size/color/title props cloned into it
   * - If given a React element type, it will be rendered with the other icon props
   *   As a consumer, you should never use `<IconWrapper icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Size of the icon, in pixels.
   * Icons contains 16px and 20px SVG icon paths,
   * and chooses the appropriate resolution based on this prop.
   */
  size: PropTypes.number,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: PropTypes.string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9zcmMvSWNvbldyYXBwZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwibWVtbyIsIlByb3BUeXBlcyIsIlJlYWN0SXMiLCJCb3giLCJJY29uV3JhcHBlciIsIkljb24iLCJyZWYiLCJpY29uIiwiY29sb3IiLCJzaXplIiwidGl0bGUiLCJwcm9wcyIsImljb25Qcm9wcyIsImljb25XaXRoUHJvcHMiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJDb21wb25lbnQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxVQUFoQixFQUE0QkMsSUFBNUIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixVQUFwQjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFFQTs7Ozs7QUFJQSxPQUFPLElBQU1DLFdBQVcsR0FBR0osSUFBSSxDQUM3QkQsVUFBVSxDQUFDLFNBQVNNLElBQVQsT0FBc0RDLEdBQXRELEVBQTJEO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxLQUFxQyxRQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkMsSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsTUFBeEJDLEtBQXdCLFFBQXhCQSxLQUF3QjtBQUFBLE1BQWRDLEtBQWM7O0FBQ3BFLE1BQUksQ0FBQ0osSUFBRCxJQUFTLE9BQU9BLElBQVAsS0FBZ0IsUUFBN0IsRUFBdUM7QUFDckMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTUssU0FBUyxHQUFHO0FBQ2hCSixJQUFBQSxLQUFLLEVBQUxBLEtBRGdCO0FBRWhCQyxJQUFBQSxJQUFJLEVBQUpBLElBRmdCO0FBR2hCQyxJQUFBQSxLQUFLLEVBQUxBO0FBSGdCLEdBQWxCO0FBTUEsTUFBSUcsYUFBYSxHQUFHLElBQXBCOztBQUNBLE1BQUlYLE9BQU8sQ0FBQ1ksa0JBQVIsQ0FBMkJQLElBQTNCLENBQUosRUFBc0M7QUFDcEMsUUFBTVEsU0FBUyxHQUFHUixJQUFsQjtBQUNBTSxJQUFBQSxhQUFhLEdBQUcsb0JBQUMsU0FBRDtBQUFXLE1BQUEsR0FBRyxFQUFFUDtBQUFoQixPQUF5Qk0sU0FBekIsRUFBaEI7QUFDRCxHQUhELE1BR08sSUFBSWQsS0FBSyxDQUFDa0IsY0FBTixDQUFxQlQsSUFBckIsQ0FBSixFQUFnQztBQUNyQ00sSUFBQUEsYUFBYSxHQUFHZixLQUFLLENBQUNtQixZQUFOLENBQW1CVixJQUFuQixnREFDWEssU0FEVyxHQUVYTCxJQUFJLENBQUNJLEtBRk07QUFHZEwsTUFBQUEsR0FBRyxFQUFIQTtBQUhjLE9BQWhCO0FBS0Q7O0FBRUQsU0FDRSxvQkFBQyxHQUFEO0FBQUssSUFBQSxPQUFPLEVBQUM7QUFBYixLQUErQkssS0FBL0IsR0FDR0UsYUFESCxDQURGO0FBS0QsQ0E1QlMsQ0FEbUIsQ0FBeEI7QUFnQ1BULFdBQVcsQ0FBQ2MsU0FBWixHQUF3QjtBQUN0Qjs7O0FBR0FWLEVBQUFBLEtBQUssRUFBRVAsU0FBUyxDQUFDa0IsTUFKSzs7QUFNdEI7Ozs7Ozs7O0FBUUFaLEVBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDbUIsU0FBVixDQUFvQixDQUFDbkIsU0FBUyxDQUFDb0IsV0FBWCxFQUF3QnBCLFNBQVMsQ0FBQ3FCLE9BQWxDLENBQXBCLENBZGdCOztBQWdCdEI7Ozs7O0FBS0FiLEVBQUFBLElBQUksRUFBRVIsU0FBUyxDQUFDc0IsTUFyQk07O0FBdUJ0Qjs7Ozs7O0FBTUFiLEVBQUFBLEtBQUssRUFBRVQsU0FBUyxDQUFDa0I7QUE3QkssQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0SXMgZnJvbSAncmVhY3QtaXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuLyoqXG4gKiBUaGlzIGlzIGFuIGludGVybmFsIGhlbHBlciBjb21wb25lbnQgZm9yIHJlbmRlcmluZyBjdXN0b20gb3IgRXZlcmdyZWVuIGljb25zXG4gKiBCb3ggcHJvcHMgYXJlIGFwcGxpZWQgdG8gdGhlIG91dGVyIEJveCBjb250YWluZXIsIGFuZCBFdmVyZ3JlZW4gaWNvbi1zcGVjaWZpYyBwcm9wcyBhcmUgYWRkZWQgdG8gdGhlIGljb24gZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IEljb25XcmFwcGVyID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBJY29uKHsgaWNvbiwgY29sb3IsIHNpemUsIHRpdGxlLCAuLi5wcm9wcyB9LCByZWYpIHtcbiAgICBpZiAoIWljb24gfHwgdHlwZW9mIGljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGljb25Qcm9wcyA9IHtcbiAgICAgIGNvbG9yLFxuICAgICAgc2l6ZSxcbiAgICAgIHRpdGxlXG4gICAgfVxuXG4gICAgbGV0IGljb25XaXRoUHJvcHMgPSBudWxsXG4gICAgaWYgKFJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKGljb24pKSB7XG4gICAgICBjb25zdCBDb21wb25lbnQgPSBpY29uXG4gICAgICBpY29uV2l0aFByb3BzID0gPENvbXBvbmVudCByZWY9e3JlZn0gey4uLmljb25Qcm9wc30gLz5cbiAgICB9IGVsc2UgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGljb24pKSB7XG4gICAgICBpY29uV2l0aFByb3BzID0gUmVhY3QuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgLi4uaWNvblByb3BzLFxuICAgICAgICAuLi5pY29uLnByb3BzLFxuICAgICAgICByZWZcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZGlzcGxheT1cImlubGluZS1mbGV4XCIgey4uLnByb3BzfT5cbiAgICAgICAge2ljb25XaXRoUHJvcHN9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cbkljb25XcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIENvbG9yIG9mIGljb24uIEVxdWl2YWxlbnQgdG8gc2V0dGluZyBDU1MgYGZpbGxgIHByb3BlcnR5LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIGNvbXBvbmVudCAtIHdoZXRoZXIgYW4gRXZlcmdyZWVuIGljb24gb3IgYSBjdXN0b20gaWNvbiBub2RlOlxuICAgKlxuICAgKiAtIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvciBgZmFsc2VgLCB0aGlzIGNvbXBvbmVudCB3aWxsIHJlbmRlciBub3RoaW5nLlxuICAgKiAtIElmIGdpdmVuIGEgYEpTWC5FbGVtZW50YCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQsIHdpdGggc2l6ZS9jb2xvci90aXRsZSBwcm9wcyBjbG9uZWQgaW50byBpdFxuICAgKiAtIElmIGdpdmVuIGEgUmVhY3QgZWxlbWVudCB0eXBlLCBpdCB3aWxsIGJlIHJlbmRlcmVkIHdpdGggdGhlIG90aGVyIGljb24gcHJvcHNcbiAgICogICBBcyBhIGNvbnN1bWVyLCB5b3Ugc2hvdWxkIG5ldmVyIHVzZSBgPEljb25XcmFwcGVyIGljb249ezxlbGVtZW50IC8+fWAgZGlyZWN0bHk7IHNpbXBseSByZW5kZXIgYDxlbGVtZW50IC8+YCBpbnN0ZWFkLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBpY29uLCBpbiBwaXhlbHMuXG4gICAqIEljb25zIGNvbnRhaW5zIDE2cHggYW5kIDIwcHggU1ZHIGljb24gcGF0aHMsXG4gICAqIGFuZCBjaG9vc2VzIHRoZSBhcHByb3ByaWF0ZSByZXNvbHV0aW9uIGJhc2VkIG9uIHRoaXMgcHJvcC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIHN0cmluZy5cbiAgICogQnJvd3NlcnMgdXN1YWxseSByZW5kZXIgdGhpcyBhcyBhIHRvb2x0aXAgb24gaG92ZXIsIHdoZXJlYXMgc2NyZWVuXG4gICAqIHJlYWRlcnMgd2lsbCB1c2UgaXQgZm9yIGF1cmFsIGZlZWRiYWNrLlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIGlzIHNldCB0byB0aGUgaWNvbidzIG5hbWUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAqL1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufVxuIl19