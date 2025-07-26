import { Component } from 'react'

import './amployees-add-form.css'

export default class AmployeesAddForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			salary: '',
		}
	}

	onValueChang = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	onSubmit = e => {
		e.preventDefault()
		this.props.addItem(this.state.name, this.state.salary)
		this.setState({
			name: '',
			salary: '',
		})
	}

	render() {
		const { name, salary } = this.state

		return (
			<div className='amployees-add-form'>
				<h2>Додати нового співробітника</h2>
				<form onSubmit={this.onSubmit}>
					<input
						name='name'
						style={{ margin: '0 0 20px 0' }}
						type='text'
						className='form-control search-input'
						placeholder={'Як його зватии..'}
						onChange={this.onValueChang}
						value={name}
					/>
					<input
						name='salary'
						style={{ margin: '0 0 20px 0' }}
						type='text'
						className='form-control search-input'
						placeholder={'Зарплата в $..'}
						onChange={this.onValueChang}
						value={salary}
					/>

					<button type="submit" className='btn btn-light' >
						Добавити
					</button>
				</form>
			</div>
		)
	}
}
