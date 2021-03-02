"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _icons = require("../../icons");

var _OptionsList = _interopRequireDefault(require("./OptionsList"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var DefaultTitleView = function DefaultTitleView(_ref) {
  var close = _ref.close,
      title = _ref.title,
      headerHeight = _ref.headerHeight;
  return _react["default"].createElement(_layers.Pane, {
    display: "flex",
    alignItems: "center",
    borderBottom: "default",
    padding: 8,
    height: headerHeight,
    boxSizing: "border-box"
  }, _react["default"].createElement(_layers.Pane, {
    flex: "1",
    display: "flex",
    alignItems: "center"
  }, _react["default"].createElement(_typography.Heading, {
    size: 400
  }, title)), _react["default"].createElement(_buttons.IconButton, {
    icon: _icons.CrossIcon,
    appearance: "minimal",
    height: 24,
    onClick: close
  }));
};

DefaultTitleView.displayName = "DefaultTitleView";
DefaultTitleView.propTypes = {
  close: _propTypes["default"].func,
  title: _propTypes["default"].string,
  headerHeight: _propTypes["default"].number
};
var emptyArray = [];
var SelectMenuContent = (0, _react.memo)(function SelectMenuContent(props) {
  var title = props.title,
      width = props.width,
      height = props.height,
      _props$options = props.options,
      options = _props$options === void 0 ? emptyArray : _props$options,
      _props$hasTitle = props.hasTitle,
      hasTitle = _props$hasTitle === void 0 ? true : _props$hasTitle,
      _props$hasFilter = props.hasFilter,
      hasFilter = _props$hasFilter === void 0 ? true : _props$hasFilter,
      filterPlaceholder = props.filterPlaceholder,
      filterIcon = props.filterIcon,
      close = props.close,
      listProps = props.listProps,
      _props$titleView = props.titleView,
      titleView = _props$titleView === void 0 ? DefaultTitleView : _props$titleView,
      detailView = props.detailView,
      emptyView = props.emptyView,
      isMultiSelect = props.isMultiSelect,
      closeOnSelect = props.closeOnSelect;
  var headerHeight = 40;
  var optionsListHeight = hasTitle ? height - headerHeight : height;
  var hasDetailView = Boolean(detailView);
  var hasEmptyView = Boolean(emptyView);
  return _react["default"].createElement(_layers.Pane, {
    display: "flex",
    height: height
  }, _react["default"].createElement(_layers.Pane, {
    width: width,
    height: height,
    display: "flex",
    flexDirection: "column",
    borderRight: hasDetailView ? 'muted' : null,
    borderRadius: 10
  }, hasTitle && titleView({
    close: close,
    title: title,
    headerHeight: headerHeight
  }), options.length === 0 && hasEmptyView ? _react["default"].createElement(_layers.Pane, {
    height: optionsListHeight
  }, emptyView) : _react["default"].createElement(_OptionsList["default"], (0, _extends2["default"])({
    height: optionsListHeight,
    hasFilter: hasFilter,
    filterPlaceholder: filterPlaceholder,
    filterIcon: filterIcon,
    options: options,
    isMultiSelect: isMultiSelect,
    close: close,
    closeOnSelect: closeOnSelect
  }, listProps))), hasDetailView && detailView);
});
SelectMenuContent.propTypes = {
  close: _propTypes["default"].func,
  title: _propTypes["default"].string,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  headerHeight: _propTypes["default"].number,
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),
  hasTitle: _propTypes["default"].bool,
  hasFilter: _propTypes["default"].bool,
  filterPlaceholder: _propTypes["default"].string,
  filterIcon: _propTypes["default"].oneOfType([_propTypes["default"].elementType, _propTypes["default"].element]),
  listProps: _propTypes["default"].shape(_OptionsList["default"].propTypes),

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool,

  /**
   * Node that is placed in the header section, above the options.
   */
  titleView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Node that is placed right next to the options.
   */
  detailView: _propTypes["default"].node,

  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView: _propTypes["default"].node
};
var _default = SelectMenuContent;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudUNvbnRlbnQuanMiXSwibmFtZXMiOlsiRGVmYXVsdFRpdGxlVmlldyIsImNsb3NlIiwidGl0bGUiLCJoZWFkZXJIZWlnaHQiLCJDcm9zc0ljb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwic3RyaW5nIiwibnVtYmVyIiwiZW1wdHlBcnJheSIsIlNlbGVjdE1lbnVDb250ZW50IiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJoYXNUaXRsZSIsImhhc0ZpbHRlciIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVySWNvbiIsImxpc3RQcm9wcyIsInRpdGxlVmlldyIsImRldGFpbFZpZXciLCJlbXB0eVZpZXciLCJpc011bHRpU2VsZWN0IiwiY2xvc2VPblNlbGVjdCIsIm9wdGlvbnNMaXN0SGVpZ2h0IiwiaGFzRGV0YWlsVmlldyIsIkJvb2xlYW4iLCJoYXNFbXB0eVZpZXciLCJsZW5ndGgiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsImJvb2wiLCJlbGVtZW50VHlwZSIsImVsZW1lbnQiLCJzaGFwZSIsIk9wdGlvbnNMaXN0Iiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxLQUFWLFFBQVVBLEtBQVY7QUFBQSxNQUFpQkMsWUFBakIsUUFBaUJBLFlBQWpCO0FBQUEsU0FDdkIsZ0NBQUMsWUFBRDtBQUNFLElBQUEsT0FBTyxFQUFDLE1BRFY7QUFFRSxJQUFBLFVBQVUsRUFBQyxRQUZiO0FBR0UsSUFBQSxZQUFZLEVBQUMsU0FIZjtBQUlFLElBQUEsT0FBTyxFQUFFLENBSlg7QUFLRSxJ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QUFFVCxzQkFBVTBCLE9BQVYsQ0FBa0JDLCtCQUFsQixDQU5tQjtBQU81QmpCLEVBQUFBLFFBQVEsRUFBRVYsc0JBQVU0QixJQVBRO0FBUTVCakIsRUFBQUEsU0FBUyxFQUFFWCxzQkFBVTRCLElBUk87QUFTNUJoQixFQUFBQSxpQkFBaUIsRUFBRVosc0JBQVVFLE1BVEQ7QUFVNUJXLEVBQUFBLFVBQVUsRUFBRWIsc0JBQVV5QixTQUFWLENBQW9CLENBQUN6QixzQkFBVTZCLFdBQVgsRUFBd0I3QixzQkFBVThCLE9BQWxDLENBQXBCLENBVmdCO0FBVzVCaEIsRUFBQUEsU0FBUyxFQUFFZCxzQkFBVStCLEtBQVYsQ0FBZ0JDLHdCQUFZakMsU0FBNUIsQ0FYaUI7O0FBYTVCOzs7QUFHQW1CLEVBQUFBLGFBQWEsRUFBRWxCLHNCQUFVNEIsSUFoQkc7O0FBa0I1Qjs7O0FBR0FULEVBQUFBLGFBQWEsRUFBRW5CLHNCQUFVNEIsSUFyQkc7O0FBdUI1Qjs7O0FBR0FiLEVBQUFBLFNBQVMsRUFBRWYsc0JBQVV5QixTQUFWLENBQW9CLENBQUN6QixzQkFBVUMsSUFBWCxFQUFpQkQsc0JBQVVpQyxJQUEzQixDQUFwQixDQTFCaUI7O0FBNEI1Qjs7O0FBR0FqQixFQUFBQSxVQUFVLEVBQUVoQixzQkFBVWlDLElBL0JNOztBQWlDNUI7OztBQUdBaEIsRUFBQUEsU0FBUyxFQUFFakIsc0JBQVVpQztBQXBDTyxDQUE5QjtlQXVDZTVCLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi4vLi4vaWNvbnMnXG5pbXBvcnQgT3B0aW9uc0xpc3QgZnJvbSAnLi9PcHRpb25zTGlzdCdcbmltcG9ydCBPcHRpb25TaGFwZVByb3BUeXBlIGZyb20gJy4vT3B0aW9uU2hhcGVQcm9wVHlwZSdcblxuY29uc3QgRGVmYXVsdFRpdGxlVmlldyA9ICh7IGNsb3NlLCB0aXRsZSwgaGVhZGVySGVpZ2h0IH0pID0+IChcbiAgPFBhbmVcbiAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgYm9yZGVyQm90dG9tPVwiZGVmYXVsdFwiXG4gICAgcGFkZGluZz17OH1cbiAgICBoZWlnaHQ9e2hlYWRlckhlaWdodH1cbiAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgPlxuICAgIDxQYW5lIGZsZXg9XCIxXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICA8SGVhZGluZyBzaXplPXs0MDB9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgPC9QYW5lPlxuICAgIDxJY29uQnV0dG9uXG4gICAgICBpY29uPXtDcm9zc0ljb259XG4gICAgICBhcHBlYXJhbmNlPVwibWluaW1hbFwiXG4gICAgICBoZWlnaHQ9ezI0fVxuICAgICAgb25DbGljaz17Y2xvc2V9XG4gICAgLz5cbiAgPC9QYW5lPlxuKVxuXG5EZWZhdWx0VGl0bGVWaWV3LnByb3BUeXBlcyA9IHtcbiAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IGVtcHR5QXJyYXkgPSBbXVxuXG5jb25zdCBTZWxlY3RNZW51Q29udGVudCA9IG1lbW8oZnVuY3Rpb24gU2VsZWN0TWVudUNvbnRlbnQocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBvcHRpb25zID0gZW1wdHlBcnJheSxcbiAgICBoYXNUaXRsZSA9IHRydWUsXG4gICAgaGFzRmlsdGVyID0gdHJ1ZSxcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcixcbiAgICBmaWx0ZXJJY29uLFxuICAgIGNsb3NlLFxuICAgIGxpc3RQcm9wcyxcbiAgICB0aXRsZVZpZXcgPSBEZWZhdWx0VGl0bGVWaWV3LFxuICAgIGRldGFpbFZpZXcsXG4gICAgZW1wdHlWaWV3LFxuICAgIGlzTXVsdGlTZWxlY3QsXG4gICAgY2xvc2VPblNlbGVjdFxuICB9ID0gcHJvcHNcblxuICBjb25zdCBoZWFkZXJIZWlnaHQgPSA0MFxuICBjb25zdCBvcHRpb25zTGlzdEhlaWdodCA9IGhhc1RpdGxlID8gaGVpZ2h0IC0gaGVhZGVySGVpZ2h0IDogaGVpZ2h0XG5cbiAgY29uc3QgaGFzRGV0YWlsVmlldyA9IEJvb2xlYW4oZGV0YWlsVmlldylcbiAgY29uc3QgaGFzRW1wdHlWaWV3ID0gQm9vbGVhbihlbXB0eVZpZXcpXG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGhlaWdodD17aGVpZ2h0fT5cbiAgICAgIDxQYW5lXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGJvcmRlclJpZ2h0PXtoYXNEZXRhaWxWaWV3ID8gJ211dGVkJyA6IG51bGx9XG4gICAgICAgIGJvcmRlclJhZGl1cz17MTB9XG4gICAgICA+XG4gICAgICAgIHtoYXNUaXRsZSAmJiB0aXRsZVZpZXcoeyBjbG9zZSwgdGl0bGUsIGhlYWRlckhlaWdodCB9KX1cbiAgICAgICAge29wdGlvbnMubGVuZ3RoID09PSAwICYmIGhhc0VtcHR5VmlldyA/IChcbiAgICAgICAgICA8UGFuZSBoZWlnaHQ9e29wdGlvbnNMaXN0SGVpZ2h0fT57ZW1wdHlWaWV3fTwvUGFuZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8T3B0aW9uc0xpc3RcbiAgICAgICAgICAgIGhlaWdodD17b3B0aW9uc0xpc3RIZWlnaHR9XG4gICAgICAgICAgICBoYXNGaWx0ZXI9e2hhc0ZpbHRlcn1cbiAgICAgICAgICAgIGZpbHRlclBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIGZpbHRlckljb249e2ZpbHRlckljb259XG4gICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgaXNNdWx0aVNlbGVjdD17aXNNdWx0aVNlbGVjdH1cbiAgICAgICAgICAgIGNsb3NlPXtjbG9zZX1cbiAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q9e2Nsb3NlT25TZWxlY3R9XG4gICAgICAgICAgICB7Li4ubGlzdFByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1BhbmU+XG4gICAgICB7aGFzRGV0YWlsVmlldyAmJiBkZXRhaWxWaWV3fVxuICAgIDwvUGFuZT5cbiAgKVxufSlcblxuU2VsZWN0TWVudUNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgaGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihPcHRpb25TaGFwZVByb3BUeXBlKSxcbiAgaGFzVGl0bGU6IFByb3BUeXBlcy5ib29sLFxuICBoYXNGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmlsdGVySWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBsaXN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZShPcHRpb25zTGlzdC5wcm9wVHlwZXMpLFxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIG11bHRpIHNlbGVjdCBpcyBhY2NvdW50ZWQgZm9yLlxuICAgKi9cbiAgaXNNdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLypcbiAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgKi9cbiAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5vZGUgdGhhdCBpcyBwbGFjZWQgaW4gdGhlIGhlYWRlciBzZWN0aW9uLCBhYm92ZSB0aGUgb3B0aW9ucy5cbiAgICovXG4gIHRpdGxlVmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgLyoqXG4gICAqIE5vZGUgdGhhdCBpcyBwbGFjZWQgcmlnaHQgbmV4dCB0byB0aGUgb3B0aW9ucy5cbiAgICovXG4gIGRldGFpbFZpZXc6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBOb2RlIHRoYXQgaXMgZGlzcGxheWVkIGluc3RlYWQgb2Ygb3B0aW9ucyBsaXN0IHdoZW4gdGhlcmUgYXJlIG5vIG9wdGlvbnMuXG4gICAqL1xuICBlbXB0eVZpZXc6IFByb3BUeXBlcy5ub2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdE1lbnVDb250ZW50XG4iXX0=