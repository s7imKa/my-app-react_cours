import SearchPanel from '../search-panel/search-panel'

import './amployees-add-form.css'

export default function AmployeesAddForm() {
	return (
		<div className='amployees-add-form'>
			<h2>Додати нового співробітника</h2>
			<form>
				<SearchPanel placeholder={'Як його зватии..'}/>
				<SearchPanel placeholder={'Зарплата в $..'}/>
				<button
					className='btn btn-light'
					type='button'> 
						Добавити
				</button>
			</form>
		</div>
	)
}