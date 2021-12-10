import { server } from '../config'

const API_PORTFOLIO_ENDPOINT = 'https://api.rcrd.dev/portfolio'
const BACKUP_PORTFOLIO_DATA = `${server}/data/backup-portfolio.json`

export const Portfolio = {
  getData: async () => {
    return await fetch(API_PORTFOLIO_ENDPOINT)
      .then((res) => res.json().then((res) => res.slice(0, 3)))
      .catch(async function () {
        // eslint-disable-next-line no-console
        console.error(
          'Unable to fetch portfolio data from API. Using backup JSON'
        )
        const localBackup = await fetch(BACKUP_PORTFOLIO_DATA)
        const parsedLocalBackup = await localBackup.json()

        return parsedLocalBackup
      })
  },
}

export default Portfolio
