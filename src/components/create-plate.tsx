import { CircleNotch, Plus, X } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import * as Dialog from '@radix-ui/react-dialog'
import * as Form from '@radix-ui/react-form'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useState } from 'react'
import { z } from 'zod'

import { createPlate } from '../api/plates'
import { PlateCreatedModal } from '../components'

const createPlateSchema = z.object({
	name: z.string().min(2),
	description: z.string().optional(),
	inDiet: z.string()
})

type CreatePlateSchema = z.infer<typeof createPlateSchema>

export function CreatePlate() {
	const [showCreatedModal, setShowCreatedModal] = useState(false)
	const [stayedInDiet, setStayedInDiet] = useState(false)

	const { isLoading, mutate } = useMutation(createPlate, {
		onSuccess: () => {
			setShowCreatedModal(true)
		}
	})

	const {
		control,
		handleSubmit,
		register,
		reset,
		watch
	} = useForm<CreatePlateSchema>({
		mode: 'onChange',
		defaultValues: {
			name: '',
			description: '',
			inDiet: ''
		}
	})

	const watchAllFields = watch()

	function isFormValid() {
		const { inDiet, name } = watchAllFields

		return name && inDiet
	}

	async function onSubmit(data: CreatePlateSchema) {
		mutate({
			name: data.name,
			description: data.description,
			inDiet: data.inDiet === 'true'
		})

		reset()
		setStayedInDiet(data.inDiet === 'true')
	}

	function handleModalOpenChange(open: boolean) {
			if (!open) {
				setShowCreatedModal(false)
				setStayedInDiet(false)
			}
	}

	return (
		<Dialog.Root onOpenChange={handleModalOpenChange}>
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
					<Dialog.Overlay className='inset-0 absolute bg-gray-300 bg-opacity-70' />

					{showCreatedModal ? (
						<PlateCreatedModal stayedInDiet={stayedInDiet} />
					) : (
						<Dialog.Content aria-describedby={undefined} className='max-w-sm w-full p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-s-2xl rounded-e-2xl bg-gray-700'>
							<div className='flex justify-end'>
								<Dialog.Close>
									<X className='size-6 text-gray-200' />
								</Dialog.Close>
							</div>

							<Dialog.Title className='sr-only'>
								Nova refeição
							</Dialog.Title>

							<Form.Root onSubmit={handleSubmit(onSubmit)} className='gap-6 grid items-center content-start'>
								<Form.Field name='name' className='grid gap-2'>
									<Form.Label className='text-sm font-bold text-gray-200'>
										Nome
									</Form.Label>

									<Form.Control
										minLength={2}
										placeholder='Sanduíche'
										required
										className='p-[0.875rem] text-gray-100 border-[1px] border-gray-500 rounded-md outline-none placeholder:text-gray-400 focus:border-gray-300'
										{...register('name')}
									/>

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
											className='h-[120px] p-[0.875rem] text-gray-100 border-[1px] border-gray-500 rounded-md outline-none resize-none placeholder:text-gray-400 focus:border-gray-300'
											{...register('description')}
										>
										</textarea>
									</Form.Control>
								</Form.Field>

								{/* TODO: add date and hour picker */}

								<div>
									<p className='text-sm font-bold text-gray-200'>
										Está dentro da dieta?
									</p>

									<Controller
										name='inDiet'
										control={control}
										rules={{ required: true }}
										render={({ field }) => (
											<RadioGroup.Root
												onValueChange={field.onChange}
												required
												value={field.value}
												className='mt-2 gap-2 grid grid-cols-2'
											>
												<RadioGroup.Item
													value='true'
													className={clsx('p-4 gap-2 flex justify-center items-center rounded-md cursor-pointer',
														field.value === 'true' ? 'bg-green-light outline outline-1 outline-green-dark outline-offset-0' : 'bg-gray-600'
													)}
												>
													<div className='size-2 rounded-full bg-green-dark' />

													<label className='text-sm font-bold text-gray-200'>

														Sim
													</label>
												</RadioGroup.Item>

												<RadioGroup.Item
													value='false'
													className={clsx('p-4 gap-2 flex justify-center items-center rounded-md cursor-pointer',
														field.value === 'false' ? 'bg-red-light outline outline-1 outline-red-dark outline-offset-0' : 'bg-gray-600'
													)}
												>
													<div className='size-2 rounded-full bg-red-dark' />

													<label className='text-sm font-bold text-gray-200'>

														Não
													</label>
												</RadioGroup.Item>
											</RadioGroup.Root>
										)}
									/>
								</div>

								<Form.Submit
									disabled={!isFormValid() || isLoading}
									className={clsx(
										'w-full h-12 mt-4 py-4 px-6 flex justify-center items-center rounded-md text-sm font-bold text-white bg-gray-100 hover:bg-gray-300',
										(!isFormValid() || isLoading) && 'cursor-not-allowed disabled:bg-gray-400'
									)}
								>
									{isLoading ? (
										<CircleNotch size={18} className='animate-spin' />
									) :
										'Cadastrar refeição'
									}
								</Form.Submit>
							</Form.Root>
						</Dialog.Content>
					)}
    		</Dialog.Portal>
			</section>
		</Dialog.Root>
	)
}
