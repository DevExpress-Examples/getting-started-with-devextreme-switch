import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxSwitchTypes } from 'devextreme-angular/ui/switch';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  switchValue = true;

  onValueChanged(e: DxSwitchTypes.ValueChangedEvent): void {
    const message = e.value ? 'Switch is ON' : 'Switch is OFF';
    notify(message, 'info', 1000);
  }
}
