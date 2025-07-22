import { Component } from 'react'
import './amployees-list-item.css'

export default class AmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        };
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: (increase ? false : true)
        }))
    }

    onLike = () => {
        this.setState(({star}) => ({
            star: (star ? false : true)
        }))
    }

    render() {
        const classText = 'list-group-item d-flex justify-content-between'
        let className = this.state.star ? classText + ' like' : classText
        
        const {name, salary, onDelete} = this.props;

        return (
            <li className={this.state.increase ? className + ' increase': className}>
                <span 
                onClick={this.onLike}
                className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={this.onIncrease}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
                    
                    <button type="button"
                            onClick={onDelete}
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}