<template>
  <div class="user-box">
      <label>{{displayName}}</label>
    <input type="date"  
       :name="name"
       :value="value"
       @input="$emit('input',$event.target.value)"
       :required= "required"
       >
       
  </div>
</template>
<script>
export default {
  name: 'date',
  props: ['displayName',  'name', 'required', 'value']
}
</script>
<style scoped>
.user-box {
  position: relative;
}

.user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(255, 255, 255);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid rgb(10, 5, 5);
  outline: none;
  background: transparent;
}
/* .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: rgb(20, 11, 11);
  pointer-events: none;
  transition: .5s;
} */

.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #090a4b;
  font-size: 12px;
}

</style>