import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Switch from 'devextreme-react/switch';
import notify from 'devextreme/ui/notify';
import type { SwitchTypes } from 'devextreme-react/switch';

function App(): JSX.Element {
  const [switchValue, setSwitchValue] = useState<boolean>(true);

  const onValueChanged = useCallback((e: SwitchTypes.ValueChangedEvent) => {
    setSwitchValue(e.value ?? false);
    const message = e.value ? 'Switch is ON' : 'Switch is OFF';
    notify(message, 'info', 1000);
  }, []);

  return (
    <div className="main">
      <Switch value={switchValue} onValueChanged={onValueChanged} />
    </div>
  );
}

export default App;
