import { format, set } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const dateFns = {
	formatAsDayMonthYearSeparatedByBars(value: Date) {
		return format(value, 'dd/MM/yyyy')
	},
	formatAsDayMonthYearSeparatedByDots(value: Date) {
		return format(value, 'dd.MM.yyyy')
	},
	getCreatedAt(createdAtDate: Date, createdAtHour: string) {
		const [hours, minutes] = createdAtHour.split(':').map(Number)
 
		const updatedDate = set(createdAtDate!, {
			hours,
			minutes
		})

		const date = format(updatedDate, 'yyyy-MM-dd')
		const time = format(updatedDate, 'HH:mm:ss.SSS')

		return `${date}T${time}Z`
	},
	formatAsHours(value: string) {
		const date = new Date(value)

		return format(date, 'HH:mm')
	},
	formatAsDateAndAtHours(value: string) {
		const date = new Date(value)

		return format(date, 'dd/MM/yyyy \'às\' HH:mm', {
			locale: ptBR
		})
	}
}
