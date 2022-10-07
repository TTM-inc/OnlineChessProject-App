import * as SecureStore from 'expo-secure-store'

exports.getValueFor = async (key) => {
  const result = await SecureStore.getItemAsync(key);
  return result;
}

exports.saveStorage = async (key, value) => {
  await SecureStore.setItemAsync(key, value)
  .then(()=> { return });
}

exports.isTokenValid = async (setState) => {

  const getValueFor = async (key) => {
    const result = await SecureStore.getItemAsync(key);
    return result;
  }
  const userId = await getValueFor('userId')
  const token = await getValueFor('token')
  try {
    if (!token || !userId) return false
        const res = await fetch('http://192.168.1.45:3000/istokenvalid', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
          },
        })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            setState(false) 
          }
          if (data.isTokenValid === true) {
            setState(true)
          }
          })
      } catch (error) {
        console.error("error", error);
      }
}
