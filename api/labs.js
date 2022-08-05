import { server } from '../config'

const API_LABS_ENDPOINT = 'https://rcrd-api.azurewebsites.net/labs'
const BACKUP_LABS_DATA = `${server}/data/backup-labs.json`

const checkLabsResponse = (responseStatus) => {
  if (responseStatus.fromBackup) {
    // eslint-disable-next-line no-console
    console.warn(
      "Api is returning it's local back-up data. Error: " + responseStatus.error
    )
  }
}

export const Labs = {
  getData: async () => {
    try {
      let response = await fetch(API_LABS_ENDPOINT)
      response = await response.json()

      checkLabsResponse(response.status)

      return await response.data
    } catch (error) {
      let response = await fetch(BACKUP_LABS_DATA)
      response = response.json()

      // eslint-disable-next-line no-console
      console.warn(
        'Unable to fetch labs data from API. Using back-up JSON data. Error: ' +
          error
      )

      return response
    }
  },
}

export default Labs
