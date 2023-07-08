import './App.css';

function App() {
	return (
		<div className='bg-gradient-to-tr from-fuchsia-300 to-sky-500'>
			<section
				id='login'
				className='p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto'
			>
				<div className='p-6 bg-sky-100 rounded'>
					<div className='flex items-center justify-center font-black m-3 mb-12'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-10 w-10 mr-3 text-red-600 animate-pulse'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
								clipRule='evenodd'
							/>
						</svg>
						<h1 className='tracking-wide text-3xl text-gray-900'>
							Indikator Nasional
						</h1>
					</div>
					<form
						id='login_form'
						action='/'
						method='POST'
						className='flex flex-col justify-center'
					>
						<div className='flex gap-3 justify-center items-center mb-3'>
							<div className='inline-flex items-center self-start'>
								<span className='font-bold text-gray-900'>Bulan</span>
							</div>
							<div className='flex'>
								/* TODO : Make function works*/
								<button
									type='button'
									// onClick={minus}
									className='bg-yellow-600 p-1.5 font-bold rounded'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
								<input
									id='item_count'
									name='month'
									type='number'
									defaultValue={1}
									className='max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
      block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
      focus:outline-none
      focus:border-sky-500
      focus:ring-1
      focus:ring-sky-500
      focus:invalid:border-red-500  focus:invalid:ring-red-500'
									/* eslint-disable-next-line react/jsx-no-comment-textnodes */
								/>
								/* TODO : Make function works */
								<button
									type='button'
									// onClick={plus}
									className='bg-green-600 p-1.5 font-bold rounded'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
							</div>
						</div>
						<label className='text-sm font-medium'>User</label>
						<input
							className='mb-3 px-2 py-1.5
    mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
    focus:outline-none
    focus:border-sky-500
    focus:ring-1
    focus:ring-sky-500
    focus:invalid:border-red-500 focus:invalid:ring-red-500'
							type='text'
							name='username'
							value='isolasi'
						/>
						<label className='text-sm font-medium'>Password</label>
						<input
							className='mb-3 px-2 py-1.5
    mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
    focus:outline-none
    focus:border-sky-500
    focus:ring-1
    focus:ring-sky-500
    focus:invalid:border-red-500 focus:invalid:ring-red-500'
							type='password'
							name='pass'
							placeholder='***'
							value='007'
						/>
						<label className='text-sm font-medium'>Numerator</label>
						<input
							className='mb-3 px-2 py-1.5
    mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
    focus:outline-none
    focus:border-sky-500
    focus:ring-1
    focus:ring-sky-500
    focus:invalid:border-red-500 focus:invalid:ring-red-500'
							type='text'
							name='numerator'
							placeholder='Angka'
						/>
						<label className='text-sm font-medium'>Denumerator</label>
						<input
							className='mb-3 px-2 py-1.5
    mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
    focus:outline-none
    focus:border-sky-500
    focus:ring-1
    focus:ring-sky-500
    focus:invalid:border-red-500 focus:invalid:ring-red-500'
							type='text'
							name='denumerator'
							placeholder='Angka'
						/>
						<div className='flex space-x-4 justify-center'>
							<div>
								<button
									formAction='/id'
									formMethod='post'
									className='px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-orange-400 to-red-600 font-medium text-gray-100 block transition duration-300 mt-1 w-24'
									type='submit'
								>
									ID-P
								</button>
							</div>
							<div>
								<button
									formAction='/visite'
									formMethod='post'
									className='px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300 mt-1 w-24'
									type='submit'
								>
									V-DPJP
								</button>
							</div>

							<div>
								<button
									formAction='/resiko-jatuh'
									formMethod='post'
									className='px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-400 font-medium text-gray-100 block transition duration-300 mt-1 w-24'
									type='submit'
								>
									RJ
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}

export default App;
