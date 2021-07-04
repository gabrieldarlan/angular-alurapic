import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: './photo.component.html',
})
export class PhotoComponent {
  // tslint:disable-next-line: comment-format
  //@Input permite que as propriedades do component recebam valores externos
  // tslint:disable-next-line: comment-format
  //quando usado na forma declarativa do template de outros components
  @Input() description = '';
  @Input() url = '';
}
