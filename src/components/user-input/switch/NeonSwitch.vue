<template>
  <label
    class="neon-switch no-style"
    :class="[
      `neon-switch--${switchStyle}`,
      `neon-switch--${size}`,
      `neon-switch--${color}`,
      {
        'neon-switch--disabled': disabled,
        'neon-switch--checked': value,
      },
    ]"
    tabindex="-1"
    @keydown.enter="toggleSwitch"
    @keydown.space="toggleSwitch"
    @keydown.space.prevent=""
    :role="switchStyle"
    :aria-checked="value"
    :aria-disabled="disabled"
  >
    <neon-icon
      v-if="switchStyle === 'checkbox'"
      class="neon-switch__checkbox"
      :inverse="true"
      :disabled="disabled"
      name="check"
      :tabindex="!disabled ? 0 : undefined"
    />
    <span class="neon-switch__label">{{ label }}</span>
    <span v-if="switchStyle === 'switch'" class="neon-switch__switch" :tabindex="!disabled ? 0 : undefined">
      <span class="neon-switch__indicator"></span>
    </span>
    <input
      type="checkbox"
      class="neon-switch__input"
      :checked="value"
      :disabled="disabled"
      v-on="sanitizedListeners"
      v-bind="$attrs"
    />
  </label>
</template>

<script lang="ts" src="./NeonSwitch.ts" />
