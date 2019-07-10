import { Base64UrlString, Base64String } from '../encoders';
import { BioSample, BioSampleFormat, BioSamplePurpose } from "../biometrics";
/**
 * Format of a face image sample.
 */
export declare enum FaceImageType {
    Jpeg = 1
}
/**
 * Face image data.
 */
export declare class FaceImage {
    /** Base64url-encoded image data. */
    readonly ImageData: Base64UrlString;
    /** Image format. */
    readonly ImageType: FaceImageType;
    /** Version info. */
    readonly Version = 1;
    constructor(
    /** Base64url-encoded image data. */
    ImageData: Base64UrlString, 
    /** Image format. */
    ImageType?: FaceImageType);
    /** Extracts face image from a data URL. Only `data:image/jpeg;base64` is supported for now. */
    static fromDataURL(image: Base64String): FaceImage;
    /** Extracts face image from a browser's canvas object.  */
    static fromCanvas(canvas: HTMLCanvasElement, quality?: number): FaceImage;
    /** Exports the face image data to a {@link BioSample} object. */
    toBioSample(format?: BioSampleFormat, purpose?: BioSamplePurpose, sdkVersion?: number): BioSample;
}
