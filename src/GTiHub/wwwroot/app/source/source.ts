export class Source {
    constructor(
        public name: string,
        public description: string,
        public effective_Date: string,
        public active: boolean
    ) { }
}

export class SourceField {
    constructor(
        public Name: string,
        public Datatype: string,
        public Active: string,
        public SeqNum: number
    ) { }
}
