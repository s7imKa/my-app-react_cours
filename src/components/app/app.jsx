import { Component } from 'react'

import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AmployeesList from '../amployees-list/amployees-list'
import AmployeesAddForm from '../amployees-add-form/amployees-add-form'

import './app.css'

export default class App extends Component{
	render() {
		const employees = [
			{ name: 'Артем Ковальчук', salary: 1000, increase: false},
			{ name: 'Олена Мельник', salary: 800, increase: false},
			{ name: 'Максим Шевченко', salary: 500, increase: false},
			{ name: 'Ірина Ткаченко', salary: 2300, increase: false}
			];

		return (
			<div className='app'>
				<AppInfo/>
				<div className='search-panel'>
					<SearchPanel placeholder={'Знайти співробітника..'}/>
					<AppFilter/>
				</div>
				<AmployeesList data={employees} onDelete={(id) => console.log(id)}/>
				<AmployeesAddForm/>
			</div>
		)
	}
}