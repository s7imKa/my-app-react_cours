import AmployeesListItem from '../amployees-list-item/amployees-list-item';

import './amployees-list.css'

export default function AmployeesList({data, onDelete}) {
	
	return (
		<ul className='amployees-list list-group'>
			{data.map((employees, index) => (
				<AmployeesListItem 
				key={index+1} 
				{...employees} 
				onDelete={() => onDelete(index+1)}/>
			))}
	
		</ul>
	)
}