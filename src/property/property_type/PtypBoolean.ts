import {PropertyType} from "./PropertyType";
import {MessageStorage} from "../../MessageStorage";
import {PropertyTag} from "../PropertyTag";

export class PtypBoolean extends PropertyType<boolean> {

    constructor() {
        super(0x000B, "PtypBoolean");
    }
    resolveValue(container: MessageStorage, propertyTag: PropertyTag): boolean {
        const property = container.propertiesStream().properties().find(propertyInfo => PropertyTag.equal(propertyInfo.propertyTag(), propertyTag));
        if(property === undefined) {
            return undefined;
        } else {
            const bytes = property.data()[0];
            return (bytes & 1) === 1;
        }
    }
}