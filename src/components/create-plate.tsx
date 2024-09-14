import { CircleNotch, Plus } from '@phosphor-icons/react'

import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { createPlate } from '@/api/plates'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PlateCreatedModal } from '@/components/plate-created-modal'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

import { cn } from '@/lib/utils'
import { dateFns } from '@/lib/date-fns'

const createPlateSchema = z.object({
  name: z.string()
		.min(2, {
			message: 'O nome deve ter pelo menos 2 caracteres.'
		}),
  description: z.string()
		.optional(),
  inDiet: z.enum(['true', 'false']),
  createdAtDate: z.date(),
  createdAtHour: z.string()
		.regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/, {
			message: 'Informe uma hora válida'
		})
})

type CreatePlateSchema = z.infer<typeof createPlateSchema>

export function CreatePlate() {
	const [showCreatedModal, setShowCreatedModal] = useState(false)
	const [stayedInDiet, setStayedInDiet] = useState(false)

	const queryClient = useQueryClient()

	const { isLoading, mutate } = useMutation(createPlate, {
		onSuccess: () => {
			form.reset()
			setShowCreatedModal(true)
			queryClient.invalidateQueries('getMetrics')
			queryClient.invalidateQueries('getPlates')
		}
	})

	const form = useForm<CreatePlateSchema>({
		resolver: zodResolver(createPlateSchema),
		defaultValues: {
			name: '',
			description: '',
			inDiet: 'true',
			createdAtDate: new Date(),
			createdAtHour: new Date().getHours().toString().padStart(2, '0') + ':00'
		}
	})

	async function onSubmit(data: CreatePlateSchema) {
		const createdAt = dateFns.getCreatedAt(data.createdAtDate, data.createdAtHour)

		mutate({
			name: data.name,
			description: data.description,
			inDiet: data.inDiet === 'true',
			createdAt
		})

		setStayedInDiet(data.inDiet === 'true')
	}

	function handleModalOpenChange(open: boolean) {
			if (!open) {
				setShowCreatedModal(false)
				setStayedInDiet(false)
			}
	}

	return (
		<Dialog onOpenChange={handleModalOpenChange}>
			<section className='grid'>
				<h2 className='text-primary'>
					Refeições
				</h2>

				<DialogTrigger className='mt-2' asChild>
					<Button size='lg' className='gap-2 justify-self-center'>
						<Plus className='size-[18px]' />

						<span className='text-sm font-bold'>
							Nova refeição
						</span>
					</Button>
				</DialogTrigger>

				<DialogPortal>
		      <DialogOverlay />

					{showCreatedModal ? (
						<PlateCreatedModal stayedInDiet={stayedInDiet} />
					) : (
						<DialogContent aria-describedby={undefined}>
							<div className='flex justify-end'>
								<DialogClose />
							</div>

							<DialogHeader>
								<DialogTitle className='sr-only'>
									Nova refeição
								</DialogTitle>
							</DialogHeader>

							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)} className='gap-6 grid items-center content-start'>
									<FormField
										control={form.control}
										name='name'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Nome</FormLabel>

												<FormControl>
													<Input placeholder='Sanduíche' {...field} />
												</FormControl>

												<FormMessage />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name='description'
										render={({ field }) => (
											<FormItem>
												<FormLabel>Descrição</FormLabel>

												<FormControl>
													<Textarea
														draggable={false}
														placeholder='Sanduíche de pão integral com atum e salada de alface e tomate'
														{...field}
													/>
												</FormControl>
											</FormItem>
										)}
									/>

									<div className='gap-5 grid grid-cols-2 items-center'>
										<FormField
											control={form.control}
											name='createdAtDate'
											render={({ field }) => (
												<FormItem className='flex flex-col'>
													<FormLabel>
														Data
													</FormLabel>

													<Popover>
														<PopoverTrigger asChild>
															<FormControl>
																<Button
																	variant='outline'
																	className={cn(
																		'justify-start',
																		!field.value && 'text-muted-foreground'
																	)}
																>
																	{field.value ? (
																		dateFns.formatAsDayMonthYearSeparatedByBars(field.value)
																	) : (
																		<span>Escolha uma data</span>
																	)}
																</Button>
															</FormControl>
														</PopoverTrigger>

														<PopoverContent className='w-auto p-0' align='start'>
															<Calendar
																autoFocus
																disabled={(date) => {
																	const today = new Date()
																	const maxDate = new Date('1900-01-01')

																	return date > today || date < maxDate
																}}
																mode='single'
																onSelect={field.onChange}
																selected={field.value}
															/>
														</PopoverContent>
													</Popover>

													<FormMessage />
												</FormItem>
											)}						
										/>

										<FormField
											control={form.control}
											name='createdAtHour'
											render={({ field }) => (
												<FormItem className='flex flex-col'>
													<FormLabel>Hora</FormLabel>

													<FormControl>
														<Input type='time' {...field} />
													</FormControl>

													<FormMessage />
												</FormItem>
											)}
										/>
									</div>

									<FormField
										control={form.control}
										name='inDiet'
										render={({ field }) => (
											<FormItem className='space-y-3'>
												<FormLabel>Está dentro da dieta?</FormLabel>

												<FormControl>
													<RadioGroup
														defaultValue={field.value}
														onValueChange={field.onChange}
														className='grid grid-cols-2'
													>
														<FormItem
															className={cn(
																'p-4 flex justify-center items-center space-x-3 space-y-0 cursor-pointer rounded-lg bg-gray-200',
																field.value === 'true' && 'bg-emerald-300 ring-2 ring-emerald-500 dark:bg-emerald-400'
															)}
														>
															<FormControl>
																<RadioGroupItem value='true' className='size-2 border-0 ring-0 bg-emerald-500' />
															</FormControl>

															<FormLabel className='cursor-pointer font-bold text-primary dark:text-background'>
																Sim
															</FormLabel>
														</FormItem>

														<FormItem
															className={cn(
																'p-4 flex justify-center items-center space-x-3 space-y-0 cursor-pointer rounded-lg bg-gray-200',
																field.value === 'false' && 'bg-rose-300 ring-2 ring-rose-500 dark:bg-rose-400'
															)}
														>
															<FormControl>
																<RadioGroupItem value='false' className='size-2 border-0 ring-0 bg-rose-500' />
															</FormControl>

															<FormLabel className='cursor-pointer font-bold text-primary dark:text-background'>
																Não
															</FormLabel>
														</FormItem>
													</RadioGroup>
												</FormControl>
											</FormItem>
										)}
									/>

									<Button disabled={isLoading} size='lg' type='submit'>
										{isLoading ? (
											<CircleNotch size={18} className='animate-spin' />
										) :
											'Cadastrar refeição'
										}
									</Button>
								</form>
							</Form>
						</DialogContent>
					)}
				</DialogPortal>
			</section>
		</Dialog>
	)
}
