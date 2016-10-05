"use strict";
var Source = (function () {
    function Source(name, description, effective_Date, active, sourceFields) {
        this.name = name;
        this.description = description;
        this.effective_Date = effective_Date;
        this.active = active;
        this.sourceFields = sourceFields;
    }
    return Source;
}());
exports.Source = Source;
var SourceField = (function () {
    function SourceField(name, datatype, active, seqNum) {
        this.name = name;
        this.datatype = datatype;
        this.active = active;
        this.seqNum = seqNum;
    }
    return SourceField;
}());
exports.SourceField = SourceField;
//# sourceMappingURL=source.js.map