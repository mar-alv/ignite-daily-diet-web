import 'dayjs/locale/pt-br'
import dayJs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayJs.extend(utc)
dayJs.extend(timezone)

// TODO: remove lib
export const dayjs = {
	getDateAsDDMMYY(date: string) {
		const formattedDate = dayJs(date).format('DD.MM.YY')

		return formattedDate
	},
	getHoursAndMinutes(date: string) {
		const formattedHour = dayJs(date.replace(' ', 'T')).format('HH:mm')

		return formattedHour
	},
	getCreatedAtDate(createdAtHour?: string, createdAtDate?: Date) {
		const timeZone = 'America/Sao_Paulo'

		const now = dayJs().tz(timeZone)
		const todayDate = now.format('YYYY-MM-DD')
		const currentHour = now.format('HH:mm')

		const date = createdAtDate
			? dayJs(createdAtDate).format('YYYY-MM-DD')
			: todayDate

  	const hour = createdAtHour || currentHour

	  const createdAtString = `${date}T${hour}:00`

		return dayJs.tz(createdAtString, timeZone).format()
	},
	toFormattedCreatedAt(date: string) {
		const formattedDate = dayJs(date).locale('pt-br').format('DD/MM/YYYY [às] HH:mm')

		return formattedDate
	}
}
