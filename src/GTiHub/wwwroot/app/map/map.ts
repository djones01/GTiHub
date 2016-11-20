import { Transformation } from "../transformation/transformation";

export class Map {
    constructor(
        public description: string,
        public effective_Date: Date,
        public active: boolean,
        public transformations: Transformation[],
        public mapId?: number
    ) {
    }
}