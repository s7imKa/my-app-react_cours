import { Component } from 'react'

export default class AppFilter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filter: 'all',
		}
	}

	filterValue = value => {
		this.setState({ filter: value })
		this.props.onUpdateFilter(value)
	}

	render() {
		const dataButton = [
			{ name: 'all', label: 'Всі співробітники' },
			{ name: 'rise', label: 'На підвищення' },
			{ name: 'moreSalary', label: 'Зарплата більше 1000$' },
		]

		const button = dataButton.map(({ name, label }) => {
			const { filter } = this.state
			const isActive = value =>
				`btn ${filter === value ? ' btn-light' : ' btn-outline-light'}`
			return (
				<button
					key={name}
					className={isActive(name)}
					type='button'
					onClick={() => this.filterValue(name)}
				>
					{label}
				</button>
			)
		})
		return <div className='btn-group'>{button}</div>
	}
}
