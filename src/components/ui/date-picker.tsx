import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface Props {
  value: Date | undefined
  onChange: (date: Date | undefined) => void
}

export function DatePicker({ value, onChange }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'p-[14px] justify-start text-left text-base font-normal',
            !value && 'text-gray-400'
          )}
        >
          {value ? format(value, 'dd/MM/yy') : <span>12/08/2022</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0 bg-gray-700'>
        <Calendar
          mode='single'
          selected={value}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
