import axiosIns from '../libs/axios'

class StudentService {
    async getAll () {
        return axiosIns.post('/actors/student/retrieve')
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          })
    }
    async getStudent (id) {
        return axiosIns.post('/actors/student/retrieve/'+ id)
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          })
    }
    async getSumPayment () {
        return axiosIns.post('/actors/student/retrieve/payment/all')
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          })
    }
}
export default new StudentService()