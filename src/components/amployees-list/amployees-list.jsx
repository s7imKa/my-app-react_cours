import AmployeesListItem from '../amployees-list-item/amployees-list-item'

import './amployees-list.css'

export default function AmployeesList({ data, onDelete, onToggleProp}) {
	return (
		<ul className='amployees-list list-group'>
			{data.map(employees => (
				<AmployeesListItem
					key={employees.id}
					{...employees}
					onDelete={() => onDelete(employees.id)}
					onToggleProp={(e) => 
						onToggleProp(employees.id , e.currentTarget.getAttribute('data-toggle'))}
				/>
			))}
		</ul>
	)
}
