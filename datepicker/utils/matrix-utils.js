import { shiftDate } from "../../chronos/utils/date-setters";
export function createMatrix(options, fn) {
  var prevValue = options.initialDate;
  var matrix = new Array(options.height);
  for (var i = 0; i < options.height; i++) {
    matrix[i] = new Array(options.width);

    for (var j = 0; j < options.width; j++) {
      if (i > 0) {
        if (j === 0) {
          if (fn(prevValue) !== matrix[i - 1][6]) {
            alert(fn(prevValue) + "-" + matrix[i - 1][6]);
            matrix[i][j] = fn(prevValue);
            prevValue = shiftDate(prevValue, options.shift);
          }
        } else {
          if (fn(prevValue) !== matrix[i][j - 1]) {
            // alert(fn(prevValue) + "-" + matrix[i][j - 1]);
            matrix[i][j] = fn(prevValue);
            prevValue = shiftDate(prevValue, options.shift);
          }
        }
      } else {
        matrix[i][j] = fn(prevValue);
        prevValue = shiftDate(prevValue, options.shift);
        // alert(fn(prevValue) + "-" + matrix[i][j]);
      }
    }
  }
  return matrix;
}
//# sourceMappingURL=matrix-utils.js.map
