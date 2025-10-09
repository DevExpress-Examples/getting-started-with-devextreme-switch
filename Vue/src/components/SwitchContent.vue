<script setup lang="ts">
import { ref } from 'vue';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxSwitch from 'devextreme-vue/switch';
import notify from 'devextreme/ui/notify';
import type { DxSwitchTypes } from 'devextreme-vue/switch';

const switchValue = ref<boolean>(true);

const onValueChanged = (e: DxSwitchTypes.ValueChangedEvent): void => {
  switchValue.value = e.value ?? false;
  const message = e.value ? 'Switch is ON' : 'Switch is OFF';
  notify(message, 'info', 1000);
};
</script>

<template>
  <div>
    <DxSwitch
      v-model:value="switchValue"
      @value-changed="onValueChanged"
    />
  </div>
</template>
