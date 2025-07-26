import { Component } from 'react'
import { v4 as newId } from 'uuid' // Генератор унікальних ID

// Імпортуємо дочірні компоненти
import AmployeesAddForm from '../amployees-add-form/amployees-add-form'
import AmployeesList from '../amployees-list/amployees-list'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'

import './app.css'

export default class App extends Component {
	constructor(props) {
		super(props)
		// Початковий стан — список співробітників
		this.state = {
			employees: [
				{
					name: 'Артем Ковальчук',
					salary: 1000,
					increase: false,
					rise: false,
					id: newId(),
				},
				{
					name: 'Алена Мельник',
					salary: 800,
					increase: false,
					rise: false,
					id: newId(),
				},
				{
					name: 'Максим Шевченко',
					salary: 500,
					increase: false,
					rise: false,
					id: newId(),
				},
				{
					name: 'Ірина Ткаченко',
					salary: 2300,
					increase: false,
					rise: false,
					id: newId(),
				},
			],
			term: '',
			filter: '',
		}
	}

	// Видалити співробітника за ID
	deleteItem = id => {
		this.setState(({ employees }) => ({
			employees: employees.filter(item => item.id !== id),
		}))
	}

	// Додати нового співробітника з валідацією імені та зарплати
	addItem = (name, salary) => {
		const isOnlyNumbers = value => /^\d+$/.test(value) // Перевірка: тільки цифри
		const isOnlyLetters = value => /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]+$/.test(value) // Перевірка: тільки літери та пробіли

		if (isOnlyNumbers(salary) && isOnlyLetters(name)) {
			this.setState(({ employees }) => ({
				employees: [
					...employees,
					{
						name: name,
						salary: salary,
						increase: false,
						rise: false,
						id: newId(),
					},
				],
			}))
		} else {
			alert('невірно введені імя чи зарплата') // Повідомлення при помилці
		}
	}

	onToggleProp = (id, prop) => {
		this.setState(({ employees }) => ({
			employees: employees.map(item =>
				item.id === id ? { ...item, [prop]: !item[prop] } : item
			),
		}))
	}

	serarchTerm = (item, term) => {
		if (term === 0) {
			return item
		}
		const filter = item.filter(elem => elem.name.indexOf(term) > -1)
		return filter
	}

	onUpdateSearch = term => {
		this.setState({ term: term })
	}

	filterEmployees = (item, filter) => {
		switch (filter) {

			case 'rise':
				return item.filter(item => item.rise === true)
			case 'moreSalary':
				return item.filter(item => item.salary > 1000)
			default:
				return item
		}
	}

	onUpdateFilter = filter => {
		this.setState({ filter: filter })
	}

	render() {
		const { employees, term, filter } = this.state
		const incresed = employees.filter(item => item.increase === true).length
		const sumEmployees = employees.length
		const search = this.serarchTerm(employees, term)
		const visibleData = this.filterEmployees(search, filter)

		return (
			<div className='app'>
				{/* Загальна інформація про співробітників */}
				<AppInfo
					key={`${sumEmployees}-${incresed}`}
					counterEmployees={sumEmployees}
					salaryBonus={incresed}
				/>

				{/* Панель пошуку і фільтрів */}
				<div className='search-panel'>
					<SearchPanel
						placeholder={'Знайти співробітника..'}
						onUpdateSearch={this.onUpdateSearch}
					/>
					<AppFilter onUpdateFilter={this.onUpdateFilter}/>
				</div>

				{/* Список співробітників */}
				<AmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>

				{/* Форма додавання нового співробітника */}
				<AmployeesAddForm addItem={this.addItem} />
			</div>
		)
	}
}
