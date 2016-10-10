"use strict";
var Target = (function () {
    function Target(name, description, effective_Date, active, targetFields) {
        this.name = name;
        this.description = description;
        this.effective_Date = effective_Date;
        this.active = active;
        this.targetFields = targetFields;
    }
    return Target;
}());
exports.Target = Target;
var TargetField = (function () {
    function TargetField(name, datatype, active, seqNum) {
        this.name = name;
        this.datatype = datatype;
        this.active = active;
        this.seqNum = seqNum;
    }
    return TargetField;
}());
exports.TargetField = TargetField;
//# sourceMappingURL=target.js.map