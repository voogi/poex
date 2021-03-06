import {ISocket} from "./ISocket";
import {IProperty} from "./IProperty";

export interface IItem {
    verified: boolean;
    w: number;
    h: number;
    ilvl: number;
    icon: string;
    league: string;
    id: string;
    sockets: Array<ISocket>;
    name: string;
    typeLine: string;
    identified: boolean;
    corrupted: boolean;
    lockedToCharacter: boolean;
    note: string;
    properties: Array<IProperty>;
    requirements: Array<IProperty>;
    explicitMods: Array<string>;
    implicitMods: Array<string>;
    enchantMods: Array<string>;
    craftedMods: Array<string>;
    flavourText: Array<string>;
    frameType: number;
    x: number;
    y: number;
    inventoryId: string;
    socketedItems: Array<any>;
    additionalProperties: Array<any>;
    secDescrText: string;
    descrText: string;
    artFilename: string;
    duplicated: boolean;
    maxStackSize: number;
    nextLevelRequirement: Array<any>;
    stackSize: number;
    talismanTier: number;
    utilityMods: Array<string>;
    support: boolean;
    cosmeticMods: Array<string>;
    prophecyDiffText: string;
    prophecyText: string;
    isRelic: boolean;
}