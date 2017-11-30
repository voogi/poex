import {IItem} from "./IItem";

export interface IStash {
    accountName: string;
    lastCharacterName: string;
    id: string;
    stash: string;
    stashType: string;
    items: Array<IItem>;
    public: boolean;
}