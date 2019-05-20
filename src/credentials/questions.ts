import { Credential } from './credential';

export enum QuestionType
{
    Regular,    // number <= 100
    Custom      // number > 100
}
export class Question
{
    public readonly version = 1;                    // must be set to 1
    public readonly type: QuestionType;             // regular or custom

    constructor(
        public readonly number: number,             // question index in a regular question list
        public readonly lang_id: number,            // language id
        public readonly sublang_id: number,         // sublaguage id
        public readonly keyboard_layout: number,    // Keyboard layout
        public readonly text?: string,              // text of the question (required for CustomQuestion only)
    ){
        this.type = number <= 100 ? QuestionType.Regular : QuestionType.Custom;
        if (this.type === QuestionType.Custom && !text)
            throw new Error("Question text is required for custom questions");
    }

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

export type Questions = Question[];

export class Answer
{
    public readonly version: 1;
    public readonly number: number;
    public readonly text: string;

    constructor(question: Question | number, text: string)
    {
        this.text = text;
        this.number = (question instanceof Question) ? question.number : question;
    }
}

export type Answers = Answer[];

export class SecurityQuestions extends Credential
{
    constructor(data: {questions?: Questions, answers?: Answers}) {
        super(Credential.SecurityQuestions,
            data.answers && data.questions
                ? SecurityQuestions.canonicalize({ questions: data.questions, answers: data.answers })
                : data.answers || data.questions || null
        );
    }

    private static canonicalize(data: { questions: Questions, answers: Answers }) {
        // take only answers with corresponding questions, then sort (NOTE: server requires inverse sort!)
        const As = data.answers
            .filter(a => data.questions.findIndex(q => q.number === a.number) >= 0)
            .sort(a => -a.number);

        // take only questions with corresponding answers, then sort (NOTE: server requires inverse sort!)
        const Qs = data.questions
            .filter(q => data.answers.findIndex(a => a.number === q.number) >= 0)
            .sort(q => -q.number);

        // now Qs and As correspond to each other and have the same rder. Zip then into a single array of enrollment data.
        return Qs.map((q, i, qs) => ({
            question: q,
            answer: As[i]
        }));
    }
}
