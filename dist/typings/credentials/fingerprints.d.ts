/**
 * Positions of fingers.
 */
export declare enum FingerPosition {
    Unknown = 0,
    RightThumb = 1,
    RightIndex = 2,
    RightMiddle = 3,
    RightRing = 4,
    RightLittle = 5,
    LeftThumb = 6,
    LeftIndex = 7,
    LeftMiddle = 8,
    LeftRing = 9,
    LeftLittle = 10
}
/** Finger enrollment data. */
export declare class Finger {
    /** Finger position. */
    readonly position: FingerPosition;
    constructor(
    /** Finger position. */
    position: FingerPosition);
    /** Creates the finger enrollment data from a plain JSON object. */
    static fromJson(json: object): Finger;
}
/** Collection of finger enrollment data. */
export declare type Fingers = Finger[];
