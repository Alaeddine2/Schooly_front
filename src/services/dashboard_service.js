import axiosIns from '../libs/axios'

class DashboardService {
    async getStatistics () {
        return axiosIns.post('/dashboard/statistics')
          .then((response) => {
            return response;
          })
          .catch((e) => {
            console.log(e);
          })
    }
    async getPaidStatistics (year) {
        return axiosIns.post('/dashboard/payment/statistics',{"year": year})
          .then((response) => {
            return response;
          })
          .catch((e) => {
            console.log(e);
          })
    }
}
export default new DashboardService()