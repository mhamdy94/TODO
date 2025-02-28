import axios from 'axios'

const API_URL = 'https://example.com/api/tasks'

export const fetchTasks = async () => {
  const response = await axios.get(API_URL)
  return response.data
}
