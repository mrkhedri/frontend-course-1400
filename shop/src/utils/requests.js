import axios from "axios";

const getProducts = async () => {
  return axios.get('/product')
    .then(res => {
      return res.data
    })
    .catch(error => console.log('error -> ', error));
}

