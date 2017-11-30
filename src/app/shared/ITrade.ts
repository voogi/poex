import {IStash} from "./IStash";

export interface ITrade {
    next_change_id: string;
    stashes: Array<IStash>
}