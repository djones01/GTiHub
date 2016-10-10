"use strict";
var Transformation = (function () {
    function Transformation(description, map, rule, conditions) {
        this.description = description;
        this.map = map;
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
    function Rule(rule_Value, alt_Value, rule_Operation, targetField) {
        this.rule_Value = rule_Value;
        this.alt_Value = alt_Value;
        this.rule_Operation = rule_Operation;
        this.targetField = targetField;
    }
    return Rule;
}());
exports.Rule = Rule;
//# sourceMappingURL=transformation.js.map