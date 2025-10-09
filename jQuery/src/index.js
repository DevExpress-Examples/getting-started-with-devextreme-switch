$(() => {
  $('#switch').dxSwitch({
    value: true,
    onValueChanged(e) {
      const message = e.value ? 'Switch is ON' : 'Switch is OFF';
      DevExpress.ui.notify(message, 'info', 1000);
    },
  });
});
