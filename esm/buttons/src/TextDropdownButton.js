import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { dimensions, spacing, position, layout } from 'ui-box';
import { IconWrapper } from '../../icons/src/IconWrapper';
import { CaretDownIcon } from '../../icons';
import { Text } from '../../typography';
import { Spinner } from '../../spinner';
import { useTheme } from '../../theme';
var styles = {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
};
var TextDropdownButton = memo(forwardRef(function TextDropdownButton(props, ref) {
  var theme = useTheme();

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
      icon = _props$icon === void 0 ? CaretDownIcon : _props$icon,
      restProps = _objectWithoutProperties(props, ["className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "icon"]);

  var themedClassName = cx(theme.getTextDropdownButtonClassName(), className);
  return React.createElement(Text, _extends({
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
  }), isLoading && React.createElement(Spinner, {
    marginLeft: -Math.round(height / 8),
    marginRight: Math.round(height / 4),
    size: Math.round(height / 2)
  }), children, React.createElement(IconWrapper, {
    icon: icon,
    marginLeft: 2,
    color: "default",
    size: 12
  }));
}));
TextDropdownButton.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: PropTypes.bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: PropTypes.bool,

  /**
   * An Evergreen icon or custom icon node. By default it uses CaretDownIcon
   */
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
});
export default TextDropdownButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9UZXh0RHJvcGRvd25CdXR0b24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtZW1vIiwiZm9yd2FyZFJlZiIsIlByb3BUeXBlcyIsImN4IiwiZGltZW5zaW9ucyIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsIkljb25XcmFwcGVyIiwiQ2FyZXREb3duSWNvbiIsIlRleHQiLCJTcGlubmVyIiwidXNlVGhlbWUiLCJzdHlsZXMiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFdyYXAiLCJUZXh0RHJvcGRvd25CdXR0b24iLCJwcm9wcyIsInJlZiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaW50ZW50IiwiaGVpZ2h0IiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsImRpc2FibGVkIiwiYXBwZWFyYW5jZSIsImlzTG9hZGluZyIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpY29uIiwicmVzdFByb3BzIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0VGV4dERyb3Bkb3duQnV0dG9uQ2xhc3NOYW1lIiwiTWF0aCIsInJvdW5kIiwicHJvcFR5cGVzIiwiYm9vbCIsIm9uZU9mVHlwZSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxJQUFoQixFQUFzQkMsVUFBdEIsUUFBd0MsT0FBeEM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxVQUFULEVBQXFCQyxPQUFyQixFQUE4QkMsUUFBOUIsRUFBd0NDLE1BQXhDLFFBQXNELFFBQXREO0FBQ0EsU0FBU0MsV0FBVCxRQUE0Qiw2QkFBNUI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGFBQTlCO0FBQ0EsU0FBU0Ms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LElBQUEsSUFBSSxFQUFFO0FBQTlELElBdEJGLENBREY7QUEwQkQsQ0FwRFMsQ0FEbUIsQ0FBL0I7QUF3REFoQixrQkFBa0IsQ0FBQ3NCLFNBQW5CLDZFQUlLckMsVUFBVSxDQUFDcUMsU0FKaEIsR0FTS3BDLE9BQU8sQ0FBQ29DLFNBVGIsR0FjS25DLFFBQVEsQ0FBQ21DLFNBZGQsR0FtQktsQyxNQUFNLENBQUNrQyxTQW5CWjtBQXFCRTs7OztBQUlBZixFQUFBQSxRQUFRLEVBQUV4QixTQUFTLENBQUN3QyxJQXpCdEI7O0FBMkJFOzs7O0FBSUFkLEVBQUFBLFFBQVEsRUFBRTFCLFNBQVMsQ0FBQ3dDLElBL0J0Qjs7QUFpQ0U7OztBQUdBUCxFQUFBQSxJQUFJLEVBQUVqQyxTQUFTLENBQUN5QyxTQUFWLENBQW9CLENBQUN6QyxTQUFTLENBQUMwQyxXQUFYLEVBQXdCMUMsU0FBUyxDQUFDMkMsT0FBbEMsQ0FBcEIsQ0FwQ1I7O0FBc0NFOzs7O0FBSUF0QixFQUFBQSxTQUFTLEVBQUVyQixTQUFTLENBQUM0QztBQTFDdkI7QUE2Q0EsZUFBZTNCLGtCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEljb25XcmFwcGVyIH0gZnJvbSAnLi4vLi4vaWNvbnMvc3JjL0ljb25XcmFwcGVyJ1xuaW1wb3J0IHsgQ2FyZXREb3duSWNvbiB9IGZyb20gJy4uLy4uL2ljb25zJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vLi4vc3Bpbm5lcidcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIGZvbnRGYW1pbHk6ICd1aScsXG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGZsZXhXcmFwOiAnbm93cmFwJ1xufVxuXG5jb25zdCBUZXh0RHJvcGRvd25CdXR0b24gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHREcm9wZG93bkJ1dHRvbihwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaW50ZW50LFxuICAgICAgaGVpZ2h0LFxuICAgICAgaXNBY3RpdmUgPSBmYWxzZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNMb2FkaW5nLFxuXG4gICAgICBwYWRkaW5nUmlnaHQsXG4gICAgICBwYWRkaW5nTGVmdCxcbiAgICAgIHBhZGRpbmdUb3AsXG4gICAgICBwYWRkaW5nQm90dG9tLFxuXG4gICAgICBpY29uID0gQ2FyZXREb3duSWNvbixcbiAgICAgIC4uLnJlc3RQcm9wc1xuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gY3goXG4gICAgICB0aGVtZS5nZXRUZXh0RHJvcGRvd25CdXR0b25DbGFzc05hbWUoKSxcbiAgICAgIGNsYXNzTmFtZVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImJ1dHRvblwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgcGFkZGluZ1g9ezR9XG4gICAgICAgIG1hcmdpblg9ey00fVxuICAgICAgICBwYWRkaW5nWT17Mn1cbiAgICAgICAgbWFyZ2luWT17LTJ9XG4gICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICB7Li4uc3R5bGVzfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxTcGlubmVyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXstTWF0aC5yb3VuZChoZWlnaHQgLyA4KX1cbiAgICAgICAgICAgIG1hcmdpblJpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDQpfVxuICAgICAgICAgICAgc2l6ZT17TWF0aC5yb3VuZChoZWlnaHQgLyAyKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxJY29uV3JhcHBlciBpY29uPXtpY29ufSBtYXJnaW5MZWZ0PXsyfSBjb2xvcj1cImRlZmF1bHRcIiBzaXplPXsxMn0gLz5cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH0pXG4pXG5cblRleHREcm9wZG93bkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5kaW1lbnNpb25zLnByb3BUeXBlcyxcblxuICAvKipcbiAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBwb3NpdGlvbiBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAqL1xuICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgLyoqXG4gICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgKi9cbiAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAvKipcbiAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICogVXNlZnVsIGluIGNvbmp1Y3Rpb24gd2l0aCBhIFBvcG92ZXIuXG4gICAqL1xuICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICogaXNMb2FkaW5nIGFsc28gc2V0cyB0aGUgYnV0dG9uIHRvIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbiBFdmVyZ3JlZW4gaWNvbiBvciBjdXN0b20gaWNvbiBub2RlLiBCeSBkZWZhdWx0IGl0IHVzZXMgQ2FyZXREb3duSWNvblxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgYnV0dG9uLlxuICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dERyb3Bkb3duQnV0dG9uXG4iXX0=