<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title class="mb-sm-0 mb-1">
        Distribution of expenses
      </b-card-title>
        <b-dropdown
          :text="selectedYear"
          size="sm"
          class="budget-dropdown"
          variant="outline-primary"
        >
          <b-dropdown-item
            v-for="year in years"
            :key="year"
            
          >
            <div @click="selectYear(year)"> {{ year }}</div>
          </b-dropdown-item>
        </b-dropdown>
    </b-card-header>

    <b-card-body>
      <vue-apex-charts
        type="radialBar"
        height="400"
        :options="radialBarChart.chartOptions"
        :series="radialBarChart.series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardTitle, BCardBody, BCardHeader,BDropdown, BDropdownItem
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardBody,
    BCardHeader,
    BDropdown,
    BDropdownItem
  },
  data() {
    return {
      selectedYear: "2021-2022",
      years: ["2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027","2027-2028"],
      radialBarChart: {
        series: [80, 50],
        chartOptions: {
          colors: ['#7367f0', '#ff9f43'],//, '#826bf8'
          plotOptions: {
            radialBar: {
              size: 220,
              hollow: {
                size: '50%',
              },
              track: {
                margin: 15,
              },
              dataLabels: {
                name: {
                  fontSize: '2rem',
                  fontFamily: 'Montserrat',
                  color: '#d0d2d6',
                },
                value: {
                  fontSize: '1rem',
                  fontFamily: 'Montserrat',
                  color: '#d0d2d6',
                },
                total: {
                  show: true,
                  fontSize: '1rem',
                  label: 'Total expenses',
                  color: '#d0d2d6',
                  formatter() {
                    return '50000'
                  },
                },
              },
            },
          },
          legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            labels: {
                //colors: undefined,
                useSeriesColors: true
            },
          },
          stroke: {
            lineCap: 'round',
          },
          labels: ['Teachers salaries', 'Employees salaries'],
        },
      },
    }
  }, 
  methods:{
    selectYear(val){
      console.log(val);
      this.selectedYear = val;
    }
  }
}
</script>
