
import axios, { AxiosError } from 'axios';
import { environment } from '../../enviroment/production';
// import { environment } from '../../enviroment/development';

const api = environment.ApiDomain

export const addStudent = async (model: string, details: any) => {
    
    const { data } = await axios.post(api + `/${model}`, details)
    return (data)
}

export const login = async (model: string, details: any) => {
    
    const { data } = await axios.post(api + `/${model}/login`, details)
    return (data)
}

export const profile = async (model: string, token: any) => {
    
    const { data } = await axios.get(api + `/${model}/profile`,
        {headers:{
            Authorization: `Bearer ${token}`
        }} )
    return (data)
}

export const create = () => {

}
export const findAll = () => {

}
export const findById = async (model: string, id: any) => {
    const { data } = await axios.get(api + `/${model}/`+ id)
    return (data)

}
export const findByAny = () => {

}

export const update =  async (model: string,id:string, details: any) => {
    const { data } = await axios.patch(api + `/${model}/${id}`, details)
    return (data)
}

export const deleteById = () => {

}
export const uploadProfileImage = async(res:any)=> {

    
    // fetch(api + `/document`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type':  `multipart/form-data; boundary=${res.boundary}`,
    //     },
    //     body: res,
    //   })
    //     .then((response) => response.json())
    //     .then((result) => {
    //    // console.log('Upload result:', result);
    //       // Handle the upload result
    //     })
    //     .catch((error) => {
    //    // console.log('Upload error:', error);
    //       // Handle the upload error
    //     });
  const data= await axios.post(api + `/document`, res, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }})
    // console.log("data",data.data)
  return (data.data[0])

}
