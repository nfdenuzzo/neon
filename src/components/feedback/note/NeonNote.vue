<template>
  <div class="neon-note" :class="`neon-note--${color}`" role="note">
    <div class="neon-note__container">
      <neon-icon v-if="iconName" class="neon-note__icon" :name="iconName" :color="color" />
      <!-- @slot the contents of the note -->
      <slot></slot>
    </div>
    <neon-button
      v-if="closable"
      @click="closeNote"
      @keydown.space="$event.stopPropagation() && closeNote() && $event.preventDefault()"
      @keydown.enter="closeNote"
      button-style="text"
      icon="times"
      :aria-label="ariaLabelCloseNote"
      size="s"
      tabindex="0"
      :circular="true"
      class="neon-note__close"
      :color="color"
    ></neon-button>
  </div>
</template>

<script lang="ts" src="./NeonNote.ts" />
