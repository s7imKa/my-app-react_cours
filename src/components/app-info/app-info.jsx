import './app-info.css'

export default function AppInfo({ counterEmployees, salaryBonus }) {
	return (
		<div className='app-info'>
			<h1>Список співпрацівників в компанії N</h1>
			<h2>Загальне число співпрацівників: {counterEmployees}</h2>
			<h2>Премію отримують: {salaryBonus}</h2>
		</div>
	)
}
