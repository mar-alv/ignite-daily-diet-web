import clsx from 'clsx'

import * as Accordion from '@radix-ui/react-accordion'
import * as Dialog from '@radix-ui/react-dialog'
import * as Form from '@radix-ui/react-form'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { PencilSimpleLine, X } from '@phosphor-icons/react'

import { memo } from 'react'

import { dateFns } from '../lib'
import { Plate as IPlate } from '../interfaces'
import { DeletePlateButton } from './delete-plate-button'

interface Props {
	plate: IPlate
}

// TODO: create stories
export const Plate = memo(({ plate }: Props) => {
	const { createdAt, description, id, inDiet, name, updatedAt } = plate

	// TODO: loading btn as the plate is deleted
	return (
		<Accordion.Root collapsible type='single'>
			<Accordion.Item value={id} className='group'>
				<Accordion.Header>
					<Accordion.Trigger asChild>
						<div className='py-[14px] px-4 flex justify-between items-center border-[1px] border-gray-500 rounded-md cursor-pointer'>
							<div className='gap-[10px] flex justify-between items-center'>
								<span>
									{dateFns.getHoursAndMinutes(updatedAt)}
								</span>

								<hr className='w-[1px] h-[14px] bg-gray-400' />

								<h4 className='max-w-44 truncate'>
									{name}
								</h4>
							</div>

							<div
								className={clsx(
									'size-[14px] rounded-full',
									inDiet ? 'bg-green-mid' : 'bg-red-mid'
								)}
							/>
						</div>
					</Accordion.Trigger>
				</Accordion.Header>

				<Accordion.Content className='gap-6 flex-1 flex flex-col justify-between group-data-[state=open]:p-4'>
					<div className='gap-6 grid'>
						<div className='gap-2 grid'>
							<h1 className='text-xl font-bold text-gray-100'>
								{name}
							</h1>

							{description && (
								<p className='text-base text-gray-200'>
									{description}
								</p>
							)}
						</div>

						<div className='gap-2 grid'>
							<h3 className='text-sm font-bold text-gray-100'>
								Data e hora
							</h3>

							<p className='text-base text-gray-200'>
								{dateFns.toFormattedCreatedAt(createdAt)}
							</p>
						</div>

						<div className='py-2 px-4 gap-2 flex items-center justify-self-start rounded-full bg-gray-600'>
							<div
								className={clsx(
									'size-2 rounded-full',
									inDiet ? 'bg-green-dark' : 'bg-red-dark'
								)}
							/>

							<span className='text-sm text-gray-100'>
								{inDiet ? 'dentro da dieta' : 'fora da dieta' }
							</span>
						</div>
					</div>

					<div className='gap-2 flex flex-wrap justify-center'>
						<Dialog.Root>
							<Dialog.Trigger className='max-w-80 w-full py-4 px-6 gap-3 flex justify-center items-center rounded-md border-[1px] border-gray-100 text-sm text-white bg-gray-100 hover:bg-gray-300'>
								<PencilSimpleLine size={18} />

								Editar refeição
							</Dialog.Trigger>

							<Dialog.Portal>
								<Dialog.Overlay className='inset-0 absolute bg-gray-300 bg-opacity-70' />

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
											disabled={!isFormValid()}
											className={clsx(
												'w-full h-12 mt-4 py-4 px-6 rounded-md text-sm font-bold text-white bg-gray-100 hover:bg-gray-300',
												!isFormValid() && 'cursor-not-allowed disabled:bg-gray-400'
											)}
										>
											Cadastrar refeição
										</Form.Submit>
									</Form.Root>
								</Dialog.Content>
							</Dialog.Portal>
						</Dialog.Root>

						<DeletePlateButton id={id} />
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	)
})
