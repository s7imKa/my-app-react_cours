import { Component } from 'react'
import { v4 as newId } from 'uuid' // Генератор ID

import AmployeesAddForm from '../amployees-add-form/amployees-add-form'
import AmployeesList from '../amployees-list/amployees-list'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'

import './app.css'



export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			employees: [
				{ name: 'Артем Ковальчук', salary: 1000, increase: false, id: newId() },
				{ name: 'Олена Мельник', salary: 800, increase: false, id: newId() },
				{ name: 'Максим Шевченко', salary: 500, increase: false, id: newId() },
				{ name: 'Ірина Ткаченко', salary: 2300, increase: false, id: newId() },
			],
		}
	}

	deleteItem = id => {
		this.setState(({ employees }) => ({
			employees: employees.filter(item => item.id !== id),
		}))
	}

	addItem = (name, salary) => {
		this.setState(({ employees }) => {
			const isOnlyNumbers = (value) => /^\d+$/.test(value);
			const isOnlyLetters = (value) => /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]+$/.test(value);
			if(isOnlyNumbers(salary) && isOnlyLetters(name)){
				return {
					employees: [
						...employees,
						{ name: name, salary: salary, increase: false, id: newId() },
					],
				}
			} else {
				alert('невірно введені імя чи зарплата')
			}
			
		})
	}

	render() {
		const { employees } = this.state
		return (
			<div className='app'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel placeholder={'Знайти співробітника..'} />
					<AppFilter />
				</div>
				<AmployeesList data={employees} onDelete={this.deleteItem} />
				<AmployeesAddForm addItem={this.addItem} />
			</div>
		)
	}
}
