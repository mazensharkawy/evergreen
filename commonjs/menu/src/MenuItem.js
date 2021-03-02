"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _IconWrapper = require("../../icons/src/IconWrapper");

var _layers = require("../../layers");

var _typography = require("../../typography");

var _theme = require("../../theme");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var noop = function noop() {};

var MenuItem = (0, _react.memo)((0, _react.forwardRef)(function MenuItem(props, ref) {
  var _props$is = props.is,
      is = _props$is === void 0 ? 'div' : _props$is,
      children = props.children,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      secondaryText = props.secondaryText,
      _props$intent = props.intent,
      intent = _props$intent === void 0 ? 'none' : _props$intent,
      icon = props.icon,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noop : _props$onSelect,
      onKeyPress = props.onKeyPress,
      disabled = props.disabled,
      passthroughProps = (0, _objectWithoutProperties2["default"])(props, ["is", "children", "appearance", "secondaryText", "intent", "icon", "onSelect", "onKeyPress", "disabled"]);
  var theme = (0, _theme.useTheme)();
  var handleClick = (0, _react.useCallback)(function (event) {
    onSelect(event);
  }, [onSelect]);
  var handleKeyPress = (0, _react.useCallback)(function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      onSelect(event);
      event.preventDefault();
    }

    (0, _safeInvoke["default"])(onKeyPress, event);
  }, [onSelect, onKeyPress]);
  var themedClassName = theme.getMenuItemClassName(appearance, 'none');
  var iconColor = intent === 'none' ? 'default' : intent;

  if (disabled) {
    iconColor = 'disabled';
  }

  var textColor = disabled ? theme.colors.icon.disabled : intent;
  var secondaryTextColor = disabled ? textColor : 'muted';
  var disabledProps = (0, _react.useMemo)(function () {
    return disabled ? {
      backgroundColor: theme.colors.background.tint1,
      cursor: 'not-allowed',
      disabled: true,
      onClick: null,
      onKeyPress: null,
      tabIndex: -1,
      'aria-disabled': 'true',
      'data-isselectable': 'false'
    } : {};
  }, [disabled]);
  return _react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
    is: is,
    role: "menuitem",
    className: themedClassName,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    height: icon ? 40 : 32,
    tabIndex: 0,
    "data-isselectable": "true",
    display: "flex",
    alignItems: "center",
    ref: ref
  }, disabledProps, passthroughProps), _react["default"].createElement(_IconWrapper.IconWrapper, {
    icon: icon,
    color: iconColor,
    marginLeft: 16,
    marginRight: -4,
    size: 16,
    flexShrink: 0
  }), _react["default"].createElement(_typography.Text, {
    color: textColor,
    marginLeft: 16,
    marginRight: 16,
    flex: 1
  }, children), secondaryText && _react["default"].createElement(_typography.Text, {
    marginRight: 16,
    color: secondaryTextColor
  }, secondaryText));
}));
MenuItem.propTypes = {
  /**
   * Element type to use for the menu item.
   * For example: `<MenuItem is={ReactRouterLink}>...</MenuItem>`
   */
  is: _uiBox["default"].propTypes.is,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: _propTypes["default"].func,

  /**
   * The Evergreen or custom icon before the label.
   */
  icon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),

  /**
   * The children of the component.
   */
  children: _propTypes["default"].node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: _propTypes["default"].node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: _propTypes["default"].string,

  /**
   * The intent of the menu item.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']),

  /**
   * Callback to invoke onkeypress
   */
  onKeyPress: _propTypes["default"].func,

  /**
   * Flag to indicate whether the menu item is disabled or not
   */
  disabled: _propTypes["default"].bool
};
var _default = MenuItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51SXRlbS5qcyJdLCJuYW1lcyI6WyJub29wIiwiTWVudUl0ZW0iLCJwcm9wcyIsInJlZiIsImlzIiwiY2hpbGRyZW4iLCJhcHBlYXJhbmNlIiwic2Vjb25kYXJ5VGV4dCIsImludGVudCIsImljb24iLCJvblNlbGVjdCIsIm9uS2V5UHJlc3MiLCJkaXNhYmxlZCIsInBhc3N0aHJvdWdoUHJvcHMiLCJ0aGVtZSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0TWVudUl0ZW1DbGFzc05hbWUiLCJpY29uQ29sb3IiLCJ0ZXh0Q29sb3IiLCJjb2xvcnMiLCJzZWNvbmRhcnlUZXh0Q29sb3IiLCJkaXNhYmxlZFByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZCIsInRpbnQxIiwiY3Vyc29yIiwib25DbGljayIsInRhYkluZGV4IiwicHJvcFR5cGVzIiwiQm94IiwiUHJvcFR5cGVzIiwiZnVuYyIsIm9uZU9mVHlwZSIsImVsZW1lbnRUeXBlIiwiZWxlbWVudCIsIm5vZGUiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU0sQ0FBRSxDQUFyQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsaUJBQ2YsdUJBQVcsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQUEsa0JBWW5DRCxLQVptQyxDQUVyQ0UsRUFGcUM7QUFBQSxNQUVyQ0EsRUFGcUMsMEJBRWhDLEtBRmdDO0FBQUEsTUFHckNDLFFBSHFDLEdBWW5DSCxLQVptQyxDQUdyQ0csUUFIcUM7QUFBQSwwQkFZbkNILEtBWm1DLENBSXJDSSxVQUpxQztBQUFBLE1BSXJDQSxVQUpxQyxrQ0FJeEIsU0FKd0I7QUFBQSxNQUtyQ0MsYUFMcUMsR0FZbkNMLEtBWm1DLENBS3JDSyxhQUxxQztBQUFBLHNCQVluQ0wsS0FabUMsQ0FNckNNLE1BTnFDO0FBQUEsTUFNckNBLE1BTnFDLDhCQU01QixNQU40QjtBQUFBLE1BT3JDQyxJQVBxQyxHQVluQ1AsS0FabUMsQ0FPckNPLElBUHFDO0FBQUEsd0JBWW5DUCxLQVptQyxDQVFyQ1EsUUFScUM7QUFBQSxNQVFyQ0EsUUFScUMsZ0NBUTFCVixJQVIwQjtBQUFBLE1BU3JDVyxVQVRxQyxHQVluQ1QsS0FabUMsQ0FTckNTLFVBVHFDO0FBQUEsTUFVckNDLFFBVnFDLEdBWW5DVixLQVptQyxDQVVyQ1UsUUFWcUM7QUFBQSxNQVdsQ0MsZ0JBWGtDLDZDQVluQ1gsS0FabUM7QUFjdkMsTUFBTVksS0FBSyxHQUFHLHNCQUFkO0FBRUEsTUFBTUMsV0FBVyxHQUFHLHdCQUNsQixVQUFBQyxLQUFLLEVBQUk7QUFDUE4sSUFBQUEsUUFBUSxDQUFDTSxLQUFELENBQVI7QUFDRCxHQUhpQixFQUlsQixDQUFDTixRQUFELENBSmtCLENBQXBCO0FBT0EsTUFBTU8sY0FBYyxHQUFHLHdCQUNyQixVQUFBRCxLQUFLLEVBQUk7QUFDUCxRQUFJQSxLQUFLLENBQUNFLEdBQU4sS0FBYyxPQUFkLElBQXlCRixLQUFLLENBQUNFLEdBQU4sS0FBYyxHQUEzQyxFQUFnRDtBQUM5Q1IsTUFBQUEsUUFBUSxDQUFDTSxLQUFELENBQVI7QUFDQUEsTUFBQUEsS0FBSyxDQUFDRyxjQUFOO0FBQ0Q7O0FBRUQsZ0NBQVdSLFVBQVgsRUFBdUJLLEtBQXZCO0FBQ0QsR0FSb0IsRUFTckIsQ0FBQ04sUUFBRCxFQUFXQyxVQUFYLENBVHFCLENBQXZCO0FBWUEsTUFBTVMsZUFBZSxHQUFHTixLQUFLLENBQUNPLG9CQUFOLENBQTJCZixVQUEzQixFQUF1QyxNQUF2QyxDQUF4QjtBQUVBLE1BQUlnQixTQUFTLEdBQUdkLE1BQU0sS0FBSyxNQUFYLEdBQW9CLFNBQXBCLEdBQWdDQSxNQUFoRDs7QUFFQSxNQUFJSSxRQUFKLEVBQWM7QUFDWlUsSUFBQUEsU0FBUyxHQUFHLFVBQVo7QUFDRDs7QUFFRCxNQUFNQyxTQUFTLEdBQUdYLFFBQVEsR0FBR0UsS0FBSyxDQUFDVSxNQUFOLENBQWFmLElBQWIsQ0FBa0JHLFFBQXJCLEdBQWdDSixNQUExRDtBQUVBLE1BQU1pQixrQkFBa0IsR0FBR2IsUUFBUSxHQUFHVyxTQUFILEdBQWUsT0FBbEQ7QUFFQSxNQUFNRyxhQUFhLEdBQUcsb0JBQVEsWUFBTTtBQUNsQyxXQUFPZCxRQUFRLEdBQ1g7QUFDRWUsTUFBQUEsZUFBZSxFQUFFYixLQUFLLENBQUNVLE1BQU4sQ0FBYUksVUFBYixDQUF3QkMsS0FEM0M7QUFFRUMsTUFBQUEsTUFBTSxFQUFFLGFBRlY7QUFHRWxCLE1BQUFBLFFBQVEsRUFBRSxJQUhaO0FBSUVtQixNQUFBQSxPQUFPLEVBQUUsSUFKWDtBQUtFcEIsTUFBQUEsVUFBVSxFQUFFLElBTGQ7QUFNRXFCLE1BQUFBLFFBQVEsRUFBRSxDQUFDLENBTmI7QUFPRSx1QkFBaUIsTUFQbkI7QUFRRSwyQkFBcUI7QUFSdkIsS0FEVyxHQVdYLEVBWEo7QUFZRCxHQWJxQixFQWFuQixDQUFDcEIsUUFBRCxDQWJtQixDQUF0QjtBQWVBLFNBQ0UsZ0NBQUMsWUFBRDtBQUNFLElBQUEsRUFBRSxFQUFFUixFQUROO0FBRUUsSUFBQSxJQUFJLEVBQUMsVUFGUDtBQUdFLElBQUEsU0FBUyxFQUFFZ0IsZUFIYjtBQUlFLElBQUEsT0FBTyxFQUFFTCxXQUpYO0FBS0UsSUFBQSxVQUFVLEVBQUVFLGNBTGQ7QUFNRSxJQUFBLE1BQU0sRUFBRVIsSUFBSSxHQUFHLEVBQUgsR0FBUSxFQU50QjtBQU9FLElBQUEsUUFBUSxFQUFFLENBUFo7QUFRRSx5QkFBa0IsTUFScEI7QUFTRSxJQUFBLE9BQU8sRUFBQyxNQVRWO0FBVUUsSUFBQSxVQUFVLEVBQUMsUUFWYjtBQVdFLElBQUEsR0FBRyxFQUFFTjtBQVhQLEtBWU11QixhQVpOLEVBYU1iLGdCQWJOLEdBZUUsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUosSUFEUjtBQUVFLElBQUEsS0FBSyxFQUFFYSxTQUZUO0FBR0UsSUFBQSxVQUFVLEVBQUUsRUFIZDtBQUlFLElBQUEsV0FBVyxFQUFFLENBQUMsQ0FKaEI7QUFLRSxJQUFBLElBQUksRUFBRSxFQUxSO0FBTUUsSUFBQSxVQUFVLEVBQUU7QUFOZCxJQWZGLEVBdUJFLGdDQUFDLGdCQUFEO0FBQU0sSUFBQSxLQUFLLEVBQUVDLFNBQWI7QUFBd0IsSUFBQSxVQUFVLEVBQUUsRUFBcEM7QUFBd0MsSUFBQSxXQUFXLEVBQUUsRUFBckQ7QUFBeUQsSUFBQSxJQUFJLEVBQUU7QUFBL0QsS0FDR2xCLFFBREgsQ0F2QkYsRUEwQkdFLGFBQWEsSUFDWixnQ0FBQyxnQkFBRDtBQUFNLElBQUEsV0FBVyxFQUFFLEVBQW5CO0FBQXVCLElBQUEsS0FBSyxFQUFFa0I7QUFBOUIsS0FDR2xCLGFBREgsQ0EzQkosQ0FERjtBQWtDRCxDQWhHRCxDQURlLENBQWpCO0FBb0dBTixRQUFRLENBQUNnQyxTQUFULEdBQXFCO0FBQ25COzs7O0FBSUE3QixFQUFBQSxFQUFFLEVBQUU4QixrQkFBSUQsU0FBSixDQUFjN0IsRUFMQzs7QUFPbkI7OztBQUdBTSxFQUFBQSxRQUFRLEVBQUV5QixzQkFBVUMsSUFWRDs7QUFZbkI7OztBQUdBM0IsRUFBQUEsSUFBSSxFQUFFMEIsc0JBQVVFLFNBQVYsQ0FBb0IsQ0FBQ0Ysc0JBQVVHLFdBQVgsRUFBd0JILHNCQUFVSSxPQUFsQyxDQUFwQixDQWZhOztBQWlCbkI7OztBQUdBbEMsRUFBQUEsUUFBUSxFQUFFOEIsc0JBQVVLLElBcEJEOztBQXNCbkI7OztBQUdBakMsRUFBQUEsYUFBYSxFQUFFNEIsc0JBQVVLLElBekJOOztBQTJCbkI7OztBQUdBbEMsRUFBQUEsVUFBVSxFQUFFNkIsc0JBQVVNLE1BOUJIOztBQWdDbkI7OztBQUdBakMsRUFBQUEsTUFBTSxFQUFFMkIsc0JBQVVPLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixRQUEvQixDQUFoQixDQW5DVzs7QUFxQ25COzs7QUFHQS9CLEVBQUFBLFVBQVUsRUFBRXdCLHNCQUFVQyxJQXhDSDs7QUEwQ25COzs7QUFHQXhCLEVBQUFBLFFBQVEsRUFBRXVCLHNCQUFVUTtBQTdDRCxDQUFyQjtlQWdEZTFDLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgSWNvbldyYXBwZXIgfSBmcm9tICcuLi8uLi9pY29ucy9zcmMvSWNvbldyYXBwZXInXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgTWVudUl0ZW0gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIE1lbnVJdGVtKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBpcyA9ICdkaXYnLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhcHBlYXJhbmNlID0gJ2RlZmF1bHQnLFxuICAgICAgc2Vjb25kYXJ5VGV4dCxcbiAgICAgIGludGVudCA9ICdub25lJyxcbiAgICAgIGljb24sXG4gICAgICBvblNlbGVjdCA9IG5vb3AsXG4gICAgICBvbktleVByZXNzLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAuLi5wYXNzdGhyb3VnaFByb3BzXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIG9uU2VsZWN0KGV2ZW50KVxuICAgICAgfSxcbiAgICAgIFtvblNlbGVjdF1cbiAgICApXG5cbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICAgICAgb25TZWxlY3QoZXZlbnQpXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG5cbiAgICAgICAgc2FmZUludm9rZShvbktleVByZXNzLCBldmVudClcbiAgICAgIH0sXG4gICAgICBbb25TZWxlY3QsIG9uS2V5UHJlc3NdXG4gICAgKVxuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0TWVudUl0ZW1DbGFzc05hbWUoYXBwZWFyYW5jZSwgJ25vbmUnKVxuXG4gICAgbGV0IGljb25Db2xvciA9IGludGVudCA9PT0gJ25vbmUnID8gJ2RlZmF1bHQnIDogaW50ZW50XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGljb25Db2xvciA9ICdkaXNhYmxlZCdcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0Q29sb3IgPSBkaXNhYmxlZCA/IHRoZW1lLmNvbG9ycy5pY29uLmRpc2FibGVkIDogaW50ZW50XG5cbiAgICBjb25zdCBzZWNvbmRhcnlUZXh0Q29sb3IgPSBkaXNhYmxlZCA/IHRleHRDb2xvciA6ICdtdXRlZCdcblxuICAgIGNvbnN0IGRpc2FibGVkUHJvcHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIHJldHVybiBkaXNhYmxlZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3JzLmJhY2tncm91bmQudGludDEsXG4gICAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgICAgICAgICBvbktleVByZXNzOiBudWxsLFxuICAgICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAnZGF0YS1pc3NlbGVjdGFibGUnOiAnZmFsc2UnXG4gICAgICAgICAgfVxuICAgICAgICA6IHt9XG4gICAgfSwgW2Rpc2FibGVkXSlcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBpcz17aXN9XG4gICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XG4gICAgICAgIGhlaWdodD17aWNvbiA/IDQwIDogMzJ9XG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgey4uLmRpc2FibGVkUHJvcHN9XG4gICAgICAgIHsuLi5wYXNzdGhyb3VnaFByb3BzfVxuICAgICAgPlxuICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGNvbG9yPXtpY29uQ29sb3J9XG4gICAgICAgICAgbWFyZ2luTGVmdD17MTZ9XG4gICAgICAgICAgbWFyZ2luUmlnaHQ9ey00fVxuICAgICAgICAgIHNpemU9ezE2fVxuICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0IGNvbG9yPXt0ZXh0Q29sb3J9IG1hcmdpbkxlZnQ9ezE2fSBtYXJnaW5SaWdodD17MTZ9IGZsZXg9ezF9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICB7c2Vjb25kYXJ5VGV4dCAmJiAoXG4gICAgICAgICAgPFRleHQgbWFyZ2luUmlnaHQ9ezE2fSBjb2xvcj17c2Vjb25kYXJ5VGV4dENvbG9yfT5cbiAgICAgICAgICAgIHtzZWNvbmRhcnlUZXh0fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH0pXG4pXG5cbk1lbnVJdGVtLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEVsZW1lbnQgdHlwZSB0byB1c2UgZm9yIHRoZSBtZW51IGl0ZW0uXG4gICAqIEZvciBleGFtcGxlOiBgPE1lbnVJdGVtIGlzPXtSZWFjdFJvdXRlckxpbmt9Pi4uLjwvTWVudUl0ZW0+YFxuICAgKi9cbiAgaXM6IEJveC5wcm9wVHlwZXMuaXMsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIG9uIGNsaWNrIGFuZCBlbnRlci9zcGFjZSBrZXlwcmVzcy5cbiAgICovXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIEV2ZXJncmVlbiBvciBjdXN0b20gaWNvbiBiZWZvcmUgdGhlIGxhYmVsLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuXG4gIC8qKlxuICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogU2Vjb25kYXJ5IHRleHQgc2hvd24gb24gdGhlIHJpZ2h0LlxuICAgKi9cbiAgc2Vjb25kYXJ5VGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydHMgb25lIGRlZmF1bHQgYXBwZWFyYW5jZS5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnRlbnQgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb25rZXlwcmVzc1xuICAgKi9cbiAgb25LZXlQcmVzczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgbWVudSBpdGVtIGlzIGRpc2FibGVkIG9yIG5vdFxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtXG4iXX0=