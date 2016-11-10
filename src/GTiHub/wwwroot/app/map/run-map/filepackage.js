"use strict";
var FilePackage = (function () {
    function FilePackage(isPrimarySource, sourceId, sourceName, sourceDescription, firstRowHeader, altHeadRow, delimiter, file) {
        this.isPrimarySource = isPrimarySource;
        this.sourceId = sourceId;
        this.sourceName = sourceName;
        this.sourceDescription = sourceDescription;
        this.firstRowHeader = firstRowHeader;
        this.altHeadRow = altHeadRow;
        this.delimiter = delimiter;
        this.file = file;
    }
    return FilePackage;
}());
exports.FilePackage = FilePackage;
//# sourceMappingURL=filepackage.js.map