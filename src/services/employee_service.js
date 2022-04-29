import axiosIns from '../libs/axios'

class EmployeeService {
    async getAll() {
        return await axiosIns.post('/actors/employee/retrieve').then(data =>{
            return data
        }).catch(err =>{
            return err
        })
    }
}
export default new EmployeeService()