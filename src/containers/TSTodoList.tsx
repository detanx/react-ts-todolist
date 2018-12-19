import { Avatar,Button,List} from 'antd'
import IState from "../constants/IState"
import * as React from "react"
import AddList from 'src/components/AddList'
import UpdateList from 'src/components/UpdateList'
import NGSearch from 'src/components/NGSearch'
interface Itasks {
    name: string
    status: number
    taskID: number
}

class TSTodoList extends React.Component <{}, IState> {
    constructor(props: {}, state:IState){
        super(props, state)
        this.state = {
            finished: 0,
            list: [{
                name: '任务1',
                status: 0,
                taskID: 0,
            }, {
                name: '任务2',
                status: 0,
                taskID: 1,
            }, {
                name: '任务3',
                status : 0,
                taskID: 2,
            }],
            style:false,
            totallist:[{
                name: '任务1',
                status: 0,
                taskID: 0,
            }, {
                name: '任务2',
                status: 0,
                taskID: 1,
            }, {
                name: '任务3',
                status : 0,
                taskID: 2,
            }],
            updateTask: []
        }
    }

    //删除taskList
    public deleteHandle (deleteTaskID: number) {
        let obj: Itasks[] = []
        let sum: number = 0
        this.state.list.forEach((item: Itasks) => {
            if (item.taskID !== deleteTaskID) {
                obj.push(item)
            }
        })
        this.setState({
            finished: sum,
            list: obj,
            totallist: obj
        })
    }

    //添加taskList
    public addTaskHandle = (newItem: Itasks)=>{
        let allTask: Itasks[] = this.state.list
        let newArray: Itasks[] = allTask
        newArray.push(newItem)
        this.setState({
            list: newArray,
            totallist: newArray
        })
    }

    //点击修改某个taskList
    public updateHandle(updateTaskID: number) {
        let obj: Itasks[] = []
        obj = this.state.list.filter((item: Itasks) => {
            return item.taskID === updateTaskID
        })
        this.setState({
            style: !this.state.style,
            updateTask: obj,
        })
    }
    
    //修改更新taskList
    public updateTaskHandle = (updateItem: Itasks[]) => {
        let obj: Itasks[] = []
        this.state.list.forEach((item: Itasks, index:number) => {
            if (item.taskID === updateItem[0].taskID) {
                obj[index] = updateItem[0]
            }
            if(item.taskID !== updateItem[0].taskID) {
                obj[index] = item
            }
        })
        this.setState({
            list: obj,
            style: false,
            totallist: obj,
        })
    }
    
    //修改taskList的name值
    public updateTaskNameHandle = (updateItem: Itasks[]) => {
        let obj: Itasks[] = []
        this.state.list.forEach((item: Itasks, index: number) => {
            if (item.taskID === updateItem[0].taskID) {
                obj[index] = updateItem[0]
            }
            if(item.taskID !== updateItem[0].taskID) {
                obj[index] = item
            }
        })
        this.setState({
            list: obj,
            totallist: obj,
        })
    }

    public searchTaskHandle= (searchObj: Itasks[]) =>{
        this.setState({
            list: searchObj
        })
    }
    public render() {
        let data = this.state.list
        return <div>
            <AddList addNewTask={this.addTaskHandle} nums={this.state.list.length}/>
            <NGSearch list={this.state.totallist} searchTask={this.searchTaskHandle} />
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item: Itasks) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.name}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    <Button type="primary" onClick={() => this.updateHandle(item.taskID)}>update</Button>
                    <Button type="primary" onClick={() => this.deleteHandle(item.taskID)}>delete</Button>
                </List.Item>
                )}
            />
            <UpdateList obj={this.state.updateTask} updateTasks={this.updateTaskHandle} updateTaskName={this.updateTaskNameHandle} style={this.state.style}/>
        </div>
        
    }
}
export default TSTodoList