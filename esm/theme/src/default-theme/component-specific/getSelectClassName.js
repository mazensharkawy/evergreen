import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import { defaultControlStyles } from '../shared';
import scales from '../foundational-styles/scales';
import palette from '../foundational-styles/palette';
var SelectAppearances = {};
SelectAppearances["default"] = Themer.createSelectAppearance({
  base: defaultControlStyles.base,
  disabled: defaultControlStyles.disabled,
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(palette.red.base, ", inset 0 1px 2px ").concat(scales.neutral.N4A)
  },
  hover: defaultControlStyles.hover,
  focus: defaultControlStyles.focus,
  active: defaultControlStyles.active
});
/**
 * Get the appearance of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */

var getSelectAppearance = function getSelectAppearance() {
  return SelectAppearances["default"];
};
/**
 * Get the className of a `Select`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getSelectAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0U2VsZWN0Q2xhc3NOYW1lLmpzIl0sIm5hbWVzIjpbIlRoZW1lciIsIm1lbW9pemVDbGFzc05hbWUiLCJkZWZhdWx0Q29udHJvbFN0eWxlcyIsInNjYWxlcyIsInBhbGV0dGUiLCJTZWxlY3RBcHBlYXJhbmNlcyIsImNyZWF0ZVNlbGVjdEFwcGVhcmFuY2UiLCJiYXNlIiwiZGlzYWJsZWQiLCJpbnZhbGlkIiwiYm94U2hhZG93IiwicmVkIiwibmV1dHJhbCIsIk40QSIsImhvdmVyIiwiZm9jdXMiLCJhY3RpdmUiLCJnZXRTZWxlY3RBcHBlYXJhbmNlIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxNQUFULFFBQXVCLG9CQUF2QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLDJCQUE3QjtBQUNBLFNBQVNDLG9CQUFULFFBQXFDLFdBQXJDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwrQkFBbkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLGdDQUFwQjtBQUVBLElBQU1DLGlCQUFpQixHQUFHLEVBQTFCO0FBRUFBLGlCQUFpQixXQUFqQixHQUE0QkwsTUFBTSxDQUFDTSxzQkFBUCxDQUE4QjtBQUN4REMsRUFBQUEsSUFBSSxFQUFFTCxvQkFBb0IsQ0FBQ0ssSUFENkI7QUFFeERDLEVBQUFBLFFBQVEsRUFBRU4sb0JBQW9CLENBQUNNLFFBRnlCO0FBR3hEQyxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsU0FBUyw0QkFBcUJOLE9BQU8sQ0FBQ08sR0FBUixDQUFZSixJQUFqQywrQkFBMERKLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlQyxHQUF6RTtBQURGLEdBSCtDO0FBTXhEQyxFQUFBQSxLQUFLLEVBQUVaLG9CQUFvQixDQUFDWSxLQU40QjtBQU94REMsRUFBQUEsS0FBSyxFQUFFYixvQkFBb0IsQ0FBQ2EsS0FQNEI7QUFReERDLEVBQUFBLE1BQU0sRUFBRWQsb0JBQW9CLENBQUNjO0FBUjJCLENBQTlCLENBQTVCO0FBV0E7Ozs7OztBQUtBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQyxTQUFPWixpQkFBaUIsV0FBeEI7QUFDRCxDQUZEO0FBSUE7Ozs7Ozs7QUFLQSxlQUFlSixnQkFBZ0IsQ0FBQ2dCLG1CQUFELENBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCB7IGRlZmF1bHRDb250cm9sU3R5bGVzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgU2VsZWN0QXBwZWFyYW5jZXMgPSB7fVxuXG5TZWxlY3RBcHBlYXJhbmNlcy5kZWZhdWx0ID0gVGhlbWVyLmNyZWF0ZVNlbGVjdEFwcGVhcmFuY2Uoe1xuICBiYXNlOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5iYXNlLFxuICBkaXNhYmxlZDogZGVmYXVsdENvbnRyb2xTdHlsZXMuZGlzYWJsZWQsXG4gIGludmFsaWQ6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtwYWxldHRlLnJlZC5iYXNlfSwgaW5zZXQgMCAxcHggMnB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfWBcbiAgfSxcbiAgaG92ZXI6IGRlZmF1bHRDb250cm9sU3R5bGVzLmhvdmVyLFxuICBmb2N1czogZGVmYXVsdENvbnRyb2xTdHlsZXMuZm9jdXMsXG4gIGFjdGl2ZTogZGVmYXVsdENvbnRyb2xTdHlsZXMuYWN0aXZlXG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBTZWxlY3RgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRTZWxlY3RBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gU2VsZWN0QXBwZWFyYW5jZXMuZGVmYXVsdFxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFNlbGVjdGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldFNlbGVjdEFwcGVhcmFuY2UpXG4iXX0=