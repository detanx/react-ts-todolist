import * as React from 'react'
import Button from 'antd/lib/button'
interface IProps {
    list: Itasks[]
    searchTask: (item:Itasks[]) => void
}
interface Itasks {
    name: string
    status: number
    taskID: number
}
interface IState {
	value: string
}
class NGSearch extends React.Component<IProps,IState> {
	constructor (props: IProps, state: IState) {
		super(props, state)
		this.searchHandleClick = this.searchHandleClick.bind(this)
		this.searchChangeHandle = this.searchChangeHandle.bind(this)
	}

	//点击搜索taskList
	public searchHandleClick () {
		let value: string = this.state.value
		let oldList: Itasks[] = this.props.list
        let obj: Itasks[] = []
        const SPACE_REGEXP: RegExp = /\s+/g
        let nameValue: string = value.replace(SPACE_REGEXP, "")
        if( nameValue !== "" ) {
            this.props.list.forEach((item:Itasks) => {
                if (item.name === value) {
                    obj.push(item)
                }
            })
            this.props.searchTask(obj)
        }
		if( nameValue === "" ) {
            this.props.searchTask(oldList)
        }
    }
    
	public searchChangeHandle (e: React.ChangeEvent<HTMLInputElement>) {
		let data: string = e.target.value
		this.setState({
			value:data
		})
	}
	public render () {
		return (
			<div className="dialog">
				<div>
					<h3>Search</h3>
					<input type="text" placeholder="搜索内容" onChange = {this.searchChangeHandle}/>
					<Button type="primary" onClick={this.searchHandleClick}>search</Button>
				</div>
			</div>
			
		)
	}
}
export default NGSearch