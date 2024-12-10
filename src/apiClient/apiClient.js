export const apiClient = {
  async fetchData(url) {
    const response = await fetch(url, { method: 'GET' })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json()
  }
}