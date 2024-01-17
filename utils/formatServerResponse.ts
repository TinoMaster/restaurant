export const formatServerResponse = <T = any>(response: T): T => {
   return JSON.parse(JSON.stringify(response))
}
