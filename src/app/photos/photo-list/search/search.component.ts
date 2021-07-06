import { debounceTime } from 'rxjs/operators';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onTyping = new EventEmitter<string>();
  @Input() value = '';
  debounce: Subject<string> = new Subject<string>();

  constructor() {}
  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
