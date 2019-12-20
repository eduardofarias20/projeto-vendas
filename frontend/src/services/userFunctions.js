import axios from 'axios'

export const registerClient = newClient => {
  return axios
    .post('/new_client', {
      name: newClient.name,
      documents: newClient.document,
      phone: newClient.phone
    })
    .then(response => {
      console.log('Registrado!')
    })
}

export const registerProduct = newProduct => {
  return axios
    .post('new_product', {
      description: newProduct.description,
      amount: newProduct.amount,
      unityValue: newProduct.unityValue,
      stock: newProduct.stock
    })
    .then(response => {
      console.log('Registrado!')
    })
}