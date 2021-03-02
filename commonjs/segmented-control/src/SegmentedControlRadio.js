"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _glamor = require("glamor");

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _css;

var labelClass = (0, _glamor.css)({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
});
var wrapperClass = (0, _glamor.css)((_css = {
  position: 'relative',
  display: 'flex',
  flex: 1,
  cursor: 'pointer',
  marginLeft: '-1px'
}, (0, _defineProperty2["default"])(_css, ":first-child .".concat(labelClass), {
  borderTopLeftRadius: 3,
  borderBottomLeftRadius: 3
}), (0, _defineProperty2["default"])(_css, ":last-child .".concat(labelClass), {
  borderTopRightRadius: 3,
  borderBottomRightRadius: 3
}), _css));
var offscreenCss = (0, _glamor.css)({
  overflow: 'hidden',
  position: 'absolute',
  height: '1px',
  width: '1px',
  padding: 0,
  margin: '-1px',
  border: 0,
  clip: 'rect(0 0 0 0)'
});
var SegmentedControlRadio = (0, _react.memo)((0, _react.forwardRef)(function SegmentedControlRadio(props, ref) {
  var theme = (0, _theme.useTheme)();
  var id = props.id,
      name = props.name,
      label = props.label,
      value = props.value,
      height = props.height,
      checked = props.checked,
      _onChange = props.onChange,
      appearance = props.appearance,
      isFirstItem = props.isFirstItem,
      isLastItem = props.isLastItem,
      disabled = props.disabled;
  var themedClassName = theme.getSegmentedControlRadioClassName(appearance);
  var textSize = theme.getTextSizeForControlHeight(height);
  var borderRadius = theme.getBorderRadiusForControlHeight(height);
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    ref: ref,
    className: (0, _classnames["default"])(wrapperClass.toString(), themedClassName),
    "data-active": checked
  }, isFirstItem ? {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius
  } : {}, isLastItem ? {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius
  } : {}), _react["default"].createElement("input", {
    type: "radio",
    id: id,
    className: "".concat(offscreenCss),
    name: name,
    value: value,
    checked: checked,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    disabled: disabled
  }), _react["default"].createElement(_typography.Text, {
    is: "label",
    cursor: "pointer",
    htmlFor: id,
    fontWeight: 500,
    size: textSize,
    className: "".concat(labelClass),
    disabled: disabled
  }, label));
}));
SegmentedControlRadio.propTypes = {
  /**
   * The name attribute of the radio input.
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * The label used for the radio.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * The value attribute of the radio input.
   */
  value: _propTypes["default"].string.isRequired,

  /**
   * The height of the control.
   */
  height: _propTypes["default"].number.isRequired,

  /**
   * When true, the radio input is checked.
   */
  checked: _propTypes["default"].bool.isRequired,

  /**
   * Function called when the state changes.
   */
  onChange: _propTypes["default"].func.isRequired,

  /**
   * The appearance of the control. Currently only `default` is possible.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * When true, this item is the first item.
   */
  isFirstItem: _propTypes["default"].bool,

  /**
   * When true, this item is the last item.
   */
  isLastItem: _propTypes["default"].bool,

  /**
   * The unique id of the radio option.
   */
  id: _propTypes["default"].string,

  /**
   * When true, the input is disabled.
   */
  disabled: _propTypes["default"].bool
};
var _default = SegmentedControlRadio;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWdtZW50ZWQtY29udHJvbC9zcmMvU2VnbWVudGVkQ29udHJvbFJhZGlvLmpzIl0sIm5hbWVzIjpbImxhYmVsQ2xhc3MiLCJkaXNwbGF5IiwiZmxleCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwid3JhcHBlckNsYXNzIiwiY3Vyc29yIiwibWFyZ2luTGVmdCIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyVG9wUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsIm9mZnNjcmVlbkNzcyIsIm92ZXJmbG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm9yZGVyIiwiY2xpcCIsIlNlZ21lbnRlZENvbnRyb2xSYWRpbyIsInByb3BzIiwicmVmIiwidGhlbWUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiYXBwZWFyYW5jZSIsImlzRmlyc3RJdGVtIiwiaXNMYXN0SXRlbSIsImRpc2FibGVkIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQ2xhc3NOYW1lIiwidGV4dFNpemUiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0IiwidG9TdHJpbmciLCJlIiwidGFyZ2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJudW1iZXIiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsaUJBQUk7QUFDckJDLEVBQUFBLE9BQU8sRUFBRSxNQURZO0FBRXJC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QUFBQSxRQUFRLEVBQUVlLHNCQUFVTSxJQUFWLENBQWVKLFVBN0JPOztBQStCaEM7OztBQUdBaEIsRUFBQUEsVUFBVSxFQUFFYyxzQkFBVUMsTUFBVixDQUFpQkMsVUFsQ0c7O0FBb0NoQzs7O0FBR0FmLEVBQUFBLFdBQVcsRUFBRWEsc0JBQVVLLElBdkNTOztBQXlDaEM7OztBQUdBakIsRUFBQUEsVUFBVSxFQUFFWSxzQkFBVUssSUE1Q1U7O0FBOENoQzs7O0FBR0F6QixFQUFBQSxFQUFFLEVBQUVvQixzQkFBVUMsTUFqRGtCOztBQW1EaEM7OztBQUdBWixFQUFBQSxRQUFRLEVBQUVXLHNCQUFVSztBQXREWSxDQUFsQztlQXlEZTdCLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGxhYmVsQ2xhc3MgPSBjc3Moe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXg6IDEsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KVxuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4OiAxLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgbWFyZ2luTGVmdDogJy0xcHgnLFxuICBbYDpmaXJzdC1jaGlsZCAuJHtsYWJlbENsYXNzfWBdOiB7XG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMyxcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAzXG4gIH0sXG4gIFtgOmxhc3QtY2hpbGQgLiR7bGFiZWxDbGFzc31gXToge1xuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAzLFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAzXG4gIH1cbn0pXG5cbmNvbnN0IG9mZnNjcmVlbkNzcyA9IGNzcyh7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGhlaWdodDogJzFweCcsXG4gIHdpZHRoOiAnMXB4JyxcbiAgcGFkZGluZzogMCxcbiAgbWFyZ2luOiAnLTFweCcsXG4gIGJvcmRlcjogMCxcbiAgY2xpcDogJ3JlY3QoMCAwIDAgMCknXG59KVxuXG5jb25zdCBTZWdtZW50ZWRDb250cm9sUmFkaW8gPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIFNlZ21lbnRlZENvbnRyb2xSYWRpbyhwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBsYWJlbCxcbiAgICAgIHZhbHVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzRmlyc3RJdGVtLFxuICAgICAgaXNMYXN0SXRlbSxcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRTZWdtZW50ZWRDb250cm9sUmFkaW9DbGFzc05hbWUoYXBwZWFyYW5jZSlcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtjeCh3cmFwcGVyQ2xhc3MudG9TdHJpbmcoKSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgZGF0YS1hY3RpdmU9e2NoZWNrZWR9XG4gICAgICAgIHsuLi4oaXNGaXJzdEl0ZW1cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KX1cbiAgICAgICAgey4uLihpc0xhc3RJdGVtXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBib3JkZXJSYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtvZmZzY3JlZW5Dc3N9YH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgIHNpemU9e3RleHRTaXplfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7bGFiZWxDbGFzc31gfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9KVxuKVxuXG5TZWdtZW50ZWRDb250cm9sUmFkaW8ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIG5hbWUgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBpbnB1dC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHVzZWQgZm9yIHRoZSByYWRpby5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpbyBpbnB1dC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGNvbnRyb2wuXG4gICAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgcmFkaW8gaW5wdXQgaXMgY2hlY2tlZC5cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjb250cm9sLiBDdXJyZW50bHkgb25seSBgZGVmYXVsdGAgaXMgcG9zc2libGUuXG4gICAqL1xuICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhpcyBpdGVtIGlzIHRoZSBmaXJzdCBpdGVtLlxuICAgKi9cbiAgaXNGaXJzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoaXMgaXRlbSBpcyB0aGUgbGFzdCBpdGVtLlxuICAgKi9cbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB1bmlxdWUgaWQgb2YgdGhlIHJhZGlvIG9wdGlvbi5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWdtZW50ZWRDb250cm9sUmFkaW9cbiJdfQ==