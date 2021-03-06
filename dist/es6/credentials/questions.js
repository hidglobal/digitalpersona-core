/**
 * Type of a security question.
 */
export var QuestionType;
(function (QuestionType) {
    /** A security question from a standard predefined list of questions ({@link Question.number} <= 100). */
    QuestionType[QuestionType["Regular"] = 0] = "Regular";
    /** A user-defined security question ({@link Question.number} > 100). */
    QuestionType[QuestionType["Custom"] = 1] = "Custom";
})(QuestionType || (QuestionType = {}));
/**
 * Security question data.
 */
export class Question {
    /** Constructs a security question. */
    constructor(
    /** An index of a question in a question list. */
    number, 
    /** A question language ID. */
    lang_id, 
    /** A question sublanguage ID. */
    sublang_id, 
    /** A keyboard layout for the answer. */
    keyboard_layout, 
    /** A text of the security question (only when {@link Question.type} === {@link QuestionType.Custom}) */
    text) {
        this.number = number;
        this.lang_id = lang_id;
        this.sublang_id = sublang_id;
        this.keyboard_layout = keyboard_layout;
        this.text = text;
        /** Version info. */
        this.version = 1;
        this.type = number <= 100 ? QuestionType.Regular : QuestionType.Custom;
        if (this.type === QuestionType.Custom && !text)
            throw new Error("Question text is required for custom questions");
    }
    /** Creates a security question from a plain JSON object. */
    static fromJson(json) {
        const obj = json;
        return new Question(obj.number, obj.lang_id, obj.sublang_id, obj.keyboard_layout, obj.text);
    }
}
/**
 * An answer to a security question.
 */
export class Answer {
    /** Creates an answer to a security question. */
    constructor(question, text) {
        this.text = text;
        this.number = (question instanceof Question) ? question.number : question;
    }
}
//# sourceMappingURL=questions.js.map