import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AmployeesList from '../amployees-list/amployees-list'
import './app.css'
import AmployeesAddForm from '../amployees-add-form/amployees-add-form'


export default function App(){

	const employees = [
		{ name: 'Артем Ковальчук', salary: 1000 },
		{ name: 'Олена Мельник', salary: 800 },
		{ name: 'Максим Шевченко', salary: 500 },
		{ name: 'Ірина Ткаченко', salary: 2300 }
		];

	return (
		<div className='app'>
			<AppInfo/>
			<div className='search-panel'>
				<SearchPanel placeholder={'Знайти співробітника..'}/>
				<AppFilter/>
			</div>
			<AmployeesList data={employees}/>
			<AmployeesAddForm/>
		</div>
	)
}