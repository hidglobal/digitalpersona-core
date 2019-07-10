/**
 * Positions of fingers.
 */
export var FingerPosition;
(function (FingerPosition) {
    FingerPosition[FingerPosition["Unknown"] = 0] = "Unknown";
    FingerPosition[FingerPosition["RightThumb"] = 1] = "RightThumb";
    FingerPosition[FingerPosition["RightIndex"] = 2] = "RightIndex";
    FingerPosition[FingerPosition["RightMiddle"] = 3] = "RightMiddle";
    FingerPosition[FingerPosition["RightRing"] = 4] = "RightRing";
    FingerPosition[FingerPosition["RightLittle"] = 5] = "RightLittle";
    FingerPosition[FingerPosition["LeftThumb"] = 6] = "LeftThumb";
    FingerPosition[FingerPosition["LeftIndex"] = 7] = "LeftIndex";
    FingerPosition[FingerPosition["LeftMiddle"] = 8] = "LeftMiddle";
    FingerPosition[FingerPosition["LeftRing"] = 9] = "LeftRing";
    FingerPosition[FingerPosition["LeftLittle"] = 10] = "LeftLittle";
})(FingerPosition || (FingerPosition = {}));
/** Finger enrollment data. */
var Finger = /** @class */ (function () {
    function Finger(
    /** Finger position. */
    position) {
        this.position = position;
    }
    /** Creates the finger enrollment data from a plain JSON object. */
    Finger.fromJson = function (json) {
        var obj = json;
        return new Finger(obj.position);
    };
    return Finger;
}());
export { Finger };
//# sourceMappingURL=fingerprints.js.map