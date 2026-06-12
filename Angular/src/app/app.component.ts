import { Component, ChangeDetectionStrategy } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxSwitchTypes } from 'devextreme-angular/ui/switch';

import { DxSwitchModule } from 'devextreme-angular/ui/switch';

@Component({
    selector: 'app-root',
    imports: [DxSwitchModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  switchValue = true;

  onValueChanged(e: DxSwitchTypes.ValueChangedEvent): void {
    const message = e.value ? 'Switch is ON' : 'Switch is OFF';
    notify(message, 'info', 1000);
  }
}
