/**
 * Type of a security question.
 */
export enum QuestionType
{
    /** A security question from a standard predefined list of questions ({@link Question.number} <= 100). */
    Regular,
    /** A user-defined security question ({@link Question.number} > 100). */
    Custom,
}

export type QuestionNumber  = number
                            & { brand?: "dp.core.Question", min?: 0, max?: 103 };
/**
 * Security question data.
 */
export class Question
{
    /** Version info. */
    public readonly version = 1;
    /** Security question type */
    public readonly type: QuestionType;

    /** Constructs a security question. */
    constructor(
        /** An index of a question in a question list. */
        public readonly number: QuestionNumber,
        /** A question language ID. */
        public readonly lang_id: number,
        /** A question sublanguage ID. */
        public readonly sublang_id: number,
        /** A keyboard layout for the answer. */
        public readonly keyboard_layout: number,
        /** A text of the security question (only when {@link Question.type} === {@link QuestionType.Custom}) */
        public readonly text?: string,
    ){
        this.type = number <= 100 ? QuestionType.Regular : QuestionType.Custom;
        if (this.type === QuestionType.Custom && !text)
            throw new Error("Question text is required for custom questions");
    }

    /** Creates a security question from a plain JSON object. */
    public static fromJson(json: object): Question
    {
        const obj = json as Question;
        return new Question(
            obj.number,
            obj.lang_id, obj.sublang_id,
            obj.keyboard_layout,
            obj.text);
    }
}

/** A collection of security questions. */
export type Questions = Question[];

/**
 * An answer to a security question.
 */
export class Answer
{
    /** Version info. */
    public readonly version: 1;
    /** An index of a question in a question list. */
    public readonly number: QuestionNumber;
    /** A text of the answer. Must be given in correponding {@link Question.keyboard_layout | keyboard layout}. */
    public readonly text: string;

    /** Creates an answer to a security question. */
    constructor(question: Question | QuestionNumber, text: string)
    {
        this.text = text;
        this.number = (question instanceof Question) ? question.number : question;
    }
}

/** A collection on answers to security questions. */
export type Answers = Answer[];

/** A structure associating a sequrity question with its corresponding answer. */
export interface QuestionWithAnswer {
    question: Question;
    answer: Answer;
}
