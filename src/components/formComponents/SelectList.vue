<template>
     <div>
    <label>{{displayName}}</label>
    <select :multiple="multi"
            :value="value"
            @input="$emit('input', $event.target.value)" 
            :required="required"
            :label="name"
            aria-label="erkrlrle"
            dense
            >
      <option v-for="option in options"
              :key="option">
        {{option}}
      </option>
    </select>
  </div>
</template>
<script>
export default {
    name: 'selectlist',
  props: ['options', 'name', 'displayName', 'value'],
}
</script>
<style scoped>
select {
    font-size: .9rem;
    padding: 2px 60px;
  
     border: none;
  border-bottom: 1px solid rgb(10, 5, 5);
}

</style>