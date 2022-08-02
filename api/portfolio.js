import { server } from '../config'

const API_PORTFOLIO_ENDPOINT = 'https://rcrd-api.azurewebsites.net/portfolio'
const BACKUP_PORTFOLIO_DATA = `${server}/data/backup-portfolio.json`

const checkPortfolioResponse = (responseStatus) => {
  if (responseStatus.fromBackup) {
    // eslint-disable-next-line no-console
    console.warn(
      "Api is returning it's local back-up data. Error: " + responseStatus.error
    )
  }
}

export const Portfolio = {
  getData: async () => {
    try {
      let response = await fetch(API_PORTFOLIO_ENDPOINT)
      response = await response.json()

      checkPortfolioResponse(response.status)

      return await response.data
    } catch (error) {
      let response = await fetch(BACKUP_PORTFOLIO_DATA)
      response = response.json()

      // eslint-disable-next-line no-console
      console.warn(
        'Unable to fetch portfolio data from API. Using back-up JSON data. Error: ' +
          error
      )

      return response
    }
  },
}

export default Portfolio
