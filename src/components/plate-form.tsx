import { CircleNotch } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

import { cn } from '@/lib/utils'
import { dateFns } from '@/lib/date-fns'
import { PlateSchema } from '@/lib/zod'
import { UseFormReturn } from 'react-hook-form'

export interface Props {
	form: UseFormReturn<PlateSchema>
	isLoading: boolean
	onSubmit(data: PlateSchema): Promise<void>
}

export function PlateForm({ form, isLoading, onSubmit }: Props) {
	return (
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
											field.value === 'true' && 'bg-emerald-100 ring-2 ring-emerald-500'
										)}
									>
										<FormControl>
											<RadioGroupItem
												data-testid='on-diet-radio'
												value='true'
												className='size-2 border-0 ring-0 bg-emerald-500'
											/>
										</FormControl>

										<FormLabel className='cursor-pointer font-bold text-primary'>
											Sim
										</FormLabel>
									</FormItem>

									<FormItem
										className={cn(
											'p-4 flex justify-center items-center space-x-3 space-y-0 cursor-pointer rounded-lg bg-gray-200',
											field.value === 'false' && 'bg-rose-100 ring-2 ring-rose-500'
										)}
									>
										<FormControl>
											<RadioGroupItem 
												data-testid='out-of-diet-radio'
												value='false'
												className='size-2 border-0 ring-0 bg-rose-500'
											/>
										</FormControl>

										<FormLabel className='cursor-pointer font-bold text-primary'>
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
						'Confirmar'
					}
				</Button>
			</form>
		</Form>
	)
}
