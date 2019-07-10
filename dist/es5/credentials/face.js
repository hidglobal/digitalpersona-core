import { Base64Url } from '../encoders';
import { BioSample, BioSampleFormat, BioSampleFormatOwner, BioSampleType, BioSampleEncryption, BioSampleHeader, BioSamplePurpose, BioFactor } from "../biometrics";
var FIRData = /** @class */ (function () {
    function FIRData(SDKVersion, Data) {
        this.SDKVersion = SDKVersion;
        this.Data = Data;
        this.version = 1;
    }
    return FIRData;
}());
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
var FaceImage = /** @class */ (function () {
    function FaceImage(
    /** Base64url-encoded image data. */
    ImageData, 
    /** Image format. */
    ImageType) {
        if (ImageType === void 0) { ImageType = FaceImageType.Jpeg; }
        this.ImageData = ImageData;
        this.ImageType = ImageType;
        /** Version info. */
        this.Version = 1;
    }
    /** Extracts face image from a data URL. Only `data:image/jpeg;base64` is supported for now. */
    FaceImage.fromDataURL = function (image) {
        return new FaceImage(image.replace("data:image/jpeg;base64,", ""));
    };
    /** Extracts face image from a browser's canvas object.  */
    FaceImage.fromCanvas = function (canvas, quality) {
        if (quality === void 0) { quality = 1.0; }
        return FaceImage.fromDataURL(canvas.toDataURL("image/jpeg", quality));
    };
    /** Exports the face image data to a {@link BioSample} object. */
    FaceImage.prototype.toBioSample = function (format, purpose, sdkVersion) {
        if (format === void 0) { format = new BioSampleFormat(BioSampleFormatOwner.None, 0); }
        if (purpose === void 0) { purpose = BioSamplePurpose.Any; }
        if (sdkVersion === void 0) { sdkVersion = 0x30100; }
        return new BioSample(new BioSampleHeader(BioFactor.FacialFeatures, format, BioSampleType.Raw, purpose, -1, BioSampleEncryption.None), Base64Url.fromJSON(this));
    };
    return FaceImage;
}());
export { FaceImage };
//# sourceMappingURL=face.js.map