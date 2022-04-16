<template>
    <section id="dashboard-ecommerce">
      <b-row class="match-height">
        <b-col
          xl="12"
          md="12"
        >
          <ecommerce-statistics :data="data.statisticsItems" />
        </b-col>
      </b-row>
       <b-row class="match-height">
        <!-- Revenue Report Card -->
        <b-col lg="8">
          <ecommerce-revenue-report :data="data.revenue" />
        </b-col>
      <b-col
        lg="4"
        md="6"
      >
        <dashboard-goal-overview :data="data.goalOverview" />
      </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="5"
          md="6"
        >
        <ApexRadialBarChart/>
        </b-col>
        <b-col
          lg="7"
          md="6"
        >
          <b-card>
            <b-card-header class="d-sm-flex justify-content-between ">
              <b-card-title class="mb-sm-0 mb-1">
                <h3 class="card-title mb-50 mb-sm-0">
                  Expenses report
                </h3>
              </b-card-title>
            </b-card-header>

            <b-card-body>
              <div style="margin-top: 8%">
                Total expenses per year: <span style="color: white; margin-left: 1%">50000</span>
              </div>
              <div style="margin-top: 1%">
                Total expenses per month: <span style="color: white; margin-left: 1%">6000</span>
              </div>
              <div style="margin-top: 3%">
                Expenses per teachers:
              </div>
              <div style="margin-top: 1%" class="d-sm-flex justify-content-between">
                <div class="d-sm-flex align-content-center">
                  Total teachers per year: <span style="color: white; margin-left: 1%; align-text: center" class="d-sm-flex align-self-center">30000</span>
                </div>
                <div class="d-sm-flex align-content-center">
                  Total teachers per month: <span style="color: white; margin-left: 1%; align-text: center" class="d-sm-flex align-self-center">2300</span>
                </div>
              </div>
              <div style="margin-top: 3%">
                Expenses per employees:
              </div>
              <div style="margin-top: 1%" class="d-sm-flex justify-content-between">
                <div class="d-sm-flex align-content-center">
                  Total employees per year: <span style="color: white; margin-left: 1%; align-text: center" class="d-sm-flex align-self-center">20000</span>
                </div>
                <div class="d-sm-flex align-content-center">
                  Total employees per month: <span style="color: white; margin-left: 1%; align-text: center" class="d-sm-flex align-self-center">1900</span>
                </div>
              </div>
              <div style="margin-top: 3%">
                Highest paid workers:
              </div>
              <div style="margin-top: 1%">
                Highest paid teacher: <span style="color: white; margin-left: 1%" class="workers">Bouhajja Alaeddine</span>
              </div>
              <div style="margin-top: 1%; margin-bottom: 4%;">
                Total paid employee: <span style="color: white; margin-left: 1%" class="workers">Majed saja3</span>
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="match-height" style="display: flex; justify-content: space-between; margin-left: 0.3%; margin-right: 0.3%;">
      <div
        v-for="item in data.congrats"
        :key="item.name"
        >
          <dashboard-congratulation :data="item"/>
      </div>
      </b-row>
    </section>
</template>
<script>
import { BCard, BCardText, BLink, BDropdown, BDropdownItem } from 'bootstrap-vue'
import EcommerceStatistics from '../layouts/components/dashboard/dashboardStatistics.vue'
import { BRow, BCol } from 'bootstrap-vue'
import EcommerceRevenueReport from '../layouts/components/dashboard/dahsboardRevenueReport.vue'
import dashboardGoalOverview from '../layouts/components/dashboard/dashboardGoalOverview.vue'
import dashboardCongratulation from '../layouts/components/dashboard/dashnoardCongratulation.vue'
import ApexRadialBarChart from '../layouts/components/dashboard/ApexRadialBarChart.vue'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    BCol,
    BRow,
    BDropdown,
    BDropdownItem,
    EcommerceStatistics,
    EcommerceRevenueReport,
    dashboardGoalOverview,
    dashboardCongratulation,
    ApexRadialBarChart
  },
  mounted(){},
  data() {
    return {
      selectedYear: "2021-2022",
      years: ["2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027","2027-2028"],
      data: {
        statisticsItems: [{
          title: '265',
          subtitle: 'of Students',
          icon: 'UsersIcon',
          color: "light-primary",
          customClass: "mb-2 mb-xl-0"
        },
        {
          title: '25',
          subtitle: 'of teachers',
          icon: 'BookIcon',
          color: "light-success",
          customClass: "mb-2 mb-xl-0"
        },
        {
          title: '10',
          subtitle: 'of employees',
          icon: 'UserIcon',
          color: "light-info",
          customClass: "mb-2 mb-xl-0"
        },{
          title: '15',
          subtitle: 'of classes',
          icon: 'HomeIcon',
          color: "light-danger",
          customClass: "mb-2 mb-xl-0"
        },{
          title: '6',
          subtitle: 'levels',
          icon: 'ChevronsUpIcon',
          color: "light-warning",
          customClass: "mb-2 mb-xl-0"
        }],
        revenue: {
          expected: 55000,
          budgetChart: {
            series: [{
              data: [61,48,69,52,60,40,70,60,59,43,62]
            },{
              data: [20,10,30,15,23,0,25,15,20,5,27]
            }]
          },
          totalEarning: 25852,
          revenueReport: {
            series: [
              {
                data: [250,500,800,1000,1500,1600,1600,1600,1600,1600,1600,1600],
                name: "Earning"
              },
              {
                data: [2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500,2500],
                name:"Expected gain"
              }
            ]
          },
          years: ["2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027","2027-2028"]
        },
        goalOverview: {
          completed: "786,617",
          inProgress: (55000 - 25852).toString(),
          series:[58],
          years: ["2021-2022","2022-2023","2023-2024","2024-2025","2025-2026","2026-2027","2027-2028"]
        },
        congrats: [
            {
              name: 'Alaeddine',
              surname: 'Bouhajja',
              class: 'LInfo2',
              lvl: 2,
              average: 19.88,
              rank: 1
            },
            {
              name: 'siwar',
              surname: 'lazghib',
              class: 'KK1I',
              lvl: 4,
              average: 19.73,
              rank: 2
            },
            {
              name: 'Omar',
              surname: 'Bouhajja',
              class: 'LKPH2',
              lvl: 2,
              average: 19.68,
              rank: 3
            },
            {
              name: 'Seif',
              surname: 'Hammem',
              class: 'LInfo2',
              lvl: 2,
              average: 18.88,
              rank: 4
            }
          ]
      },
    }
  },
}
</script>

<style>
  .workers:hover{
    cursor: pointer;
    color: #7367f0;
    background-color: #7367f0;
  }
</style>
