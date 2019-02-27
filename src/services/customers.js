import axios from 'axios'

export default {
  getCustomers: async function () {
    var result = await axios.get('http://private-92a969-processoseletivo1.apiary-mock.com/customers')
    return result.data
  },

  modifyCustomer: async function (customerId, customerData) {
    // by default send data as json in body
    var result = await axios.put(
      `https://private-92a969-processoseletivo1.apiary-mock.com/customers/${customerId}`,
      customerData
    )
    return result.data
  }
}
