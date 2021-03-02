"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CLASS_PREFIX = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _classnames = _interopRequireDefault(require("classnames"));

var _buttons = require("../../buttons");

var _textInput = require("../../text-input");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var CLASS_PREFIX = 'evergreen-file-picker';
exports.CLASS_PREFIX = CLASS_PREFIX;
var FilePicker = (0, _react.memo)((0, _react.forwardRef)(function FilePicker(props, ref) {
  var name = props.name,
      accept = props.accept,
      required = props.required,
      multiple = props.multiple,
      onBlur = props.onBlur,
      disabled = props.disabled,
      capture = props.capture,
      height = props.height,
      onChange = props.onChange,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Select a file to upload…' : _props$placeholder,
      className = props.className,
      rest = (0, _objectWithoutProperties2["default"])(props, ["name", "accept", "required", "multiple", "onBlur", "disabled", "capture", "height", "onChange", "placeholder", "className"]);

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var fileInputRef = (0, _react.useRef)();
  var handleFileChange = (0, _react.useCallback)(function (e) {
    // Firefox returns the same array instance each time for some reason
    var filesCopy = (0, _toConsumableArray2["default"])(e.target.files);
    setFiles(filesCopy);
    (0, _safeInvoke["default"])(onChange, filesCopy);
  }, [onChange]);
  var handleButtonClick = (0, _react.useCallback)(function () {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [fileInputRef]);
  var handleBlur = (0, _react.useCallback)(function (e) {
    // Setting e.target.files to an array fails. It must be a FileList
    if (e && e.target) e.target.files = fileInputRef && fileInputRef.current && fileInputRef.current.files;
    (0, _safeInvoke["default"])(onBlur, e);
  }, [onBlur]);
  var inputValue;

  if (files.length === 0) {
    inputValue = '';
  } else if (files.length === 1) {
    inputValue = files[0].name;
  } else {
    inputValue = "".concat(files.length, " files");
  }

  var buttonText;

  if (files.length === 0) {
    buttonText = 'Select file';
  } else if (files.length === 1) {
    buttonText = 'Replace file';
  } else {
    buttonText = 'Replace files';
  }

  var rootClassNames = (0, _classnames["default"])("".concat(CLASS_PREFIX, "-root"), className);
  return _react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
    display: "flex",
    className: rootClassNames,
    ref: ref
  }, rest), _react["default"].createElement(_uiBox["default"], {
    ref: fileInputRef,
    className: "".concat(CLASS_PREFIX, "-file-input"),
    is: "input",
    type: "file",
    name: name,
    accept: accept,
    required: required,
    multiple: multiple,
    disabled: disabled,
    capture: capture,
    onChange: handleFileChange,
    display: "none"
  }), _react["default"].createElement(_textInput.TextInput, {
    className: "".concat(CLASS_PREFIX, "-text-input"),
    readOnly: true,
    value: inputValue,
    placeholder: placeholder // There's a weird specifity issue when there's two differently sized inputs on the page
    ,
    borderTopRightRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
    height: height,
    flex: 1,
    textOverflow: "ellipsis",
    onBlur: handleBlur
  }), _react["default"].createElement(_buttons.Button, {
    className: "".concat(CLASS_PREFIX, "-button"),
    onClick: handleButtonClick,
    disabled: disabled,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: height,
    flexShrink: 0,
    type: "button",
    onBlur: handleBlur
  }, buttonText));
}));
FilePicker.propTypes = {
  /**
   * Name attribute of the input.
   */
  name: _propTypes["default"].string,

  /**
   * The accept attribute of the input.
   */
  accept: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),

  /**
   * When true, the file picker is required.
   */
  required: _propTypes["default"].bool,

  /**
   * When true, accept multiple files.
   */
  multiple: _propTypes["default"].bool,

  /**
   * When true, the filepicker is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * The capture attribute of the input.
   */
  capture: _propTypes["default"].bool,

  /**
   * The height of the file picker.
   */
  height: _propTypes["default"].number,

  /**
   * Function called when onChange is fired.
   * (files: FileList) => void
   */
  onChange: _propTypes["default"].func,

  /**
   * Function called when onBlur is fired.
   * (event: React.FocusEvent) => void
   */
  onBlur: _propTypes["default"].func,

  /**
   * Placeholder of the text input
   */
  placeholder: _propTypes["default"].string,

  /**
   * Class name passed to the FilePicker.
   * Only use this if you know what you are doing.
   */
  className: _propTypes["default"].string
};
var _default = FilePicker;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWxlLXBpY2tlci9zcmMvRmlsZVBpY2tlci5qcyJdLCJuYW1lcyI6WyJDTEFTU19QUkVGSVgiLCJGaWxlUGlja2VyIiwicHJvcHMiLCJyZWYiLCJuYW1lIiwiYWNjZXB0IiwicmVxdWlyZWQiLCJtdWx0aXBsZSIsIm9uQmx1ciIsImRpc2FibGVkIiwiY2FwdHVyZSIsImhlaWdodCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJyZXN0IiwiZmlsZXMiLCJzZXRGaWxlcyIsImZpbGVJbnB1dFJlZiIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwiZmlsZXNDb3B5IiwidGFyZ2V0IiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVCbHVyIiwiaW5wdXRWYWx1ZSIsImxlbmd0aCIsImJ1dHRvblRleHQiLCJyb290Q2xhc3NOYW1lcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJib29sIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVPLElBQU1BLFlBQVksR0FBRyx1QkFBckI7O0FBRVAsSUFBTUMsVUFBVSxHQUFHLGlCQUNqQix1QkFBVyxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFBQSxNQUV2Q0MsSUFGdUMsR0FjckNGLEtBZHFDLENBRXZDRSxJQUZ1QztBQUFBLE1BR3ZDQyxNQUh1QyxHQWNyQ0gsS0FkcUMsQ0FHdkNHLE1BSHVDO0FBQUEsTUFJdkNDLFFBSnVDLEdBY3JDSixLQWRxQyxDQUl2Q0ksUUFKdUM7QUFBQSxNQUt2Q0MsUUFMdUMsR0FjckNMLEtBZHFDLENBS3ZDSyxRQUx1QztBQUFBLE1BTXZDQyxNQU51QyxHQWNyQ04sS0FkcUMsQ0FNdkNNLE1BTnVD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Ozs7QUFHQTNCLEVBQUFBLElBQUksRUFBRTRCLHNCQUFVQyxNQUpLOztBQU1yQjs7O0FBR0E1QixFQUFBQSxNQUFNLEVBQUUyQixzQkFBVUUsU0FBVixDQUFvQixDQUMxQkYsc0JBQVVDLE1BRGdCLEVBRTFCRCxzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVDLE1BQTVCLENBRjBCLENBQXBCLENBVGE7O0FBY3JCOzs7QUFHQTNCLEVBQUFBLFFBQVEsRUFBRTBCLHNCQUFVSSxJQWpCQzs7QUFtQnJCOzs7QUFHQTdCLEVBQUFBLFFBQVEsRUFBRXlCLHNCQUFVSSxJQXRCQzs7QUF3QnJCOzs7QUFHQTNCLEVBQUFBLFFBQVEsRUFBRXVCLHNCQUFVSSxJQTNCQzs7QUE2QnJCOzs7QUFHQTFCLEVBQUFBLE9BQU8sRUFBRXNCLHNCQUFVSSxJQWhDRTs7QUFrQ3JCOzs7QUFHQXpCLEVBQUFBLE1BQU0sRUFBRXFCLHNCQUFVSyxNQXJDRzs7QUF1Q3JCOzs7O0FBSUF6QixFQUFBQSxRQUFRLEVBQUVvQixzQkFBVU0sSUEzQ0M7O0FBNkNyQjs7OztBQUlBOUIsRUFBQUEsTUFBTSxFQUFFd0Isc0JBQVVNLElBakRHOztBQW1EckI7OztBQUdBekIsRUFBQUEsV0FBVyxFQUFFbUIsc0JBQVVDLE1BdERGOztBQXdEckI7Ozs7QUFJQW5CLEVBQUFBLFNBQVMsRUFBRWtCLHNCQUFVQztBQTVEQSxDQUF2QjtlQStEZWhDLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vdGV4dC1pbnB1dCdcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcblxuZXhwb3J0IGNvbnN0IENMQVNTX1BSRUZJWCA9ICdldmVyZ3JlZW4tZmlsZS1waWNrZXInXG5cbmNvbnN0IEZpbGVQaWNrZXIgPSBtZW1vKFxuICBmb3J3YXJkUmVmKGZ1bmN0aW9uIEZpbGVQaWNrZXIocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBhY2NlcHQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgb25CbHVyLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBjYXB0dXJlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBwbGFjZWhvbGRlciA9ICdTZWxlY3QgYSBmaWxlIHRvIHVwbG9hZOKApicsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZigpXG5cbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICBlID0+IHtcbiAgICAgICAgLy8gRmlyZWZveCByZXR1cm5zIHRoZSBzYW1lIGFycmF5IGluc3RhbmNlIGVhY2ggdGltZSBmb3Igc29tZSByZWFzb25cbiAgICAgICAgY29uc3QgZmlsZXNDb3B5ID0gWy4uLmUudGFyZ2V0LmZpbGVzXVxuXG4gICAgICAgIHNldEZpbGVzKGZpbGVzQ29weSlcblxuICAgICAgICBzYWZlSW52b2tlKG9uQ2hhbmdlLCBmaWxlc0NvcHkpXG4gICAgICB9LFxuICAgICAgW29uQ2hhbmdlXVxuICAgIClcblxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgaWYgKGZpbGVJbnB1dFJlZiAmJiBmaWxlSW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpXG4gICAgICB9XG4gICAgfSwgW2ZpbGVJbnB1dFJlZl0pXG5cbiAgICBjb25zdCBoYW5kbGVCbHVyID0gdXNlQ2FsbGJhY2soXG4gICAgICBlID0+IHtcbiAgICAgICAgLy8gU2V0dGluZyBlLnRhcmdldC5maWxlcyB0byBhbiBhcnJheSBmYWlscy4gSXQgbXVzdCBiZSBhIEZpbGVMaXN0XG4gICAgICAgIGlmIChlICYmIGUudGFyZ2V0KVxuICAgICAgICAgIGUudGFyZ2V0LmZpbGVzID1cbiAgICAgICAgICAgIGZpbGVJbnB1dFJlZiAmJiBmaWxlSW5wdXRSZWYuY3VycmVudCAmJiBmaWxlSW5wdXRSZWYuY3VycmVudC5maWxlc1xuXG4gICAgICAgIHNhZmVJbnZva2Uob25CbHVyLCBlKVxuICAgICAgfSxcbiAgICAgIFtvbkJsdXJdXG4gICAgKVxuXG4gICAgbGV0IGlucHV0VmFsdWVcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbnB1dFZhbHVlID0gJydcbiAgICB9IGVsc2UgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaW5wdXRWYWx1ZSA9IGZpbGVzWzBdLm5hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRWYWx1ZSA9IGAke2ZpbGVzLmxlbmd0aH0gZmlsZXNgXG4gICAgfVxuXG4gICAgbGV0IGJ1dHRvblRleHRcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1NlbGVjdCBmaWxlJ1xuICAgIH0gZWxzZSBpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1JlcGxhY2UgZmlsZSdcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSZXBsYWNlIGZpbGVzJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3RDbGFzc05hbWVzID0gY3goYCR7Q0xBU1NfUFJFRklYfS1yb290YCwgY2xhc3NOYW1lKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBjbGFzc05hbWU9e3Jvb3RDbGFzc05hbWVzfSByZWY9e3JlZn0gey4uLnJlc3R9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LWZpbGUtaW5wdXRgfVxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGFjY2VwdD17YWNjZXB0fVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGNhcHR1cmU9e2NhcHR1cmV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgZGlzcGxheT1cIm5vbmVcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tdGV4dC1pbnB1dGB9XG4gICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgLy8gVGhlcmUncyBhIHdlaXJkIHNwZWNpZml0eSBpc3N1ZSB3aGVuIHRoZXJlJ3MgdHdvIGRpZmZlcmVudGx5IHNpemVkIGlucHV0cyBvbiB0aGUgcGFnZVxuICAgICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPVwiMCAhaW1wb3J0YW50XCJcbiAgICAgICAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1cz1cIjAgIWltcG9ydGFudFwiXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICB0ZXh0T3ZlcmZsb3c9XCJlbGxpcHNpc1wiXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tYnV0dG9uYH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cz17MH1cbiAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPXswfVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICA+XG4gICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9KVxuKVxuXG5GaWxlUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBhY2NlcHQgYXR0cmlidXRlIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIGFjY2VwdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxuICBdKSxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgZmlsZSBwaWNrZXIgaXMgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgYWNjZXB0IG11bHRpcGxlIGZpbGVzLlxuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBmaWxlcGlja2VyIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgY2FwdHVyZSBhdHRyaWJ1dGUgb2YgdGhlIGlucHV0LlxuICAgKi9cbiAgY2FwdHVyZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGZpbGUgcGlja2VyLlxuICAgKi9cbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvbkNoYW5nZSBpcyBmaXJlZC5cbiAgICogKGZpbGVzOiBGaWxlTGlzdCkgPT4gdm9pZFxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvbkJsdXIgaXMgZmlyZWQuXG4gICAqIChldmVudDogUmVhY3QuRm9jdXNFdmVudCkgPT4gdm9pZFxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgb2YgdGhlIHRleHQgaW5wdXRcbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgRmlsZVBpY2tlci5cbiAgICogT25seSB1c2UgdGhpcyBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVBpY2tlclxuIl19