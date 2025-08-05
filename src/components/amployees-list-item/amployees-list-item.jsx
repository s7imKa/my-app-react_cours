import './amployees-list-item.css'

export default function AmployeesListItem(props) {
	const { name, salary, onDelete, onToggleProp, increase, rise } = props

	const classText = 'list-group-item d-flex justify-content-between'
	let className = rise ? classText + ' like' : classText

	return (
		<li className={increase ? className + ' increase' : className}>
			<span onClick={onToggleProp} className='list-group-item-label' data-toggle='rise'>
				{name}
			</span>
			<input type='text' className='list-group-item-input' value={salary + '$'} readOnly />
			<div className='d-flex justify-content-center align-items-center'>
				<button
					type='button'
					data-toggle='increase'
					onClick={onToggleProp}
					className='btn-cookie btn-sm '
				>
					<i className='fas fa-cookie'></i>
				</button>

				<button type='button' onClick={onDelete} className='btn-trash btn-sm '>
					<i className='fas fa-trash'></i>
				</button>
				<i className='fas fa-star'></i>
			</div>
		</li>
	)
}
