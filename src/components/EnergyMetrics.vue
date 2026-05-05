<template>
  <div class="bg-white p-6 rounded-sm border border-border-subtle shadow-lg">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h3 class="text-deep-navy font-bold text-lg uppercase tracking-tight">System Analytics</h3>
        <p class="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em]">Operational Feed // 0xAF42</p>
      </div>
      <div class="flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full">
        <span class="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span class="text-emerald-600 text-[10px] font-bold uppercase tracking-widest">Active</span>
      </div>
    </div>
    
    <div class="h-[250px]">
      <apexchart
        type="line"
        height="100%"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>

    <div class="grid grid-cols-2 gap-4 mt-6">
      <div class="bg-light-slate p-3 rounded-sm border border-border-subtle">
        <p class="text-slate-500 text-[9px] uppercase font-bold tracking-widest">Throughput</p>
        <p class="text-deep-navy font-bold text-lg">128.4 <span class="text-xs text-industrial-orange">kbbl/d</span></p>
      </div>
      <div class="bg-light-slate p-3 rounded-sm border border-border-subtle">
        <p class="text-slate-500 text-[9px] uppercase font-bold tracking-widest">Pressure</p>
        <p class="text-deep-navy font-bold text-lg">2,450 <span class="text-xs text-industrial-orange">psi</span></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const series = ref([
  {
    name: 'Output',
    data: [31, 40, 28, 51, 42, 109, 100]
  },
  {
    name: 'Efficiency',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
]);

const chartOptions = {
  chart: {
    toolbar: { show: false },
    sparkline: { enabled: false },
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    background: 'transparent',
  },
  colors: ['#ff7e00', '#0b1622'],
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  grid: {
    borderColor: '#f1f3f5',
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } },
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: { style: { colors: '#adb5bd', fontSize: '10px' } },
  },
  tooltip: {
    theme: 'light',
  },
  legend: { show: false },
  fill: {
    type: 'solid',
    opacity: 1
  },
};

onMounted(() => {
  setInterval(() => {
    const newData = [...series.value[0].data.slice(1), Math.floor(Math.random() * 100) + 20];
    const newData2 = [...series.value[1].data.slice(1), Math.floor(Math.random() * 60) + 10];
    series.value = [
      { name: 'Output', data: newData },
      { name: 'Efficiency', data: newData2 }
    ];
  }, 3000);
});
</script>
