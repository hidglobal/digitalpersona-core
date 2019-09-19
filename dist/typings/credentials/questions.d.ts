/**
 * Type of a security question.
 */
export declare enum QuestionType {
    /** A security question from a standard predefined list of questions ({@link Question.number} <= 100). */
    Regular = 0,
    /** A user-defined security question ({@link Question.number} > 100). */
    Custom = 1
}
export declare type QuestionNumber = number & {
    brand?: "dp.core.Question";
    min?: 0;
    max?: 103;
};
/**
 * Security question data.
 */
export declare class Question {
    /** An index of a question in a question list. */
    readonly number: QuestionNumber;
    /** A question language ID. */
    readonly lang_id: number;
    /** A question sublanguage ID. */
    readonly sublang_id: number;
    /** A keyboard layout for the answer. */
    readonly keyboard_layout: number;
    /** A text of the security question (only when {@link Question.type} === {@link QuestionType.Custom}) */
    readonly text?: string | undefined;
    /** Version info. */
    readonly version = 1;
    /** Security question type */
    readonly type: QuestionType;
    /** Constructs a security question. */
    constructor(
    /** An index of a question in a question list. */
    number: QuestionNumber, 
    /** A question language ID. */
    lang_id: number, 
    /** A question sublanguage ID. */
    sublang_id: number, 
    /** A keyboard layout for the answer. */
    keyboard_layout: number, 
    /** A text of the security question (only when {@link Question.type} === {@link QuestionType.Custom}) */
    text?: string | undefined);
    /** Creates a security question from a plain JSON object. */
    static fromJson(json: object): Question;
}
/** A collection of security questions. */
export declare type Questions = Question[];
/**
 * An answer to a security question.
 */
export declare class Answer {
    /** Version info. */
    readonly version: 1;
    /** An index of a question in a question list. */
    readonly number: QuestionNumber;
    /** A text of the answer. Must be given in correponding {@link Question.keyboard_layout | keyboard layout}. */
    readonly text: string;
    /** Creates an answer to a security question. */
    constructor(question: Question | QuestionNumber, text: string);
}
/** A collection on answers to security questions. */
export declare type Answers = Answer[];
/** A structure associating a sequrity question with its corresponding answer. */
export interface QuestionWithAnswer {
    question: Question;
    answer: Answer;
}
