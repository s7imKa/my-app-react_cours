import AmployeesListItem from '../amployees-list-item/amployees-list-item';

import './amployees-list.css'

export default function AmployeesList({data}) {
	
	return (
		<ul className='amployees-list list-group'>
			{data.map((employees, index) => (
				<AmployeesListItem key={index} {...employees} />
			))}
	
		</ul>
	)
}