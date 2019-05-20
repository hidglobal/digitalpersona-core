import { Base64UrlString, Base64String, Base64Url } from '../encoders';
import { BioSample, BioSampleFormat, BioSampleFormatOwner, BioSampleType, BioSampleEncryption, BioSampleHeader, BioSamplePurpose, BioFactor } from "../biometrics";
import { Credential } from './credential';

class FIRData
{
    public readonly version = 1;

    constructor(
        public readonly SDKVersion: number,
        public readonly Data: Base64UrlString
    ){}
}

export enum FaceImageType
{
    Jpeg = 1
}

export class FaceImage
{
    public readonly Version = 1;

    constructor(
        public readonly ImageData: Base64UrlString,
        public readonly ImageType: FaceImageType = FaceImageType.Jpeg,
    ){}

    static fromDataURL(image: Base64String): FaceImage {
        return new FaceImage(image.replace("data:image/jpeg;base64,", ""));
    }

    static fromCanvas(canvas: HTMLCanvasElement, quality: number = 1.0): FaceImage {
        return FaceImage.fromDataURL(canvas.toDataURL("image/jpeg", quality));
    }

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
                BioSampleEncryption.None
            ),
            Base64Url.fromJSON(this)
        );
    }
}

export class Face extends Credential
{
    constructor(samples: BioSample[]) {
        super(Credential.Face, samples)
    }
}
