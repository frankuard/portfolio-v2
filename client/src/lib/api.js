// In production, set VITE_API_URL to your deployed server address.
const BASE = import.meta.env.VITE_API_URL || ''

export const apiGet = async (path, signal) => {
  const response = await fetch(`${BASE}${path}`, { signal })
  if (!response.ok) throw new Error(`Request failed: ${response.status}`)
  return response.json()
}