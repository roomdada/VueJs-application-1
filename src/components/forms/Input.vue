<script setup>

defineProps({
  label : {
    type : String,
    required : true,
    default: ''
  },

  modelValue:{
    type : [String, Number],
    default : ''
  }
})

</script>
<template>
    <label class="form-label">{{ label }}</label>
      <input  class="form-control"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      />
</template>
