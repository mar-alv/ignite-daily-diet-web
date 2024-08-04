import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const dateFns = {
	getDateAsDDMMYY(date: string) {
		const parsedDate = parseISO(date)
		const formattedDate = format(parsedDate, 'dd.MM.yy')

		return formattedDate
	},
	getHoursAndMinutes(date: string) {
		const parsedDate = parseISO(date.replace(' ', 'T'))
		const formattedHour = format(parsedDate, 'HH:mm')

		return formattedHour
	},
	toFormattedCreatedAt(date: string) {
		const parsedDate = parseISO(date)
		const formattedDate = format(parsedDate, 'dd/MM/yyyy \'às\' HH:mm', { locale: ptBR })

		return formattedDate
	}
}
