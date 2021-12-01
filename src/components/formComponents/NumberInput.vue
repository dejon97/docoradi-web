<template>
  <div>
    <label>{{displayName}}</label>
    <input type="number"
           :name="name"
           :value="value"
           @input="$emit('input',
           $event.target.value)"
           :required='required'
           :placeholder="placeholder">
  </div>
</template>
<script>
export default {
  name: 'numberInput',
  props: ['placeholder', 'displayName', 'name', 'required', 'value']
}
</script>