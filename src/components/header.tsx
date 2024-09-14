import logo from '@/assets/logo.svg'

export function Header() {
	return (
		<header className='flex justify-between'>
			<img src={logo} alt='Logo depicting a black fork next to a black knife, symbolizing dining and culinary themes.' />

			{/*TODO: add dark theme toggle*/}

			<img src='https://github.com/mar-alv.png' alt='User profile image.' className='size-10 border-gray-200 border-2 rounded-full' />
		</header>
	)
}
