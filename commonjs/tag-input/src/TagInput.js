"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _scales = require("../../scales");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _hooks = require("../../hooks");

var _Tag = _interopRequireDefault(require("./Tag"));

/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
var GET_KEY_FOR_TAG_DELIMITER = {
  enter: 'Enter',
  space: ' '
};
var emptyProps = {};
var emptyArray = [];
var TagInput = (0, _react.memo)((0, _react.forwardRef)(function TagInput(props, ref) {
  var _props$addOnBlur = props.addOnBlur,
      addOnBlur = _props$addOnBlur === void 0 ? false : _props$addOnBlur,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? /[,\n\r]/ : _props$separator,
      _props$values = props.values,
      values = _props$values === void 0 ? emptyArray : _props$values,
      _props$tagSubmitKey = props.tagSubmitKey,
      tagSubmitKey = _props$tagSubmitKey === void 0 ? 'enter' : _props$tagSubmitKey,
      _props$tagProps = props.tagProps,
      tagProps = _props$tagProps === void 0 ? emptyProps : _props$tagProps,
      onAdd = props.onAdd,
      onChange = props.onChange,
      onRemove = props.onRemove,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onInputChange = props.onInputChange,
      className = props.className,
      _props$inputProps = props.inputProps,
      inputProps = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRef = props.inputRef,
      rest = (0, _objectWithoutProperties2["default"])(props, ["addOnBlur", "disabled", "height", "separator", "values", "tagSubmitKey", "tagProps", "onAdd", "onChange", "onRemove", "onBlur", "onFocus", "onInputChange", "className", "inputProps", "inputRef"]);
  var theme = (0, _theme.useTheme)();

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isFocused = _useState4[0],
      setIsFocused = _useState4[1];

  var id = (0, _hooks.useId)('TagInput');

  var getValues = function getValues() {
    var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return separator ? inputValue.split(separator).map(function (v) {
      return v.trim();
    }).filter(function (v) {
      return v.length > 0;
    }) : [inputValue];
  };

  var addTags = function addTags() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var newValues = getValues(value);
    var shouldClearInput = (0, _safeInvoke["default"])(onAdd, newValues);

    if (typeof onChange === 'function') {
      shouldClearInput = shouldClearInput || onChange(values.concat(newValues));
    }

    if (shouldClearInput !== false) {
      setInputValue('');
    }
  };

  var removeTagAtIndex = function removeTagAtIndex(index) {
    (0, _safeInvoke["default"])(onRemove, values[index], index); // Remove item at index as a new array

    var newValues = values.filter(function (_, i) {
      return i !== index;
    });
    (0, _safeInvoke["default"])(onChange, newValues);
  };

  var handleBackspaceToRemove = function handleBackspaceToRemove() {
    removeTagAtIndex(values.length - 1);
  };

  var handleBlur = function handleBlur(event) {
    var container = event.target;
    requestAnimationFrame(function () {
      if (!container.contains(document.activeElement)) {
        if (addOnBlur && inputValue) {
          addTags(inputValue);
        }

        setIsFocused(false);
      }
    });
    (0, _safeInvoke["default"])(onBlur, event);
  };

  var handleInputChange = function handleInputChange(event) {
    setInputValue(event.target.value);
    (0, _safeInvoke["default"])(onInputChange, event);
  };

  var handleInputFocus = function handleInputFocus(event) {
    setIsFocused(true);
    (0, _safeInvoke["default"])(onFocus, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    var _event$target = event.target,
        selectionEnd = _event$target.selectionEnd,
        value = _event$target.value;
    var key = GET_KEY_FOR_TAG_DELIMITER[tagSubmitKey];

    if (event.key === key) {
      event.preventDefault();
      addTags(value);
    } else if (event.key === 'Backspace' && selectionEnd === 0) {
      handleBackspaceToRemove(event);
    }
  };

  var handleRemoveTag = function handleRemoveTag(event) {
    // Using data attribute to simplify callback logic -- one handler for all children
    var index = Number(event.currentTarget.parentElement.getAttribute('data-tag-index'));
    removeTagAtIndex(index);
  };

  var maybeRenderTag = function maybeRenderTag(tag, index) {
    if (!tag) {
      return null;
    }

    var propsForElement = (0, _safeInvoke["default"])(tagProps, tag, index) || tagProps;
    return _react["default"].createElement(_Tag["default"], (0, _extends2["default"])({
      key: "".concat(tag, ":").concat(index),
      "data-tag-index": index,
      marginRight: (0, _scales.majorScale)(1),
      marginY: "6px",
      onRemove: disabled ? null : handleRemoveTag,
      isRemovable: !disabled
    }, propsForElement), tag);
  };

  var themedContainerClassName = theme.getTagInputClassName('default');
  var textSize = theme.getTextSizeForControlHeight(height);
  var borderRadius = theme.getBorderRadiusForControlHeight(height);
  var themedInputClassName = (0, _classnames["default"])(theme.getTextInputClassName('none'), inputProps.className);
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    "aria-disabled": disabled || undefined,
    "aria-activedescendant": isFocused ? id : undefined,
    borderRadius: borderRadius,
    className: (0, _classnames["default"])(themedContainerClassName, className),
    paddingLeft: Math.round(height / 3.2),
    paddingRight: Math.round(height / 3.2),
    paddingY: "2px",
    ref: ref
  }, rest, {
    onBlur: handleBlur
  }), values.map(maybeRenderTag), _react["default"].createElement(_typography.Text, (0, _extends2["default"])({
    is: "input",
    id: id,
    color: disabled ? 'muted' : undefined,
    disabled: disabled,
    flexGrow: "1",
    height: height - 4,
    size: textSize,
    type: "text",
    value: inputValue
  }, inputProps, {
    className: themedInputClassName,
    ref: inputRef,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onKeyDown: handleKeyDown
  })));
}));
TagInput.propTypes = {
  /** Whether or not the inputValue should be added to the tags when the input blurs. */
  addOnBlur: _propTypes["default"].bool,

  /** The class name to apply to the container component. */
  className: _propTypes["default"].string,

  /** Whether or not the input should be disabled. */
  disabled: _propTypes["default"].bool,

  /** The vertical size of the input */
  height: _propTypes["default"].number,

  /** Props to pass to the input component. Note that `ref` and `key` are not supported. See `inputRef`. */
  inputProps: _propTypes["default"].object,

  /**
   * Ref handler for the input element.
   * (input: HTMLInputElement | null) => void
   */
  inputRef: _propTypes["default"].func,

  /**
   * Callback invoked when new tags are added.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onAdd: _propTypes["default"].func,

  /**
   * Callback invoked when focus on the input blurs.
   * (event) => void
   */
  onBlur: _propTypes["default"].func,

  /**
   * Callback invoked when the tag values change.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onChange: _propTypes["default"].func,

  /**
   * Callback invoked when the input receives focus.
   * (event) => void
   */
  onFocus: _propTypes["default"].func,

  /**
   * Callback invoked when the value of the input is changed. Shorthand for `inputProps={{ onChange }}`.
   * (event) => void
   */
  onInputChange: _propTypes["default"].func,

  /**
   * Callback invoked when a tag is removed.
   * Receives value and index of removed tag.
   * (value: string | node, index: number) => void
   */
  onRemove: _propTypes["default"].func,

  /** Value or RegExp to split on pasted text or on enter keypress */
  separator: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(RegExp), _propTypes["default"].oneOf([false])]),

  /** Provide props to tag component (actually `Badge`, for now). */
  tagProps: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),

  /** Key to press in order to submit a new tag while typing.  */
  tagSubmitKey: _propTypes["default"].oneOf(['enter', 'space']),

  /** Controlled tag values. Each value is rendered inside a tag. */
  values: _propTypes["default"].arrayOf(_propTypes["default"].node)
};
var _default = TagInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWctaW5wdXQvc3JjL1RhZ0lucHV0LmpzIl0sIm5hbWVzIjpbIkdFVF9LRVlfRk9SX1RBR19ERUxJTUlURVIiLCJlbnRlciIsInNwYWNlIiwiZW1wdHlQcm9wcyIsImVtcHR5QXJyYXkiLCJUYWdJbnB1dCIsInByb3BzIiwicmVmIiwiYWRkT25CbHVyIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJzZXBhcmF0b3IiLCJ2YWx1ZXMiLCJ0YWdTdWJtaXRLZXkiLCJ0YWdQcm9wcyIsIm9uQWRkIiwib25DaGFuZ2UiLCJvblJlbW92ZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvbklucHV0Q2hhbmdlIiwiY2xhc3NOYW1lIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwicmVzdCIsInRoZW1lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJpZCIsImdldFZhbHVlcyIsInNwbGl0IiwibWFwIiwidiIsInRyaW0iLCJmaWx0ZXIiLCJsZW5ndGgiLCJhZGRUYWdzIiwidmFsdWUiLCJuZXdWYWx1ZXMiLCJzaG91bGRDbGVhcklucHV0IiwiY29uY2F0IiwicmVtb3ZlVGFnQXRJbmRleCIsImluZGV4IiwiXyIsImkiLCJoYW5kbGVCYWNrc3BhY2VUb1JlbW92ZSIsImhhbmRsZUJsdXIiLCJldmVudCIsImNvbnRhaW5lciIsInRhcmdldCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVJbnB1dEZvY3VzIiwiaGFuZGxlS2V5RG93biIsInNlbGVjdGlvbkVuZCIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlUmVtb3ZlVGFnIiwiTnVtYmVyIiwiY3VycmVudFRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJtYXliZVJlbmRlclRhZyIsInRhZyIsInByb3BzRm9yRWxlbWVudCIsInRoZW1lZENvbnRhaW5lckNsYXNzTmFtZSIsImdldFRhZ0lucHV0Q2xhc3NOYW1lIiwidGV4dFNpemUiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0IiwidGhlbWVkSW5wdXRDbGFzc05hbWUiLCJnZXRUZXh0SW5wdXRDbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJNYXRoIiwicm91bmQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsImluc3RhbmNlT2YiLCJSZWdFeHAiLCJvbmVPZiIsImFycmF5T2YiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQWJBOzs7QUFlQSxJQUFNQSx5QkFBeUIsR0FBRztBQUNoQ0MsRUFBQUEsS0FBSyxFQUFFLE9BRHlCO0FBRWhDQyxFQUFBQSxLQUFLLEVBQUU7QUFGeUIsQ0FBbEM7QUFLQSxJQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsaUJBQ2YsdUJBQVcsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQUEseUJBbUJuQ0QsS0FuQm1DLENBRXJDRSxTQUZxQztBQUFBLE1BRXJDQSxTQUZxQyxpQ0FFekIsS0FGeUI7QUFBQSx3QkFtQm5DRixLQW5CbUMsQ0FHckNHLFFBSHFDO0FBQUEsTUFHckNBLFFBSHFDLGdDQUcxQixLQUgwQjtBQUFBLHNCQW1CbkNILEtBbkJtQyxDQUlyQ0ksTUFKcUM7QUFBQSxNQUlyQ0EsTUFKcUMsOEJBSTVCLEVBSjRCO0FBQUEseUJBbUJuQ0osS0FuQm1DLENBS3JDSyxTQUxxQztBQUFBLE1B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TyxFQUFFK0Qsc0JBQVVLLElBckNBOztBQXNDbkI7Ozs7QUFJQW5FLEVBQUFBLGFBQWEsRUFBRThELHNCQUFVSyxJQTFDTjs7QUEyQ25COzs7OztBQUtBdEUsRUFBQUEsUUFBUSxFQUFFaUUsc0JBQVVLLElBaEREOztBQWlEbkI7QUFDQTVFLEVBQUFBLFNBQVMsRUFBRXVFLHNCQUFVTSxTQUFWLENBQW9CLENBQzdCTixzQkFBVUUsTUFEbUIsRUFFN0JGLHNCQUFVTyxVQUFWLENBQXFCQyxNQUFyQixDQUY2QixFQUc3QlIsc0JBQVVTLEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELENBQWhCLENBSDZCLENBQXBCLENBbERROztBQXVEbkI7QUFDQTdFLEVBQUFBLFFBQVEsRUFBRW9FLHNCQUFVTSxTQUFWLENBQW9CLENBQUNOLHNCQUFVSSxNQUFYLEVBQW1CSixzQkFBVUssSUFBN0IsQ0FBcEIsQ0F4RFM7O0FBeURuQjtBQUNBMUUsRUFBQUEsWUFBWSxFQUFFcUUsc0JBQVVTLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFoQixDQTFESzs7QUEyRG5CO0FBQ0EvRSxFQUFBQSxNQUFNLEVBQUVzRSxzQkFBVVUsT0FBVixDQUFrQlYsc0JBQVVXLElBQTVCO0FBNURXLENBQXJCO2VBK0RleEYsUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG92ZXJ2aWV3IFRhZ0lucHV0IGFjY2VwdHMgbXVsdGlwbGUgdmFsdWVzIHRoYXQgY2FuIGJlIGluZGl2aWR1YWxseSByZW1vdmVkXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHsgbWFqb3JTY2FsZSB9IGZyb20gJy4uLy4uL3NjYWxlcydcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcbmltcG9ydCB7IHVzZUlkIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJ1xuXG5jb25zdCBHRVRfS0VZX0ZPUl9UQUdfREVMSU1JVEVSID0ge1xuICBlbnRlcjogJ0VudGVyJyxcbiAgc3BhY2U6ICcgJ1xufVxuXG5jb25zdCBlbXB0eVByb3BzID0ge31cbmNvbnN0IGVtcHR5QXJyYXkgPSBbXVxuXG5jb25zdCBUYWdJbnB1dCA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gVGFnSW5wdXQocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIGFkZE9uQmx1ciA9IGZhbHNlLFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgIGhlaWdodCA9IDMyLFxuICAgICAgc2VwYXJhdG9yID0gL1ssXFxuXFxyXS8sXG4gICAgICB2YWx1ZXMgPSBlbXB0eUFycmF5LFxuICAgICAgdGFnU3VibWl0S2V5ID0gJ2VudGVyJyxcbiAgICAgIHRhZ1Byb3BzID0gZW1wdHlQcm9wcyxcbiAgICAgIG9uQWRkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvblJlbW92ZSxcbiAgICAgIG9uQmx1cixcbiAgICAgIG9uRm9jdXMsXG4gICAgICBvbklucHV0Q2hhbmdlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaW5wdXRQcm9wcyA9IHt9LFxuICAgICAgaW5wdXRSZWYsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbaXNGb2N1c2VkLCBzZXRJc0ZvY3VzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgaWQgPSB1c2VJZCgnVGFnSW5wdXQnKVxuXG4gICAgY29uc3QgZ2V0VmFsdWVzID0gKGlucHV0VmFsdWUgPSAnJykgPT5cbiAgICAgIHNlcGFyYXRvclxuICAgICAgICA/IGlucHV0VmFsdWVcbiAgICAgICAgICAgIC5zcGxpdChzZXBhcmF0b3IpXG4gICAgICAgICAgICAubWFwKHYgPT4gdi50cmltKCkpXG4gICAgICAgICAgICAuZmlsdGVyKHYgPT4gdi5sZW5ndGggPiAwKVxuICAgICAgICA6IFtpbnB1dFZhbHVlXVxuXG4gICAgY29uc3QgYWRkVGFncyA9ICh2YWx1ZSA9ICcnKSA9PiB7XG4gICAgICBjb25zdCBuZXdWYWx1ZXMgPSBnZXRWYWx1ZXModmFsdWUpXG4gICAgICBsZXQgc2hvdWxkQ2xlYXJJbnB1dCA9IHNhZmVJbnZva2Uob25BZGQsIG5ld1ZhbHVlcylcblxuICAgICAgaWYgKHR5cGVvZiBvbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzaG91bGRDbGVhcklucHV0ID1cbiAgICAgICAgICBzaG91bGRDbGVhcklucHV0IHx8IG9uQ2hhbmdlKHZhbHVlcy5jb25jYXQobmV3VmFsdWVzKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZENsZWFySW5wdXQgIT09IGZhbHNlKSB7XG4gICAgICAgIHNldElucHV0VmFsdWUoJycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFnQXRJbmRleCA9IGluZGV4ID0+IHtcbiAgICAgIHNhZmVJbnZva2Uob25SZW1vdmUsIHZhbHVlc1tpbmRleF0sIGluZGV4KVxuXG4gICAgICAvLyBSZW1vdmUgaXRlbSBhdCBpbmRleCBhcyBhIG5ldyBhcnJheVxuICAgICAgY29uc3QgbmV3VmFsdWVzID0gdmFsdWVzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpXG4gICAgICBzYWZlSW52b2tlKG9uQ2hhbmdlLCBuZXdWYWx1ZXMpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQmFja3NwYWNlVG9SZW1vdmUgPSAoKSA9PiB7XG4gICAgICByZW1vdmVUYWdBdEluZGV4KHZhbHVlcy5sZW5ndGggLSAxKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUJsdXIgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBldmVudC50YXJnZXRcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCFjb250YWluZXIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBpZiAoYWRkT25CbHVyICYmIGlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIGFkZFRhZ3MoaW5wdXRWYWx1ZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRJc0ZvY3VzZWQoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHNhZmVJbnZva2Uob25CbHVyLCBldmVudClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgIHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgc2FmZUludm9rZShvbklucHV0Q2hhbmdlLCBldmVudClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVJbnB1dEZvY3VzID0gZXZlbnQgPT4ge1xuICAgICAgc2V0SXNGb2N1c2VkKHRydWUpXG4gICAgICBzYWZlSW52b2tlKG9uRm9jdXMsIGV2ZW50KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB7IHNlbGVjdGlvbkVuZCwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3Qga2V5ID0gR0VUX0tFWV9GT1JfVEFHX0RFTElNSVRFUlt0YWdTdWJtaXRLZXldXG5cbiAgICAgIGlmIChldmVudC5rZXkgPT09IGtleSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGFkZFRhZ3ModmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgc2VsZWN0aW9uRW5kID09PSAwKSB7XG4gICAgICAgIGhhbmRsZUJhY2tzcGFjZVRvUmVtb3ZlKGV2ZW50KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZVRhZyA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIFVzaW5nIGRhdGEgYXR0cmlidXRlIHRvIHNpbXBsaWZ5IGNhbGxiYWNrIGxvZ2ljIC0tIG9uZSBoYW5kbGVyIGZvciBhbGwgY2hpbGRyZW5cbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhZy1pbmRleCcpXG4gICAgICApXG4gICAgICByZW1vdmVUYWdBdEluZGV4KGluZGV4KVxuICAgIH1cblxuICAgIGNvbnN0IG1heWJlUmVuZGVyVGFnID0gKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIGlmICghdGFnKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzRm9yRWxlbWVudCA9IHNhZmVJbnZva2UodGFnUHJvcHMsIHRhZywgaW5kZXgpIHx8IHRhZ1Byb3BzXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUYWdcbiAgICAgICAgICBrZXk9e2Ake3RhZ306JHtpbmRleH1gfVxuICAgICAgICAgIGRhdGEtdGFnLWluZGV4PXtpbmRleH1cbiAgICAgICAgICBtYXJnaW5SaWdodD17bWFqb3JTY2FsZSgxKX1cbiAgICAgICAgICBtYXJnaW5ZPVwiNnB4XCJcbiAgICAgICAgICBvblJlbW92ZT17ZGlzYWJsZWQgPyBudWxsIDogaGFuZGxlUmVtb3ZlVGFnfVxuICAgICAgICAgIGlzUmVtb3ZhYmxlPXshZGlzYWJsZWR9XG4gICAgICAgICAgey4uLnByb3BzRm9yRWxlbWVudH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0YWd9XG4gICAgICAgIDwvVGFnPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHRoZW1lZENvbnRhaW5lckNsYXNzTmFtZSA9IHRoZW1lLmdldFRhZ0lucHV0Q2xhc3NOYW1lKCdkZWZhdWx0JylcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgdGhlbWVkSW5wdXRDbGFzc05hbWUgPSBjeChcbiAgICAgIHRoZW1lLmdldFRleHRJbnB1dENsYXNzTmFtZSgnbm9uZScpLFxuICAgICAgaW5wdXRQcm9wcy5jbGFzc05hbWVcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBhcmlhLWRpc2FibGVkPXtkaXNhYmxlZCB8fCB1bmRlZmluZWR9XG4gICAgICAgIGFyaWEtYWN0aXZlZGVzY2VuZGFudD17aXNGb2N1c2VkID8gaWQgOiB1bmRlZmluZWR9XG4gICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENvbnRhaW5lckNsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIHBhZGRpbmdZPVwiMnB4XCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICA+XG4gICAgICAgIHt2YWx1ZXMubWFwKG1heWJlUmVuZGVyVGFnKX1cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ211dGVkJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgZmxleEdyb3c9XCIxXCJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIDR9XG4gICAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkSW5wdXRDbGFzc05hbWV9XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH0pXG4pXG5cblRhZ0lucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBpbnB1dFZhbHVlIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgdGFncyB3aGVuIHRoZSBpbnB1dCBibHVycy4gKi9cbiAgYWRkT25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIFRoZSBjbGFzcyBuYW1lIHRvIGFwcGx5IHRvIHRoZSBjb250YWluZXIgY29tcG9uZW50LiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBUaGUgdmVydGljYWwgc2l6ZSBvZiB0aGUgaW5wdXQgKi9cbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKiogUHJvcHMgdG8gcGFzcyB0byB0aGUgaW5wdXQgY29tcG9uZW50LiBOb3RlIHRoYXQgYHJlZmAgYW5kIGBrZXlgIGFyZSBub3Qgc3VwcG9ydGVkLiBTZWUgYGlucHV0UmVmYC4gKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIFJlZiBoYW5kbGVyIGZvciB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICogKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCkgPT4gdm9pZFxuICAgKi9cbiAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIG5ldyB0YWdzIGFyZSBhZGRlZC5cbiAgICogUmV0dXJuaW5nIGBmYWxzZWAgd2lsbCBwcmV2ZW50IGNsZWFyaW5nIHRoZSBpbnB1dC5cbiAgICogKHZhbHVlczogQXJyYXkpID0+IHZvaWQgfCBmYWxzZVxuICAgKi9cbiAgb25BZGQ6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIGZvY3VzIG9uIHRoZSBpbnB1dCBibHVycy5cbiAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAqL1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSB0YWcgdmFsdWVzIGNoYW5nZS5cbiAgICogUmV0dXJuaW5nIGBmYWxzZWAgd2lsbCBwcmV2ZW50IGNsZWFyaW5nIHRoZSBpbnB1dC5cbiAgICogKHZhbHVlczogQXJyYXkpID0+IHZvaWQgfCBmYWxzZVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBpbnB1dCByZWNlaXZlcyBmb2N1cy5cbiAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGlzIGNoYW5nZWQuIFNob3J0aGFuZCBmb3IgYGlucHV0UHJvcHM9e3sgb25DaGFuZ2UgfX1gLlxuICAgKiAoZXZlbnQpID0+IHZvaWRcbiAgICovXG4gIG9uSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIGEgdGFnIGlzIHJlbW92ZWQuXG4gICAqIFJlY2VpdmVzIHZhbHVlIGFuZCBpbmRleCBvZiByZW1vdmVkIHRhZy5cbiAgICogKHZhbHVlOiBzdHJpbmcgfCBub2RlLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gICAqL1xuICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBWYWx1ZSBvciBSZWdFeHAgdG8gc3BsaXQgb24gcGFzdGVkIHRleHQgb3Igb24gZW50ZXIga2V5cHJlc3MgKi9cbiAgc2VwYXJhdG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKFJlZ0V4cCksXG4gICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXG4gIF0pLFxuICAvKiogUHJvdmlkZSBwcm9wcyB0byB0YWcgY29tcG9uZW50IChhY3R1YWxseSBgQmFkZ2VgLCBmb3Igbm93KS4gKi9cbiAgdGFnUHJvcHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gIC8qKiBLZXkgdG8gcHJlc3MgaW4gb3JkZXIgdG8gc3VibWl0IGEgbmV3IHRhZyB3aGlsZSB0eXBpbmcuICAqL1xuICB0YWdTdWJtaXRLZXk6IFByb3BUeXBlcy5vbmVPZihbJ2VudGVyJywgJ3NwYWNlJ10pLFxuICAvKiogQ29udHJvbGxlZCB0YWcgdmFsdWVzLiBFYWNoIHZhbHVlIGlzIHJlbmRlcmVkIGluc2lkZSBhIHRhZy4gKi9cbiAgdmFsdWVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnSW5wdXRcbiJdfQ==