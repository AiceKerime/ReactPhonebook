import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';


export default class UserItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            editCond: false,
            name: props.name,
            phone: props.phone
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleUpdate = (event) => {
        event.preventDefault()
        this.props.update(this.state.name, this.state.phone)
        this.setState({ editCond: false })
    }

    render() {
        if (this.state.editCond) {
            return (
                <div className='container shadow-2xl shadow-slate-300 bg-white/80 rounded-lg w-auto h-auto space-y-2 px-8 py-5' >
                    <div className='flex space-x-3 items-center'>
                        <FontAwesomeIcon icon='signature' />
                        <input type='text' name='name' id='name' value={this.state.name} onChange={this.handleInputChange} className='px-2 py-1 border border-blue-400/75 rounded-lg w-full' />
                    </div>

                    <div className='flex space-x-4 items-center'>
                        <FontAwesomeIcon icon='phone' />
                        <input type='text' name='phone' id='phone' value={this.state.phone} onChange={this.handleInputChange} className='px-2 py-1 border border-blue-400/75 rounded-lg w-full' />
                    </div>

                    <div className='flex justify-evenly py-2'>
                        <button type='button' onClick={this.handleUpdate} className='transition hover:text-slate-400 hover:delay-150 font-semibold tracking-wider'>Update</button>

                        <button type='button' onClick={() => this.setState({ editCond: false })} className='transition hover:text-slate-400 hover:delay-150 font-semibold tracking-wider'>Cancel</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container shadow-2xl shadow-slate-300 bg-white/80 rounded-lg w-auto h-auto space-y-4 px-8 py-5  border-2 border-blue-200' >
                    <div className='flex space-x-3 items-center'>
                        <FontAwesomeIcon icon='signature' />
                        <h1>{this.props.name}</h1>
                    </div>

                    <div className='flex space-x-4 items-center opacity-60'>
                        <FontAwesomeIcon icon='phone' />
                        <h1>{this.props.phone}</h1>
                    </div>

                    <div className='flex justify-evenly py-2'>
                        <button type='button' onClick={() => this.setState({ editCond: true })} className='transition hover:text-slate-400 hover:delay-150 font-semibold tracking-wider'>Edit</button>

                        <button type='button' onClick={this.props.remove} className='transition hover:text-slate-400 hover:delay-150 font-semibold tracking-wider'>Delete</button>
                    </div>
                </div>
            )
        }
    }
}