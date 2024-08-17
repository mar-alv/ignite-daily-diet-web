import { toast } from 'react-toastify'

export const toastify = {
	successToast(text: string) {
		toast(text, {
			style: {
				color: '#639339',
				backgroundColor: '#cbe4b4'
			},
			progressStyle: {
				background: '#639339'
			}
		})
	},
	errorToast(text: string) {
		toast(text, {
			style: {
				color: '#bf3b44',
				backgroundColor: '#f3babd'
			},
			progressStyle: {
				background: '#bf3b44'
			}
		})
	}
}
