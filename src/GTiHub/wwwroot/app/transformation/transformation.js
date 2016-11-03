"use strict";
var Transformation = (function () {
    function Transformation(description, rule, conditions) {
        this.description = description;
        this.rule = rule;
        this.conditions = conditions;
    }
    return Transformation;
}());
exports.Transformation = Transformation;
var Condition = (function () {
    function Condition(seqNum, chain_Operation, left_Paren, operation, cond_Value, right_Paren, sourceField) {
        this.seqNum = seqNum;
        this.chain_Operation = chain_Operation;
        this.left_Paren = left_Paren;
        this.operation = operation;
        this.cond_Value = cond_Value;
        this.right_Paren = right_Paren;
        this.sourceField = sourceField;
    }
    return Condition;
}());
exports.Condition = Condition;
var Rule = (function () {
    function Rule(rule_Value, alt_Value, rule_Operation, targetField, ruleSourceFields) {
        this.rule_Value = rule_Value;
        this.alt_Value = alt_Value;
        this.rule_Operation = rule_Operation;
        this.targetField = targetField;
        this.ruleSourceFields = ruleSourceFields;
    }
    return Rule;
}());
exports.Rule = Rule;
var RuleSourceField = (function () {
    function RuleSourceField(seqNum, append, prepend, custom_Format, sourceField) {
        this.seqNum = seqNum;
        this.append = append;
        this.prepend = prepend;
        this.custom_Format = custom_Format;
        this.sourceField = sourceField;
    }
    return RuleSourceField;
}());
exports.RuleSourceField = RuleSourceField;
//# sourceMappingURL=transformation.js.map