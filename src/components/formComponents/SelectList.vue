<template>
     <div>
    <!-- <label>{{displayName}}</label>
    <select :multiple="multi"
            :value="value"
            @input="$emit('input',
           $event.target.value)">
      <option v-for="option in options"
              :key="option">
        {{option}}
      </option>
    </select> -->
    <validation-provider
        v-slot="{ errors }"
        name="select"
        rules="required"
      >
        <v-select
          @input="$emit('input', $event.target.value)"
          :items="items"
          :error-messages="errors"
          :label="displayName"
          data-vv-name="select"
          :required="required"
        ></v-select>
      </validation-provider>
  </div>
</template>
<script>
export default {
    name: 'selectList',
  props: ['multi', 'options', 'name', 'displayName', 'value'],
}
</script>