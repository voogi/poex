import {Component} from '@angular/core';
import {BackendService} from "./services/backend.service";
import {ITrade} from "./shared/ITrade";
import {IStash} from "./shared/IStash";
import {FilterByNamePipe} from "./pipes/filter-by-name.pipe";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import * as _ from "lodash";

@Component({
    selector: 'poex-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private next_query_str: string = '110191905-115581351-108419229-124969145-116821270';
    public stashes: Array<IStash> = [];
    public filteredStashes: Array<IStash> = [];

    constructor(private backend: BackendService) {

        Observable.interval(20000).subscribe( tick => {
            this.backend.getTradeInfo(this.next_query_str).subscribe((trade: ITrade) => {
                this.next_query_str = trade.next_change_id;

                let a = this.stashes.slice(0);
                let b = trade.stashes.slice(0);

                this.stashes = _.uniqBy(a.concat(b), "id");

                console.log(this.stashes);

            });
        });

    }

    onInputEnter(searchTerm: string) {
    }

}
