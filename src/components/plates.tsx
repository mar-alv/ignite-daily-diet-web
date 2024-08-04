import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

import { useQuery } from 'react-query'

import { dateFns } from '../lib'
import { getPlates } from '../api/plates'
import { Plate } from '.'
import { Plate as IPlate } from '../interfaces'

export function Plates() {
	const { data } = useQuery('getPlates', getPlates, { suspense: true })

	if (!data) return

	const { plates } = data

	return (
		<section className='mt-8 gap-8 grid'>
			{Object.keys(plates).map((date) => (
				<article>
					<h3 className='text-lg text-gray-100'>
						{dateFns.getDateAsDDMMYY(date)}
					</h3>

					<div className='mt-[14px] gap-2 grid'>
						{plates[date].map((plate: IPlate) =>
							<Plate key={plate.id} plate={plate} />
						)}
					</div>
				</article>
			))}
		</section>
	)
}

export function PlatesSkeleton() {
	return (
		<section className='mt-8'>
			<Skeleton width={72} height={24} />

			<div className='mt-[14px] gap-2 grid'>
				<Skeleton count={4} height={48} />
			</div>
		</section>
	)
}
