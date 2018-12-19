import * as React from 'react'
import Button from 'antd/lib/button'
interface IProps {
    obj: Itasks[]
    style: boolean
    updateTasks: any
    updateTaskName: any
}
interface Itasks {
    name: string
    status: number
    taskID: number
}
interface IState {
	value: string
}
class UpdateList extends React.Component<IProps,IState> {
	constructor (props: IProps, state: IState) {
		super(props,state)
		this.handleClick = this.handleClick.bind(this)
		this.changeHandle = this.changeHandle.bind(this)
    }
	public handleClick () {
        let newObj: Itasks[] = this.props.obj
		let value: string = this.state.value
		if (value !== '') {
            newObj[0].name = this.state.value
			this.props.updateTasks(newObj)
        }
	}
	public changeHandle (e: React.ChangeEvent<HTMLInputElement>) {
		let data: string = e.target.value
		this.setState({
			value:data
        })
        let newObj: Itasks[] = this.props.obj
		if (data !== '') {
            newObj[0].name = data
			this.props.updateTaskName(newObj)
        }
	}
	public render () {
        let blockStyle: object = {
            display:"block"
        }
        let noneStyle: object = {
            display:"none"
        }
        let showFlags: boolean = this.props.style
        let inputValue: string = ""
        if(JSON.stringify(this.props.obj) !== "[]") {
            inputValue = this.props.obj[0].name
        }
		return (
			<div className="update" style={showFlags === false?noneStyle:blockStyle}>
				<div>
					<input type="text" value={inputValue} onChange={this.changeHandle}/>
				</div>
				<div>
					<Button type="primary" value="Update Task" onClick={this.handleClick}>updateList</Button>
				</div>
			</div>
			
		)
	}
}
export default UpdateList