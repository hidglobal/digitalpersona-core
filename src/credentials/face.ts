import { Base64UrlString, Base64String, Base64Url } from '../encoders';
import {
    BioSample, BioSampleFormat, BioSampleFormatOwner, BioSampleType, BioSampleEncryption,
    BioSampleHeader, BioSamplePurpose, BioFactor } from "../biometrics";

class FIRData
{
    public readonly version = 1;

    constructor(
        public readonly SDKVersion: number,
        public readonly Data: Base64UrlString,
    ){}
}

/**
 * Format of a face image sample.
 */
export enum FaceImageType
{
    Jpeg = 1,
}

/**
 * Face image data.
 */
export class FaceImage
{
    /** Version info. */
    public readonly Version = 1;

    constructor(
        /** Base64url-encoded image data. */
        public readonly ImageData: Base64UrlString,
        /** Image format. */
        public readonly ImageType: FaceImageType = FaceImageType.Jpeg,
    ){}

    /** Extracts face image from a data URL. Only `data:image/jpeg;base64` is supported for now. */
    public static fromDataURL(image: Base64String): FaceImage {
        return new FaceImage(image.replace("data:image/jpeg;base64,", ""));
    }

    /** Extracts face image from a browser's canvas object.  */
    public static fromCanvas(canvas: HTMLCanvasElement, quality: number = 1.0): FaceImage {
        return FaceImage.fromDataURL(canvas.toDataURL("image/jpeg", quality));
    }

    /** Exports the face image data to a {@link BioSample} object. */
    public toBioSample(
        format: BioSampleFormat = new BioSampleFormat(BioSampleFormatOwner.None, 0),
        purpose: BioSamplePurpose = BioSamplePurpose.Any,
        sdkVersion = 0x30100,
    ): BioSample
    {
        return new BioSample(
            new BioSampleHeader(
                BioFactor.FacialFeatures,
                format,
                BioSampleType.Raw,
                purpose,
                -1,
                BioSampleEncryption.None,
            ),
            Base64Url.fromJSON(this),
        );
    }
}
