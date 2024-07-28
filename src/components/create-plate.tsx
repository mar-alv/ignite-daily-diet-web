import { ArrowLeft, Plus } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import * as Dialog from '@radix-ui/react-dialog'
import * as Form from '@radix-ui/react-form'
import * as Toggle from '@radix-ui/react-toggle'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'

const createPlateSchema = z.object({
	name: z.string().min(2),
	description: z.string().optional(),
	inDiet: z.boolean()
})

type CreatePlateSchema = z.infer<typeof createPlateSchema>

export function CreatePlate() {
	const [inDiet, setInDiet] = useState<boolean | null>(null)

	const { handleSubmit, register, reset } = useForm<CreatePlateSchema>() 

	function onSubmit(data: CreatePlateSchema) {
		console.log(data)

		reset()
	}

	function handleInDiet() {
		setInDiet(inDiet ? null : true)
	}

	function handleOutOfDiet() {
		setInDiet(inDiet === false ? null : false)
	}

	return (
		<Dialog.Root>
			<section>
				<h2 className='text-gray-100'>
					Refeições
				</h2>

				<Dialog.Trigger className='w-full mt-2 py-4 px-6 gap-3 flex justify-center rounded-md text-white bg-gray-200 hover:bg-gray-300'>
					<Plus className='size-[18px]' />

					<span className='text-sm font-bold'>
						Nova refeição
					</span>
				</Dialog.Trigger>

				<Dialog.Portal>
					<Dialog.Content aria-describedby={undefined} className='fixed inset-0 bg-gray-500'>
						<div className='p-6 flex text-center'>
							<Dialog.Close>
								<ArrowLeft className='size-6 text-gray-200' />
							</Dialog.Close>

							<Dialog.Title className='flex-1 text-lg font-bold text-gray-100'>
								Nova refeição
							</Dialog.Title>
						</div>	

						<Form.Root onSubmit={handleSubmit(onSubmit)} className='h-full p-6 gap-6 rounded-s-2xl rounded-e-2xl bg-gray-700'>
							<Form.Field name='name' className='grid gap-2'>
								<Form.Label className='text-sm font-bold text-gray-200'>
									Nome
								</Form.Label>

								<Form.Control minLength={2} placeholder='Sanduíche' required {...register('name')} />

								<Form.Message match='tooShort' className='text-red-dark'>
									O nome deve ter pelo menos 2 caracteres.
								</Form.Message>
							</Form.Field>

							<Form.Field name='description' className='grid gap-2'>
								<Form.Label className='text-sm font-bold text-gray-200'>
									Descrição
								</Form.Label>

								<Form.Control asChild>
									<textarea 
										placeholder='Sanduíche de pão integral com atum e salada de alface e tomate'
										className='resize-none'
										{...register('description')}
									>
									</textarea>
								</Form.Control>
							</Form.Field>

							<div>
								<p className='text-sm font-bold text-gray-200'>
									Está dentro da dieta?
								</p>

								<div className='mt-2 gap-2 grid grid-cols-2'>
									<Toggle.Root pressed={!!inDiet} onPressedChange={handleInDiet}>
										<span
											className={clsx(
												'p-4 flex justify-center items-center gap-2 rounded-md text-sm font-bold text-gray-200',
												inDiet ? 'outline-none outline-offset-0 outline-green-dark bg-green-light' : 'bg-gray-600'
											)}
										>
											<div className='size-2 rounded-full bg-green-dark' />

											Sim
										</span>
									</Toggle.Root>

									<Toggle.Root pressed={inDiet === false} onPressedChange={handleOutOfDiet}>
										<span
											className={clsx(
												'p-4 flex justify-center items-center gap-2 rounded-md text-sm font-bold text-gray-200',
												inDiet === false ? 'outline-none outline-offset-0 outline-red-dark bg-red-light' : 'bg-gray-600'
											)}
										>
											<div className='size-2 rounded-full bg-red-dark' />

											Sim
										</span>
									</Toggle.Root>
								</div>
							</div>

							<Form.Submit className='w-full py-4 px-6 rounded-md text-sm font-bold text-white bg-gray-200 hover:bg-gray-300'>
								Cadastrar refeição
							</Form.Submit>
						</Form.Root>
					</Dialog.Content>
    		</Dialog.Portal>
			</section>
		</Dialog.Root>
	)
}
