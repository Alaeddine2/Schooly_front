<template>
  <b-card
    v-if="data"
    no-body
  >
    <b-card-header>
      <h4 class="mb-0">
        Goal Overview
      </h4>
        <b-dropdown
          :text="selectedYear"
          size="sm"
          class="budget-dropdown"
          variant="outline-primary"
        >
          <b-dropdown-item
            v-for="year in data.years"
            :key="year"
            
          >
            <div @click="selectYear(year)"> {{ year }}</div>
          </b-dropdown-item>
        </b-dropdown>
    </b-card-header>

    <!-- apex chart -->
    <vue-apex-charts
      type="radialBar"
      height="245"
      class="my-2"
      :options="goalOverviewRadialBar"
      :series="data.series"
    />
    <b-row class="text-center mx-0">
      <b-col
        cols="6"
        class="border-top border-right d-flex align-items-between flex-column py-1"
      >
        <b-card-text class="text-muted mb-0">
          Earned
        </b-card-text>
        <h3 class="font-weight-bolder mb-0">
          {{ data.completed }}
        </h3>
      </b-col>

      <b-col
        cols="6"
        class="border-top d-flex align-items-between flex-column py-1"
      >
        <b-card-text class="text-muted mb-0">
          Rest
        </b-card-text>
        <h3 class="font-weight-bolder mb-0">
          {{ data.inProgress }}
        </h3>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BRow, BCol, BCardText,BDropdown, BDropdownItem
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
import DashboardService from '../../../services/dashboard_service'

const $strokeColor = '#ebe9f1'
const $textHeadingColor = '#5e5873'
const $goalStrokeColor2 = '#51e5a8'
export default {
  components: {
    VueApexCharts,
    BCard,
    BCardHeader,
    BRow,
    BCardText,
    BCol,
    BDropdown,
    BDropdownItem
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  async mounted(){
    var dash = await DashboardService.getPaidStatistics("2021-2022")
    this.data = {
      completed: dash.data.data.sum.toString(),
      inProgress: (dash.data.data.sum - dash.data.data.paidValue).toString(),
      series:[(dash.data.data.sum / (dash.data.data.paidValue))],
      years: ["2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027","2027-2028"]
    }
  },
  data() {
    return {
      selectedYear: "2021-2022",
      goalOverviewRadialBar: {
        chart: {
          height: 245,
          type: 'radialBar',
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            blur: 3,
            left: 1,
            top: 1,
            opacity: 0.1,
          },
        },
        colors: [$themeColors.primary],
        plotOptions: {
          radialBar: {
            offsetY: -10,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '77%',
            },
            track: {
              background: $strokeColor,
              strokeWidth: '50%',
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                color: $textHeadingColor,
                fontSize: '2.86rem',
                fontWeight: '600',
              },
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [$themeColors.primary],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: 'round',
        },
        grid: {
          padding: {
            bottom: 30,
          },
        },
      },
    }
  },
  methods:{
    async selectYear(val){
      console.log(val);
      this.selectedYear = val;
      var dash = await DashboardService.getPaidStatistics(val)
      this.data = {
        completed: dash.data.data.sum.toString(),
        inProgress: (dash.data.data.sum - dash.data.data.paidValue).toString(),
        series:[(dash.data.data.sum / (dash.data.data.paidValue))],
        years: ["2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027","2027-2028"]
      }
    }
  }
}
</script>
