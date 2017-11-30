import {Component} from '@angular/core';
import {BackendService} from './services/backend.service';
import {ITrade} from './shared/ITrade';
import {IStash} from './shared/IStash';
import {FilterByNamePipe} from './pipes/filter-by-name.pipe';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import * as _ from 'lodash';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'poex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private next_query_str: string = '110191905-115581351-108419229-124969145-116821270';
  public stashes: Array<IStash> = [];
  public filteredStashes: Array<IStash> = [];
  private $trade: Subscription = new Subscription();
  public searchTerm: string = '';

  constructor(private backend: BackendService) {

    this.getTradeInfo();
  }

  getTradeInfo() {

    this.$trade.unsubscribe();

    this.$trade = this.backend.getTradeInfo(this.next_query_str).subscribe((trade: ITrade) => {

      this.next_query_str = trade.next_change_id;

      let a = this.stashes.slice(0);
      let b = trade.stashes.slice(0);

      this.stashes = _.uniqBy(a.concat(b), 'id');

      this.stashes = this.stashes.filter( item => item.accountName !== undefined );

      this.stashes = this.stashes.filter( (stash:IStash) => stash.items.length > 0);

      this.filteredStashes = new FilterByNamePipe().transform(this.stashes, this.searchTerm);

      setTimeout(() => {
        this.getTradeInfo();
      }, 10000);

    });
  }

  transformValue(){

  }

  onSearch(filter: string) {
    this.filteredStashes = new FilterByNamePipe().transform(this.stashes, filter);
  }
}
