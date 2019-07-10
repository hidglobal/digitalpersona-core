import { Base64Url } from '../encoders';
import { BioSample, BioSampleFormat, BioSampleFormatOwner, BioSampleType, BioSampleEncryption, BioSampleHeader, BioSamplePurpose, BioFactor } from "../biometrics";
class FIRData {
    constructor(SDKVersion, Data) {
        this.SDKVersion = SDKVersion;
        this.Data = Data;
        this.version = 1;
    }
}
/**
 * Format of a face image sample.
 */
export var FaceImageType;
(function (FaceImageType) {
    FaceImageType[FaceImageType["Jpeg"] = 1] = "Jpeg";
})(FaceImageType || (FaceImageType = {}));
/**
 * Face image data.
 */
export class FaceImage {
    constructor(
    /** Base64url-encoded image data. */
    ImageData, 
    /** Image format. */
    ImageType = FaceImageType.Jpeg) {
        this.ImageData = ImageData;
        this.ImageType = ImageType;
        /** Version info. */
        this.Version = 1;
    }
    /** Extracts face image from a data URL. Only `data:image/jpeg;base64` is supported for now. */
    static fromDataURL(image) {
        return new FaceImage(image.replace("data:image/jpeg;base64,", ""));
    }
    /** Extracts face image from a browser's canvas object.  */
    static fromCanvas(canvas, quality = 1.0) {
        return FaceImage.fromDataURL(canvas.toDataURL("image/jpeg", quality));
    }
    /** Exports the face image data to a {@link BioSample} object. */
    toBioSample(format = new BioSampleFormat(BioSampleFormatOwner.None, 0), purpose = BioSamplePurpose.Any, sdkVersion = 0x30100) {
        return new BioSample(new BioSampleHeader(BioFactor.FacialFeatures, format, BioSampleType.Raw, purpose, -1, BioSampleEncryption.None), Base64Url.fromJSON(this));
    }
}
//# sourceMappingURL=face.js.map