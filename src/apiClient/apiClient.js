export const apiClient = {
  async fetchData(url) {
    const headers =  { Authorization: `Bearer ${process.env.VUE_APP_MEDIUM_INTEGRATION_TOKEN}` }
    const response = await fetch(url, { method: 'GET', headers })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json()

  }
}