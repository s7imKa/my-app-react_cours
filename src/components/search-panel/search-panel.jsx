import { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			term: '',
		}
	}

	onUpdateSearch = e => {
		const term = e.target.value
		this.setState({term: term})
		this.props.onUpdateSearch(term)
	}

	render() {
		const { palaceholder } = this.props
		return (
			<div>
				<input
					style={{ margin: '0 0 20px 0' }}
					type='text'
					className='form-control search-input'
					onChange={this.onUpdateSearch}
					value={this.state.term}
					placeholder={palaceholder}
				/>
			</div>
		)
	}
}
