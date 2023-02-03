<template>
    <div class="p-6 bg-transparent w-full h-full justify-center items-center">
        <div class="bg-white mb-2 w-full h-4/5 border-2 border-black rounded-lg shadow-3d ">
          <div>
            <el-table :data="tableData" class="w-full h-64 rounded-md">
            <el-table-column fixed prop="date" label="Date" width="250" />
            <el-table-column prop="brand" label="Brand Name" width="250" />
            <el-table-column prop="generic" label="Generic Name" width="300" />
            <el-table-column prop="stocks" label="Stocks" width="200" />
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
          <button class="mt-2 bg-blue-500 p-4 rounded-md font-bold text-white shadow-3d" style="width: 10%" @click="onAddItem">Add Item</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const now = new Date()

const tableData = ref([
  {
    date: '2016-05-01',
    brand: 'Alendra®',
    generic: 'Alendronic Acid',
    stocks: 90,
  },
  {
    date: '2016-05-01',
    brand: 'Amiabel®',
    generic: 'Amisulpride',
    stocks: 100,
  },
  {
    date: '2016-05-01',
    brand: 'Esensamin™',
    generic: 'Ketoanalogues + Essential Amino Acids',
    stocks: 200,
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    brand: 'Fentyn®',
    generic: 'Fentanyl',
    stocks: 20,
  })
}
</script>

<style>
.shadow-3d {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>