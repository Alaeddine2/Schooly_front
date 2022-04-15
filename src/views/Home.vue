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
        <!--/ Revenue Report Card -->
      </b-row>
    </section>
</template>

<script>
import { BCard, BCardText, BLink } from 'bootstrap-vue'
import EcommerceStatistics from '../layouts/components/dashboard/dashboardStatistics.vue'
import { BRow, BCol } from 'bootstrap-vue'
import EcommerceRevenueReport from '../layouts/components/dashboard/EcommerceRevenueReport.vue'
import StudentService from '../services/student_serivce'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    BCol,
    BRow,
    EcommerceStatistics,
    EcommerceRevenueReport,
  },
  mounted(){},
  data() {
    return {
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
        }
      },
    }
  },
}
</script>

<style>

</style>
