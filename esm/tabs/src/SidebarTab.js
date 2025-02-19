import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo, forwardRef } from 'react';
import Box from 'ui-box';
import Tab from './Tab';
var styles = {
  width: '100%',
  paddingX: 0,
  paddingLeft: 8,
  marginX: 0,
  marginBottom: 4,
  justifyContent: 'auto'
};
var SidebarTab = memo(forwardRef(function SidebarTab(props, ref) {
  var children = props.children,
      _props$height = props.height,
      height = _props$height === void 0 ? 32 : _props$height,
      isSelected = props.isSelected,
      rest = _objectWithoutProperties(props, ["children", "height", "isSelected"]);

  return React.createElement(Tab, _extends({
    isSelected: isSelected,
    height: height
  }, styles, rest, {
    ref: ref,
    display: "flex"
  }), React.createElement(Box, {
    is: "span",
    flex: "1"
  }, children));
}));
SidebarTab.propTypes = Tab.propTypes;
export default SidebarTab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9TaWRlYmFyVGFiLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJCb3giLCJUYWIiLCJzdHlsZXMiLCJ3aWR0aCIsInBhZGRpbmdYIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5YIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJTaWRlYmFyVGFiIiwicHJvcHMiLCJyZWYiLCJjaGlsZHJlbiIsImhlaWdodCIsImlzU2VsZWN0ZWQiLCJyZXN0IiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLElBQWhCLEVBQXNCQyxVQUF0QixRQUF3QyxPQUF4QztBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLE9BQWhCO0FBRUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLEtBQUssRUFBRSxNQURNO0FBRWJDLEVBQUFBLFFBQVEsRUFBRSxDQUZHO0FBR2JDLEVBQUFBLFdBQVcsRUFBRSxDQUhBO0FBSWJDLEVBQUFBLE9BQU8sRUFBRSxDQUpJO0FBS2JDLEVBQUFBLFlBQVksRUFBRSxDQUxEO0FBTWJDLEVBQUFBLGNBQWMsRUFBRTtBQU5ILENBQWY7QUFTQSxJQUFNQyxVQUFVLEdBQUdYLElBQUksQ0FDckJDLFVBQVUsQ0FBQyxTQUFTVSxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFBQSxNQUNqQ0MsUUFEaUMsR0FDY0YsS0FEZCxDQUNqQ0UsUUFEaUM7QUFBQSxzQkFDY0YsS0FEZCxDQUN2QkcsTUFEdUI7QUFBQSxNQUN2QkEsTUFEdUIsOEJBQ2QsRUFEYztBQUFBLE1BQ1ZDLFVBRFUsR0FDY0osS0FEZCxDQUNWSSxVQURVO0FBQUEsTUFDS0MsSUFETCw0QkFDY0wsS0FEZDs7QUFHekMsU0FDRSxvQkFBQyxHQUFEO0FBQ0UsSUFBQSxVQUFVLEVBQUVJLFVBRGQ7QUFFRSxJQUFBLE1BQU0sRUFBRUQ7QUFGVixLQUdNWCxNQUhOLEVBSU1hLElBSk47QUFLRSxJQUFBLEdBQUcsRUFBRUosR0FMUDtBQU1FLElBQUEsT0FBTyxFQUFDO0FBTlYsTUFRRSxvQkFBQyxHQUFEO0FBQUssSUFBQSxFQUFFLEVBQUMsTUFBUjtBQUFlLElBQUEsSUFBSSxFQUFDO0FBQXBCLEtBQ0dDLFFBREgsQ0FSRixDQURGO0FBY0QsQ0FqQlMsQ0FEVyxDQUF2QjtBQXFCQUgsVUFBVSxDQUFDTyxTQUFYLEdBQXVCZixHQUFHLENBQUNlLFNBQTNCO0FBRUEsZUFBZVAsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCBUYWIgZnJvbSAnLi9UYWInXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZ1g6IDAsXG4gIHBhZGRpbmdMZWZ0OiA4LFxuICBtYXJnaW5YOiAwLFxuICBtYXJnaW5Cb3R0b206IDQsXG4gIGp1c3RpZnlDb250ZW50OiAnYXV0bydcbn1cblxuY29uc3QgU2lkZWJhclRhYiA9IG1lbW8oXG4gIGZvcndhcmRSZWYoZnVuY3Rpb24gU2lkZWJhclRhYihwcm9wcywgcmVmKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaGVpZ2h0ID0gMzIsIGlzU2VsZWN0ZWQsIC4uLnJlc3QgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRhYlxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgey4uLnN0eWxlc31cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICA+XG4gICAgICAgIDxCb3ggaXM9XCJzcGFuXCIgZmxleD1cIjFcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9UYWI+XG4gICAgKVxuICB9KVxuKVxuXG5TaWRlYmFyVGFiLnByb3BUeXBlcyA9IFRhYi5wcm9wVHlwZXNcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclRhYlxuIl19