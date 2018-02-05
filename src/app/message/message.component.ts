import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="hasError()" class="ui-message ui-messages-error">
      {{text}}
    </div>
  `,
  styles: [`
    .ui-messages-error {
      margin: 4px 0 0;
    }
  `]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  hasError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
