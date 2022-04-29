
module.exports = {
    featchRevenuePerMonth(gain){
        let array = [0,0,0,0,0,0,0,0,0,0,0,0]
        gain.paidDetails.forEach(element => {
            console.log(element.created_date.substring(5,7))
            array[parseInt(element.created_date.substring(5,7)) - 1] += element.payed_value
        });
        gain['series'] = array;
        gain['maxValue'] = [gain.sum,gain.sum,gain.sum,gain.sum,gain.sum,gain.sum,gain.sum,gain.sum,gain.sum,gain.sum,gain.sum,gain.sum];
        return gain
    }
}