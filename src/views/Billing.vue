<template>
    <div class="p-6 bg-transparent w-full h-full justify-center items-center">
        <div class="bg-white mb-2 w-full h-4/5 border-2 border-black rounded-lg ">
          <div>
            <el-table :data="tableData" class="w-full h-64 rounded-md">
            <el-table-column fixed prop="date" label="Date" width="250" />
            <el-table-column prop="or" label="Official Reciept No." width="330" />
            <el-table-column prop="status" label="Status" width="250" />
            <el-table-column prop="payment" label="Date of Payment" width="200" />
            <el-table-column fixed="right" label="Operations" width="200">
            <template #default="scope">
            <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)">
            Remove
            </el-button>
            </template>
            </el-table-column>
            </el-table>
        </div>
        </div>
        <div class="flex items-end justify-end">
          <button class="mt-2 bg-blue-500 p-4 rounded-md font-bold text-white" style="width: 10%" @click="onAddItem">Add Item</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
const index = 1
const now = new Date()

const tableData = ref([
  {
    date: '2016-05-01',
    or: index,
    status: 'paid',
    payment: '2016-05-02',
  },
  {
    date: '2016-05-01',
    or: index+1,
    status: 'Unpaid',
    payment: 'pending',
  },
  {
    date: '2016-05-01',
    or: index+2,
    status: 'Paid',
    payment: dayjs(now).format('YYYY-MM-DD'),
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    or: index + 3,
    status: 'Paid',
    payment: dayjs(now).format('YYYY-MM-DD'),
  })
}
</script>