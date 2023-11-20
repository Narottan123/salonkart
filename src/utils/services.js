import axios from "axios"
// const BASE_URL = 'http://192.168.2.243:4000';
const BASE_URL = 'https:www.smartsalon.in';
const instance = axios.create({
  baseURL:BASE_URL,
  timeout: 30000,
  headers: {
      'X-Custom-Header': 'foobar', // Custom headers if needed
      'Content-Type': 'application/json', // Sample content type header
    },
});   
const postApiData=(endpoint,apidata,success,failur)=>{
  instance.post(endpoint,apidata).then((res)=>{
    console.log('otpresponse',res)
   success(res?.data?.data)
  }).catch((error)=>{
    console.log("databaase",error)
    // failur(error)

  })
}
const getApiCall=(endpoint)=>{
  // console.log("apidata",apidata)
  instance.post(endpoint,).then((res)=>{
    console.log('checkresponse',res?.data.data)
  //  success(res?.data?.data)
  }).catch((error)=>{
    // failur(error)

  })
}



export {postApiData,getApiCall}