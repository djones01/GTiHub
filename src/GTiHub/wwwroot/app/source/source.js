"use strict";
var Source = (function () {
    function Source(name, description, effective_Date, active) {
        this.name = name;
        this.description = description;
        this.effective_Date = effective_Date;
        this.active = active;
    }
    return Source;
}());
exports.Source = Source;
var SourceField = (function () {
    function SourceField(Name, Datatype, Active, SeqNum) {
        this.Name = Name;
        this.Datatype = Datatype;
        this.Active = Active;
        this.SeqNum = SeqNum;
    }
    return SourceField;
}());
exports.SourceField = SourceField;
//# sourceMappingURL=source.js.map