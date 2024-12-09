export const apiClient = {
  async fetchData(url, token = null) {
    const headers = token ? { Authorization: `Bearer ${token}` } : {}

    const response = await fetch(url, { method: 'GET', headers })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json()

  }
}