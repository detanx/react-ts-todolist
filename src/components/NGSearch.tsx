import * as React from 'react'
import Button from 'antd/lib/button'
interface IProps {
    list:any
    searchTask: any
}
interface IState {
	value:any;
}
class NGSearch extends React.Component<IProps,IState> {
	public props: IProps = {
        list:{},
        searchTask: ""
    }
    public state: IState = {
		value:""
    }
	constructor (props: IProps, state: IState) {
		super(props,state);
		this.searchHandleClick = this.searchHandleClick.bind(this)
		this.searchChangeHandle = this.searchChangeHandle.bind(this)
	}

	//点击搜索taskList
	public searchHandleClick () {
        const value = this.state.value
        const obj:any = [];
        const SPACE_REGEXP = /\s+/g
        const VALUE = value.replace(SPACE_REGEXP,"");
        if( VALUE !== "" ) {
            this.props.list.forEach((item:any) => {
                if (item.name === value) {
                    obj.push(item)
                }
            });
            this.props.searchTask(obj)
        }
		if( VALUE === "" ) {
            this.props.searchTask(this.props.list)
        }
    }
    
	public searchChangeHandle (e:any) {
		const data = e.target.value
		this.setState({
			value:data
		})
	}
	public render () {
		return (
			
			<div className="dialog">
				<div>
					<h3>Task</h3>
					<input type="text" placeholder="搜索内容" onChange={this.searchChangeHandle}/>
					<Button type="primary" onClick={this.searchHandleClick}>search</Button>
				</div>
			</div>
			
		);
	}
}
export default NGSearch;