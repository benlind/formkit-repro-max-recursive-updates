<template>
  <FormKit
    type="form"
    :actions="false"
  >
    <FormKit
      type="multi-step"
      tab-style="tab"
    >
      <FormKit
        type="step"
        name="personalInfo"
      >
        <!-- To "fix" the bug, replace `{ validPhone }` with `rules` -->
        <FormKit
          type="tel"
          name="phone"
          label="Phone"
          :validation="[
            ['validPhone'],
          ]"
          :validation-rules="{ validPhone }"
          :validation-messages="{
            validPhone: 'invalid phone',
          }"
        />
      </FormKit>

      <FormKit
        type="step"
        name="additionalInfo"
      >
        <FormKit
          type="text"
          label="Comments"
          validation="required"
        />

        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit>
    </FormKit>
  </FormKit>
</template>

<script lang="ts" setup>
const rules = { validPhone }

function validPhone (node) {
  return true
}
</script>
