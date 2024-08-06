import clsx from 'clsx'

import * as Dialog from '@radix-ui/react-dialog'

import stayedInDietImg from '../assets/stayed-in-diet.png'
import stayedOutOfDietImg from '../assets/stayed-out-of-diet.png'

interface Props {
	stayedInDiet: boolean
}

export function PlateCreatedModal({ stayedInDiet }: Props) {
  return (
		<Dialog.Content
			aria-describedby={undefined}
			className={clsx(
				'max-w-sm w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
				'p-8 grid justify-items-center',
				'rounded-s-2xl rounded-e-2xl bg-gray-700'
			)}
		>
			<div className='gap-2 grid text-center'>
				<Dialog.Title
					className={clsx(
						'text-2xl font-bold',
						stayedInDiet ? 'text-green-dark' : ' text-red-dark'
					)}
				>
					{stayedInDiet ? 'Continue assim!' : 'Que pena!'}
				</Dialog.Title>

				<Dialog.Description>
					{stayedInDiet ? (
						<>
							Você continua <strong>dentro da dieta</strong>. Muito bem!
						</>
					) : (
						<>
							Você <strong>saiu da dieta</strong> dessa vez, mas continue se esforçando e não desista!
						</>
					)}
				</Dialog.Description>
			</div>

			{stayedInDiet ? (
				<img
					src={stayedInDietImg}
					alt='Pessoa saltando de felicidade por ter continuado na sua dieta'
					className='mt-10'
				/>
			) : (
				<img
					src={stayedOutOfDietImg}
					alt='Pessoa sentada, triste por ter pulado sua dieta'
					className='mt-10' />
			)}

			<Dialog.Close
				className='w-full mt-8 py-4 px-6 rounded-md text-sm font-bold text-white bg-gray-200 hover:bg-gray-300'
			>
				Continuar
			</Dialog.Close>
		</Dialog.Content>
 	)
}
