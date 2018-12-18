import * as React from 'react'
import Button from 'antd/lib/button'
interface IProps {
    nums: number
    addNewTask: any
}
interface IState {
	value:any;
}
class AddList extends React.Component<IProps,IState> {
	public props: IProps = {
        addNewTask: "",
        nums: 0
    }
    public state: IState = {
		value:""
    }
	constructor (props: IProps, state: IState) {
		super(props,state);
		this.addHandleClick = this.addHandleClick.bind(this)
		this.addChangeHandle = this.addChangeHandle.bind(this)
	}

	//点击添加taskList
	public addHandleClick () {
		let len = this.props.nums
		let newid = len > 0 ? len : 0
		let value = this.state.value
		if (value !== '') {
			let obj = {
				name: value,
				status: 0,
				taskID: newid,
			};
			this.props.addNewTask(obj)
		}
		
	}
	public addChangeHandle (e:any) {
		let data = e.target.value
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