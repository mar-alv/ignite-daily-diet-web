import clsx from 'clsx'

import stayedInDietImg from '/stayed-in-diet.png'
import stayedOutOfDietImg from '/stayed-out-of-diet.png'

import { Button } from '@/components/ui/button'
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'

interface Props {
	stayedInDiet: boolean
}

export function PlateCreatedModal({ stayedInDiet }: Props) {
  return (
		<DialogContent aria-describedby={undefined} className='max-w-sm w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 grid justify-items-center rounded-s-2xl rounded-e-2xl bg-gray-700'>
			<DialogHeader className='gap-2 grid text-center'>
				<DialogTitle
					className={clsx(
						'text-2xl font-bold',
						stayedInDiet ? 'text-emerald-500' : ' text-rose-500'
					)}
				>
					{stayedInDiet ? 'Continue assim!' : 'Que pena!'}
				</DialogTitle>

				<DialogDescription>
					{stayedInDiet ? (
						<>
							Você continua <strong>dentro da dieta</strong>. Muito bem!
						</>
					) : (
						<>
							Você <strong>saiu da dieta</strong> dessa vez, mas continue se esforçando e não desista!
						</>
					)}
				</DialogDescription>
			</DialogHeader>

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
					className='mt-10'
				/>
			)}

			<DialogFooter>
				<DialogClose>
					<Button>
						Continuar
					</Button>
				</DialogClose>
			</DialogFooter>
		</DialogContent>
 	)
}
