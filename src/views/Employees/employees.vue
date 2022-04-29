<template>
  <div>
      <employeeTable></employeeTable>
  </div>
</template>

<script>
import { BCard, BCardText } from 'bootstrap-vue'
import employeeTable from '../../layouts/components/employees/employeeTable.vue'
export default {
  components: {
    BCard,
    BCardText,
    employeeTable
  },
}
</script>

<style>

</style>
