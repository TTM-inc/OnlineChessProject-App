import * as SecureStore from 'expo-secure-store'

exports.getValueFor = async (key) => {
  const result = await SecureStore.getItemAsync(key);
  return result;
}

exports.saveStorage = async (key, value) => {
  await SecureStore.setItemAsync(key, value)
  .then(()=> { return });
}

exports.isTokenValid = async () => {
  const token = await getValueFor('token');
  const userId = await getValueFor('user_id');


}
