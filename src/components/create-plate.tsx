import { ArrowLeft, Plus } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import * as Dialog from '@radix-ui/react-dialog'
import * as Form from '@radix-ui/react-form'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { Controller, useForm } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'

import { createPlate } from '../api/plates'
import { CreatePlate as ICreatePlate } from '../interfaces'
import { PlateCreatedModal } from '../components'

const createPlateSchema = z.object({
	name: z.string().min(2),
	description: z.string().optional(),
	inDiet: z.string()
})

type CreatePlateSchema = z.infer<typeof createPlateSchema>

export function CreatePlate() {
	const [plateId, setPlateId] = useState('')
	const [stayedInDiet, setStayedInDiet] = useState(false)

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

	const isFormValid = () => {
		const { name, inDiet } = watchAllFields

		return name && inDiet
	}

	async function onSubmit(data: CreatePlateSchema) {
		const plate: ICreatePlate = {
			name: data.name,
			description: data.description,
			inDiet: data.inDiet === 'true'
		}

		const { plateId } = await createPlate(plate)

		reset()
		setPlateId(plateId)
		setStayedInDiet(data.inDiet === 'true')
	}

	function handleCloseModal() {
		setPlateId('')
		setStayedInDiet(false)
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
					{plateId ? (
						<PlateCreatedModal stayedInDiet={stayedInDiet} closeModalCallback={handleCloseModal} />
					) : (
						<Dialog.Content aria-describedby={undefined} className='fixed inset-0 bg-gray-500'>
							<div className='p-6 flex text-center'>
								<Dialog.Close>
									<ArrowLeft className='size-6 text-gray-200' />
								</Dialog.Close>

								<Dialog.Title className='flex-1 text-lg font-bold text-gray-100'>
									Nova refeição
								</Dialog.Title>
							</div>	

							<Form.Root
								onSubmit={handleSubmit(onSubmit)}
								className='h-full p-6 gap-6 grid items-center content-start relative rounded-s-2xl rounded-e-2xl bg-gray-700'
							>
								<Form.Field name='name' className='grid gap-2'>
									<Form.Label className='text-sm font-bold text-gray-200'>
										Nome
									</Form.Label>

									<Form.Control
										minLength={2}
										placeholder='Sanduíche'
										required
										className={clsx(
											'p-[0.875rem] text-gray-100 border-[1px] border-gray-500 rounded-md outline-none',
											'placeholder:text-gray-400',
											'focus:border-gray-300'
										)}
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
											className={clsx(
												'h-[120px] p-[0.875rem] text-gray-100 border-[1px] border-gray-500 rounded-md outline-none resize-none',
												'placeholder:text-gray-400',
												'focus:border-gray-300'
											)}
											{...register('description')}
										>
										</textarea>
									</Form.Control>
								</Form.Field>

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
									disabled={!isFormValid()}
									className={clsx(
										'max-w-80 w-full h-12 py-4 px-6 bottom-[100px] mx-auto justify-self-center absolute',
										'rounded-md text-sm font-bold text-white bg-gray-100',
										'hover:bg-gray-200',
										!isFormValid() && 'cursor-not-allowed disabled:bg-gray-400'
									)}
								>
									Cadastrar refeição
								</Form.Submit>
							</Form.Root>
						</Dialog.Content>
					)}
    		</Dialog.Portal>
			</section>
		</Dialog.Root>
	)
}
