import { format, set } from 'date-fns'

export const dateFns = {
	formatAsDayMonthYear(value: Date) {
		return format(value, 'dd/MM/yyyy')
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
	}
}
