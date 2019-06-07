import { Credential } from './credential';
import { BioSample } from '../biometrics';

export enum FingerPosition {
    Unknown         = 0,
    RightThumb      = 1,
    RightIndex      = 2,
    RightMiddle     = 3,
    RightRing       = 4,
    RightLittle     = 5,
    LeftThumb       = 6,
    LeftIndex       = 7,
    LeftMiddle      = 8,
    LeftRing        = 9,
    LeftLittle      = 10,
}

export class Finger
{
    constructor(
        public readonly position: FingerPosition,
    ){}

    public static fromJson(json: object)
    {
        const obj = json as Finger;
        return new Finger(obj.position);
    }
}

export type Fingers = Finger[];

// export class Fingerprints extends Credential
// {
//     public constructor(data: object|string|null) {
//         super(Credential.Fingerprints, data);
//     }

//     public static forAuthentication(samples: BioSample[]): Fingerprints
//     {
//         return new Fingerprints(samples);
//     }

//     // public static forEnrollment(samples: BioSample[], position?: FingerPosition): Fingerprints
//     // {
//     //     const data = {
//     //         position,
//     //         samples
//     //     }
//     //     return new Fingerprints(data);
//     // }

//     // public static forDelete(position?: FingerPosition|Finger|(FingerPosition|Finger)[]): Fingerprints
//     // {
//     //     const data =
//     //         typeof(position) === "number"   ? [{ position}] :
//     //         (position instanceof Finger)    ? [position] :
//     //         (position instanceof Array)     ? position.map(p => (p instanceof Finger) ? p.position : p)
//     //                                         : null;
//     //     return new Fingerprints(data);
//     // }
// }
