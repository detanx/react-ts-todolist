import * as React from 'react'
import Button from 'antd/lib/button'
interface IProps {
    obj: any
    style:boolean
    updateTask: any
    updateTaskName:any
}
interface IState {
	value:any;
}
class UpdateList extends React.Component<IProps,IState> {
	public props: IProps = {
        obj: {},
        style:false,
        updateTask: "",
        updateTaskName:""
    }
    public state: IState = {
		value:"填写修改内容"
    }
	constructor (props: IProps, state: IState) {
		super(props,state)
		this.handleClick = this.handleClick.bind(this)
		this.changeHandle = this.changeHandle.bind(this)
    }
	public handleClick () {
        let newObj = this.props.obj
		let value = this.state.value
		if (value !== '') {
            newObj[0].name = this.state.value
			this.props.updateTask(newObj)
        }
	}
	public changeHandle (e:any) {
		let data = e.target.value
		this.setState({
			value:data
        })
        let newObj = this.props.obj
		if (data !== '') {
            newObj[0].name = data
			this.props.updateTaskName(newObj)
        }
	}
	public render () {
        let blockStyle = {
            display:"block"
        }
        let noneStyle = {
            display:"none"
        }
        let showFlags = this.props.style
        let inputValue = "";
        if(JSON.stringify(this.props.obj) !== "{}") {
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
			
		);
	}
}
export default UpdateList;