export class FilePackage {
    constructor(
        public isPrimarySource: boolean,
        public sourceId: number,
        public sourceDescription: number,
        public firstRowHeader: boolean,
        public altHeadRow: number,
        public delimiter: string,
        public file: File
    ) { }
}