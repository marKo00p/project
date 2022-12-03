const data = [
    {client_id:101, client_fist_name: "Petro",client_last_name:"Glan",city_name:"Dnipro",email_address:"glan@gmail.com",telephone_number:"38(095)1234567",password:"Glan1988"}
]
const getClients = () => new Promise((resolve, reject) =>{
    resolve(data)
})

module.exports = {
    getClients: getClients
}