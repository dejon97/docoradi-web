<template>
    <div class="div12">
    <label style="text-color:red">{{displayName}}</label>
    <input class="textinpu" type="text"
           :name="name"
           :value="value"
           @input="$emit('input',$event.target.value)"
           :required ="required"
           :placeholder="placeholder"    >
    </div>
    
</template>

<script>
export default {
    name: 'textInput',
  props: ['displayName', 'name', 'placeholder','required']
}
</script>
<style >
.textinpu {
  width: 100%;
  padding: 12px 20px;
  margin: 2px 0;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.div12{
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 5px;
}
</style>