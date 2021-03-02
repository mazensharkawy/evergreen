import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo, forwardRef, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import cx from 'classnames';
import { Button } from '../../buttons';
import { TextInput } from '../../text-input';
import safeInvoke from '../../lib/safe-invoke';
export var CLASS_PREFIX = 'evergreen-file-picker';
var FilePicker = memo(forwardRef(function FilePicker(props, ref) {
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
      rest = _objectWithoutProperties(props, ["name", "accept", "required", "multiple", "onBlur", "disabled", "capture", "height", "onChange", "placeholder", "className"]);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var fileInputRef = useRef();
  var handleFileChange = useCallback(function (e) {
    // Firefox returns the same array instance each time for some reason
    var filesCopy = _toConsumableArray(e.target.files);

    setFiles(filesCopy);
    safeInvoke(onChange, filesCopy);
  }, [onChange]);
  var handleButtonClick = useCallback(function () {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [fileInputRef]);
  var handleBlur = useCallback(function (e) {
    // Setting e.target.files to an array fails. It must be a FileList
    if (e && e.target) e.target.files = fileInputRef && fileInputRef.current && fileInputRef.current.files;
    safeInvoke(onBlur, e);
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

  var rootClassNames = cx("".concat(CLASS_PREFIX, "-root"), className);
  return React.createElement(Box, _extends({
    display: "flex",
    className: rootClassNames,
    ref: ref
  }, rest), React.createElement(Box, {
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
  }), React.createElement(TextInput, {
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
  }), React.createElement(Button, {
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
  name: PropTypes.string,

  /**
   * The accept attribute of the input.
   */
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /**
   * When true, the file picker is required.
   */
  required: PropTypes.bool,

  /**
   * When true, accept multiple files.
   */
  multiple: PropTypes.bool,

  /**
   * When true, the filepicker is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The capture attribute of the input.
   */
  capture: PropTypes.bool,

  /**
   * The height of the file picker.
   */
  height: PropTypes.number,

  /**
   * Function called when onChange is fired.
   * (files: FileList) => void
   */
  onChange: PropTypes.func,

  /**
   * Function called when onBlur is fired.
   * (event: React.FocusEvent) => void
   */
  onBlur: PropTypes.func,

  /**
   * Placeholder of the text input
   */
  placeholder: PropTypes.string,

  /**
   * Class name passed to the FilePicker.
   * Only use this if you know what you are doing.
   */
  className: PropTypes.string
};
export default FilePicker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWxlLXBpY2tlci9zcmMvRmlsZVBpY2tlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJmb3J3YXJkUmVmIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIlByb3BUeXBlcyIsIkJveCIsImN4IiwiQnV0dG9uIiwiVGV4dElucHV0Iiwic2FmZUludm9rZSIsIkNMQVNTX1BSRUZJWCIsIkZpbGVQaWNrZXIiLCJwcm9wcyIsInJlZiIsIm5hbWUiLCJhY2NlcHQiLCJyZXF1aXJlZCIsIm11bHRpcGxlIiwib25CbHVyIiwiZGlzYWJsZWQiLCJjYXB0dXJlIiwiaGVpZ2h0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsInJlc3QiLCJmaWxlcyIsInNldEZpbGVzIiwiZmlsZUlucHV0UmVmIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJmaWxlc0NvcHkiLCJ0YXJnZXQiLCJoYW5kbGVCdXR0b25DbGljayIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUJsdXIiLCJpbnB1dFZhbHVlIiwibGVuZ3RoIiwiYnV0dG9uVGV4dCIsInJvb3RDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsImJvb2wiLCJudW1iZXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLEVBQWtDQyxRQUFsQyxFQUE0Q0MsTUFBNUMsRUFBb0RDLFdBQXBELFFBQXVFLE9BQXZFO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsZUFBdkI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsdUJBQXZCO0FBRUEsT0FBTyxJQUFN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O0FBNkNyQjs7OztBQUlBN0IsRUFBQUEsTUFBTSxFQUFFZCxTQUFTLENBQUMyQyxJQWpERzs7QUFtRHJCOzs7QUFHQXhCLEVBQUFBLFdBQVcsRUFBRW5CLFNBQVMsQ0FBQ3NDLE1BdERGOztBQXdEckI7Ozs7QUFJQWxCLEVBQUFBLFNBQVMsRUFBRXBCLFNBQVMsQ0FBQ3NDO0FBNURBLENBQXZCO0FBK0RBLGVBQWUvQixVQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL3RleHQtaW5wdXQnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5cbmV4cG9ydCBjb25zdCBDTEFTU19QUkVGSVggPSAnZXZlcmdyZWVuLWZpbGUtcGlja2VyJ1xuXG5jb25zdCBGaWxlUGlja2VyID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBGaWxlUGlja2VyKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgYWNjZXB0LFxuICAgICAgcmVxdWlyZWQsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG9uQmx1cixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgY2FwdHVyZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgcGxhY2Vob2xkZXIgPSAnU2VsZWN0IGEgZmlsZSB0byB1cGxvYWTigKYnLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWYoKVxuXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgZSA9PiB7XG4gICAgICAgIC8vIEZpcmVmb3ggcmV0dXJucyB0aGUgc2FtZSBhcnJheSBpbnN0YW5jZSBlYWNoIHRpbWUgZm9yIHNvbWUgcmVhc29uXG4gICAgICAgIGNvbnN0IGZpbGVzQ29weSA9IFsuLi5lLnRhcmdldC5maWxlc11cblxuICAgICAgICBzZXRGaWxlcyhmaWxlc0NvcHkpXG5cbiAgICAgICAgc2FmZUludm9rZShvbkNoYW5nZSwgZmlsZXNDb3B5KVxuICAgICAgfSxcbiAgICAgIFtvbkNoYW5nZV1cbiAgICApXG5cbiAgICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGlmIChmaWxlSW5wdXRSZWYgJiYgZmlsZUlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKVxuICAgICAgfVxuICAgIH0sIFtmaWxlSW5wdXRSZWZdKVxuXG4gICAgY29uc3QgaGFuZGxlQmx1ciA9IHVzZUNhbGxiYWNrKFxuICAgICAgZSA9PiB7XG4gICAgICAgIC8vIFNldHRpbmcgZS50YXJnZXQuZmlsZXMgdG8gYW4gYXJyYXkgZmFpbHMuIEl0IG11c3QgYmUgYSBGaWxlTGlzdFxuICAgICAgICBpZiAoZSAmJiBlLnRhcmdldClcbiAgICAgICAgICBlLnRhcmdldC5maWxlcyA9XG4gICAgICAgICAgICBmaWxlSW5wdXRSZWYgJiYgZmlsZUlucHV0UmVmLmN1cnJlbnQgJiYgZmlsZUlucHV0UmVmLmN1cnJlbnQuZmlsZXNcblxuICAgICAgICBzYWZlSW52b2tlKG9uQmx1ciwgZSlcbiAgICAgIH0sXG4gICAgICBbb25CbHVyXVxuICAgIClcblxuICAgIGxldCBpbnB1dFZhbHVlXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5wdXRWYWx1ZSA9ICcnXG4gICAgfSBlbHNlIGlmIChmaWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlucHV0VmFsdWUgPSBmaWxlc1swXS5uYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0VmFsdWUgPSBgJHtmaWxlcy5sZW5ndGh9IGZpbGVzYFxuICAgIH1cblxuICAgIGxldCBidXR0b25UZXh0XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdTZWxlY3QgZmlsZSdcbiAgICB9IGVsc2UgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSZXBsYWNlIGZpbGUnXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnUmVwbGFjZSBmaWxlcydcbiAgICB9XG5cbiAgICBjb25zdCByb290Q2xhc3NOYW1lcyA9IGN4KGAke0NMQVNTX1BSRUZJWH0tcm9vdGAsIGNsYXNzTmFtZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgY2xhc3NOYW1lPXtyb290Q2xhc3NOYW1lc30gcmVmPXtyZWZ9IHsuLi5yZXN0fT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS1maWxlLWlucHV0YH1cbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBhY2NlcHQ9e2FjY2VwdH1cbiAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgbXVsdGlwbGU9e211bHRpcGxlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBjYXB0dXJlPXtjYXB0dXJlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgIGRpc3BsYXk9XCJub25lXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LXRleHQtaW5wdXRgfVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIC8vIFRoZXJlJ3MgYSB3ZWlyZCBzcGVjaWZpdHkgaXNzdWUgd2hlbiB0aGVyZSdzIHR3byBkaWZmZXJlbnRseSBzaXplZCBpbnB1dHMgb24gdGhlIHBhZ2VcbiAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz1cIjAgIWltcG9ydGFudFwiXG4gICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgdGV4dE92ZXJmbG93PVwiZWxsaXBzaXNcIlxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LWJ1dHRvbmB9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz17MH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cbiAgICAgICAgPlxuICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfSlcbilcblxuRmlsZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgYWNjZXB0IGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQuXG4gICAqL1xuICBhY2NlcHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbiAgXSksXG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgdGhlIGZpbGUgcGlja2VyIGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGFjY2VwdCBtdWx0aXBsZSBmaWxlcy5cbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCB0aGUgZmlsZXBpY2tlciBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGNhcHR1cmUgYXR0cmlidXRlIG9mIHRoZSBpbnB1dC5cbiAgICovXG4gIGNhcHR1cmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBmaWxlIHBpY2tlci5cbiAgICovXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb25DaGFuZ2UgaXMgZmlyZWQuXG4gICAqIChmaWxlczogRmlsZUxpc3QpID0+IHZvaWRcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb25CbHVyIGlzIGZpcmVkLlxuICAgKiAoZXZlbnQ6IFJlYWN0LkZvY3VzRXZlbnQpID0+IHZvaWRcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFBsYWNlaG9sZGVyIG9mIHRoZSB0ZXh0IGlucHV0XG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIEZpbGVQaWNrZXIuXG4gICAqIE9ubHkgdXNlIHRoaXMgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVQaWNrZXJcbiJdfQ==