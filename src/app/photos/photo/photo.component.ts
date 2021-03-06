import { Component, Input } from '@angular/core';

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent {
  private _url = '';
  // tslint:disable-next-line: comment-format
  //@Input permite que as propriedades do component recebam valores externos
  // tslint:disable-next-line: comment-format
  //quando usado na forma declarativa do template de outros components
  @Input() description = '';
  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = CLOUD + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }
}
