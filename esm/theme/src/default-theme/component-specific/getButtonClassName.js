import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
import { getTextColorForIntent, getPrimaryButtonStylesForIntent } from '../helpers';
import { defaultControlStyles } from '../shared';
/**
 * Disabled styles are all the same for all buttons.
 */

var disabled = defaultControlStyles.disabled;
/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */

var getButtonAppearance = function getButtonAppearance(appearance, intent) {
  switch (appearance) {
    case 'primary':
      {
        var _getPrimaryButtonStyl = getPrimaryButtonStylesForIntent(intent),
            linearGradient = _getPrimaryButtonStyl.linearGradient,
            focusColor = _getPrimaryButtonStyl.focusColor;

        return Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: 'white',
            backgroundColor: 'white',
            backgroundImage: linearGradient.base,
            boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N5A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
          },
          hover: {
            backgroundImage: linearGradient.hover
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(scales.neutral.N4A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N5A)
          },
          active: {
            backgroundImage: linearGradient.active,
            boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
          },
          focusAndActive: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(scales.neutral.N4A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
          }
        });
      }

    case 'minimal':
      {
        var intentTextColor = getTextColorForIntent(intent, scales.blue.B9);
        return Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: intentTextColor,
            backgroundColor: 'transparent'
          },
          hover: {
            backgroundColor: scales.neutral.N2A
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(scales.blue.B5A)
          },
          active: {
            backgroundImage: 'none',
            backgroundColor: scales.blue.B3A
          },
          focusAndActive: {}
        });
      }

    case 'default':
    default:
      {
        var _intentTextColor = getTextColorForIntent(intent);

        return Themer.createButtonAppearance({
          disabled: disabled,
          base: _objectSpread({
            color: _intentTextColor
          }, defaultControlStyles.base),
          hover: defaultControlStyles.hover,
          focus: defaultControlStyles.focus,
          active: defaultControlStyles.active,
          focusAndActive: defaultControlStyles.focusAndActive
        });
      }
  }
};
/**
 * Get the className of a `Button`|`IconButton`.
 * @param {string} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getButtonAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0QnV0dG9uQ2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIlRoZW1lciIsIm1lbW9pemVDbGFzc05hbWUiLCJzY2FsZXMiLCJnZXRUZXh0Q29sb3JGb3JJbnRlbnQiLCJnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50IiwiZGVmYXVsdENvbnRyb2xTdHlsZXMiLCJkaXNhYmxlZCIsImdldEJ1dHRvbkFwcGVhcmFuY2UiLCJhcHBlYXJhbmNlIiwiaW50ZW50IiwibGluZWFyR3JhZGllbnQiLCJmb2N1c0NvbG9yIiwiY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSIsImJhc2UiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImJveFNoYWRvdyIsIm5ldXRyYWwiLCJONUEiLCJOMkEiLCJob3ZlciIsImZvY3VzIiwiTjRBIiwiYWN0aXZlIiwiZm9jdXNBbmRBY3RpdmUiLCJpbnRlbnRUZXh0Q29sb3IiLCJibHVlIiwiQjkiLCJCNUEiLCJCM0EiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLE1BQVQsUUFBdUIsb0JBQXZCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsMkJBQTdCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwrQkFBbkI7QUFDQSxTQUNFQyxxQkFERixFQUVFQywrQkFGRixRQUdPLFlBSFA7QUFJQSxTQUFTQyxvQkFBVCxRQUFxQyxXQUFyQztBQUVBOzs7O0lBR1FDLFEsR0FBYUQsb0IsQ0FBYkMsUTtBQUVSOzs7Ozs7O0FBTUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxVQUFELEVBQWFDLE1BQWIsRUFBd0I7QUFDbEQsVUFBUUQsVUFBUjtBQUNFLFNBQUssU0FBTDtBQUFnQjtBQUFBLG9DQUN5QkosK0JBQStCLENBQ3BFSyxNQURvRSxDQUR4RDtBQUFBLFlBQ05DLGNBRE0s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QUFFcEIsb0JBQW9CLENBQUNvQjtBQVRGLFNBQTlCLENBQVA7QUFXRDtBQWpFSDtBQW1FRCxDQXBFRDtBQXNFQTs7Ozs7Ozs7QUFNQSxlQUFleEIsZ0JBQWdCLENBQUNNLG1CQUFELENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQge1xuICBnZXRUZXh0Q29sb3JGb3JJbnRlbnQsXG4gIGdldFByaW1hcnlCdXR0b25TdHlsZXNGb3JJbnRlbnRcbn0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IGRlZmF1bHRDb250cm9sU3R5bGVzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuXG4vKipcbiAqIERpc2FibGVkIHN0eWxlcyBhcmUgYWxsIHRoZSBzYW1lIGZvciBhbGwgYnV0dG9ucy5cbiAqL1xuY29uc3QgeyBkaXNhYmxlZCB9ID0gZGVmYXVsdENvbnRyb2xTdHlsZXNcblxuLyoqXG4gKiBHZXQgYnV0dG9uIGFwcGVhcmFuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIGRlZmF1bHQsIHByaW1hcnksIG1pbmltYWwuXG4gKiBAcGFyYW0ge3N0cmluZ30gaW50ZW50IC0gbm9uZSwgc3VjY2Vzcywgd2FybmluZywgZGFuZ2VyLlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICovXG5jb25zdCBnZXRCdXR0b25BcHBlYXJhbmNlID0gKGFwcGVhcmFuY2UsIGludGVudCkgPT4ge1xuICBzd2l0Y2ggKGFwcGVhcmFuY2UpIHtcbiAgICBjYXNlICdwcmltYXJ5Jzoge1xuICAgICAgY29uc3QgeyBsaW5lYXJHcmFkaWVudCwgZm9jdXNDb2xvciB9ID0gZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudChcbiAgICAgICAgaW50ZW50XG4gICAgICApXG4gICAgICByZXR1cm4gVGhlbWVyLmNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2Uoe1xuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgYmFzZToge1xuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGxpbmVhckdyYWRpZW50LmJhc2UsXG4gICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjVBfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjJBfWBcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGxpbmVhckdyYWRpZW50LmhvdmVyXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7Zm9jdXNDb2xvcn0sIGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgLTFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk41QX1gXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQuYWN0aXZlLFxuICAgICAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjJBfWBcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNBbmRBY3RpdmU6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtmb2N1c0NvbG9yfSwgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAxcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgJ21pbmltYWwnOiB7XG4gICAgICBjb25zdCBpbnRlbnRUZXh0Q29sb3IgPSBnZXRUZXh0Q29sb3JGb3JJbnRlbnQoaW50ZW50LCBzY2FsZXMuYmx1ZS5COSlcbiAgICAgIHJldHVybiBUaGVtZXIuY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSh7XG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgY29sb3I6IGludGVudFRleHRDb2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yQVxuICAgICAgICB9LFxuICAgICAgICBmb2N1czoge1xuICAgICAgICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke3NjYWxlcy5ibHVlLkI1QX1gXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjNBXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzQW5kQWN0aXZlOiB7fVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBpbnRlbnRUZXh0Q29sb3IgPSBnZXRUZXh0Q29sb3JGb3JJbnRlbnQoaW50ZW50KVxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVCdXR0b25BcHBlYXJhbmNlKHtcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogaW50ZW50VGV4dENvbG9yLFxuICAgICAgICAgIC4uLmRlZmF1bHRDb250cm9sU3R5bGVzLmJhc2VcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IGRlZmF1bHRDb250cm9sU3R5bGVzLmhvdmVyLFxuICAgICAgICBmb2N1czogZGVmYXVsdENvbnRyb2xTdHlsZXMuZm9jdXMsXG4gICAgICAgIGFjdGl2ZTogZGVmYXVsdENvbnRyb2xTdHlsZXMuYWN0aXZlLFxuICAgICAgICBmb2N1c0FuZEFjdGl2ZTogZGVmYXVsdENvbnRyb2xTdHlsZXMuZm9jdXNBbmRBY3RpdmVcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgQnV0dG9uYHxgSWNvbkJ1dHRvbmAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIGRlZmF1bHQsIHByaW1hcnksIG1pbmltYWwuXG4gKiBAcGFyYW0ge0ludGVudH0gaW50ZW50IC0gbm9uZSwgc3VjY2Vzcywgd2FybmluZywgZGFuZ2VyLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldEJ1dHRvbkFwcGVhcmFuY2UpXG4iXX0=