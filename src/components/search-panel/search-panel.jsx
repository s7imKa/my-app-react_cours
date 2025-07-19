import './search-panel.css'

export default function SearchPanel({placeholder}) {
	return (
		<div>
			<input 
			style={{
				margin: '0 0 20px 0'
			}}
			type="text" 
			className='form-control search-input'
			placeholder={placeholder}
			/>
		</div>

	)
}