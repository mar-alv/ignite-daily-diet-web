import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getMetricsMock } from './users'
import {
	createPlateMock,
	deletePlateMock,
	getPlatesMock,
	updatePlateMock
} from './plates'

export const worker = setupWorker(
	getMetricsMock,

	createPlateMock,
	deletePlateMock,
	getPlatesMock,
	updatePlateMock
)

export async function enableMsw() {
	if (env.MODE !== 'test') return

	await worker.start()
}
