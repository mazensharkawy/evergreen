import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Paragraph } from '../../typography';
import { useTheme } from '../../theme';
var TooltipStateless = memo(forwardRef(function TooltipStateless(props, ref) {
  var theme = useTheme();

  var children = props.children,
      appearance = props.appearance,
      restProps = _objectWithoutProperties(props, ["children", "appearance"]);

  var _theme$getTooltipProp = theme.getTooltipProps(appearance),
      color = _theme$getTooltipProp.color,
      themedProps = _objectWithoutProperties(_theme$getTooltipProp, ["color"]);

  var child;

  if (typeof children === 'string') {
    child = React.createElement(Paragraph, {
      color: color,
      size: 400
    }, children);
  } else {
    child = children;
  }

  return React.createElement(Pane, _extends({
    ref: ref,
    borderRadius: 3,
    paddingX: 8,
    paddingY: 4,
    maxWidth: 240
  }, themedProps, restProps), child);
}));
TooltipStateless.propTypes = {
  children: PropTypes.node,

  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired
};
export default TooltipStateless;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29sdGlwL3NyYy9Ub29sdGlwU3RhdGVsZXNzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsImZvcndhcmRSZWYiLCJQcm9wVHlwZXMiLCJQYW5lIiwiUGFyYWdyYXBoIiwidXNlVGhlbWUiLCJUb29sdGlwU3RhdGVsZXNzIiwicHJvcHMiLCJyZWYiLCJ0aGVtZSIsImNoaWxkcmVuIiwiYXBwZWFyYW5jZSIsInJlc3RQcm9wcyIsImdldFRvb2x0aXBQcm9wcyIsImNvbG9yIiwidGhlbWVkUHJvcHMiLCJjaGlsZCIsInByb3BUeXBlcyIsIm5vZGUiLCJvbmVPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsSUFBaEIsRUFBc0JDLFVBQXRCLFFBQXdDLE9BQXhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsYUFBekI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBR04sSUFBSSxDQUMzQkMsVUFBVSxDQUFDLFNBQVNLLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDL0MsTUFBTUMsS0FBSyxHQUFHSixRQUFRLEVBQXRCOztBQUQrQyxNQUV2Q0ssUUFGdUMsR0FFQUgsS0FGQSxDQUV2Q0csUUFGdUM7QUFBQSxNQUU3QkMsVUFGNkIsR0FFQUosS0FGQSxDQUU3QkksVUFGNkI7QUFBQSxNQUVkQyxTQUZjLDRCQUVBTCxLQUZBOztBQUFBLDhCQUdiRSxLQUFLLENBQUNJLGVBQU4sQ0FBc0JGLFVBQXRCLENBSGE7QUFBQSxNQUd2Q0csS0FIdUMseUJBR3ZDQSxLQUh1QztBQUFBLE1BRzdCQyxXQUg2Qjs7QUFLL0MsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLE9BQU9OLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaENNLElBQUFBLEtBQUssR0FDSCxvQkFBQyxTQUFEO0FBQVcsTUFBQSxLQUFLLEVBQUVGLEtBQWxCO0FBQXlCLE1BQUEsSUFBSSxFQUFFO0FBQS9CLE9BQ0dKLFFBREgsQ0FERjtBQUtELEdBTkQsTUFNTztBQUNMTSxJQUFBQSxLQUFLLEdBQUdOLFFBQVI7QUFDRDs7QUFFRCxTQUNFLG9CQUFDLElBQUQ7QUFDRSxJQUFBLEdBQUcsRUFBRUYsR0FEUDtBQUVFLElBQUEsWUFBWSxFQUFFLENBRmhCO0FBR0UsSUFBQSxRQUFRLEVBQUUsQ0FIWjtBQUlFLElBQUEsUUFBUSxFQUFFLENBSlo7QUFLRSxJQUFBLFFBQVEsRUFBRTtBQUxaLEtBTU1PLFdBTk4sRUFPTUgsU0FQTixHQVNHSSxLQVRILENBREY7QUFhRCxDQTdCUyxDQURpQixDQUE3QjtBQWlDQVYsZ0JBQWdCLENBQUNXLFNBQWpCLEdBQTZCO0FBQzNCUCxFQUFBQSxRQUFRLEVBQUVSLFNBQVMsQ0FBQ2dCLElBRE87O0FBRzNCOzs7QUFHQVAsRUFBQUEsVUFBVSxFQUFFVCxTQUFTLENBQUNpQixLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLE1BQVosQ0FBaEIsRUFBcUNDO0FBTnRCLENBQTdCO0FBU0EsZUFBZWQsZ0JBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBUb29sdGlwU3RhdGVsZXNzID0gbWVtbyhcbiAgZm9yd2FyZFJlZihmdW5jdGlvbiBUb29sdGlwU3RhdGVsZXNzKHByb3BzLCByZWYpIHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhcHBlYXJhbmNlLCAuLi5yZXN0UHJvcHMgfSA9IHByb3BzXG4gICAgY29uc3QgeyBjb2xvciwgLi4udGhlbWVkUHJvcHMgfSA9IHRoZW1lLmdldFRvb2x0aXBQcm9wcyhhcHBlYXJhbmNlKVxuXG4gICAgbGV0IGNoaWxkXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkID0gKFxuICAgICAgICA8UGFyYWdyYXBoIGNvbG9yPXtjb2xvcn0gc2l6ZT17NDAwfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgIHBhZGRpbmdYPXs4fVxuICAgICAgICBwYWRkaW5nWT17NH1cbiAgICAgICAgbWF4V2lkdGg9ezI0MH1cbiAgICAgICAgey4uLnRoZW1lZFByb3BzfVxuICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGR9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9KVxuKVxuXG5Ub29sdGlwU3RhdGVsZXNzLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnY2FyZCddKS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBTdGF0ZWxlc3NcbiJdfQ==