import * as React from 'react'
import Button from 'antd/lib/button'
interface IProps {
    nums: number
    addNewTask: (item:Itasks) => void
}
interface Itasks {
    name: string
    status: number
    taskID:number
}
interface IState {
	value: string
}
class AddList extends React.Component<IProps,IState> {
	constructor (props: IProps, state: IState) {
		super(props,state);
		this.addHandleClick = this.addHandleClick.bind(this)
		this.addChangeHandle = this.addChangeHandle.bind(this)
	}

	//点击添加taskList
	public addHandleClick (): void {
		let len: number = this.props.nums
		let newid: number = len > 0 ? len : 0
		let value: string = this.state.value
		if (value !== '') {
			let obj = {
				name: value,
				status: 0,
				taskID: newid,
			};
			this.props.addNewTask(obj)
		}
		
	}
	public addChangeHandle (event:any): void {
		let data: string = event.target.value
		this.setState({
			value:data
		})
	}
	public render () {
		return (
			<div className="dialog">
				<div>
					<h3>Task</h3>
					<input type="text" placeholder="你想做点什么" onChange={this.addChangeHandle}/>
					<Button type="primary" onClick={this.addHandleClick}>addList</Button>
				</div>
			</div>
			
		);
	}
}
export default AddList;