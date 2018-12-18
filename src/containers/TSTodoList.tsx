import { Avatar,Button,List} from 'antd'
import Itasks from "../constants/Itasks"
import * as React from "react"
import AddList from 'src/components/AddList'
import UpdateList from 'src/components/UpdateList'
import NGSearch from 'src/components/NGSearch'
class TSTodoList extends React.Component<{},Itasks> {
    constructor(props:any){
        super(props);
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
            updateTask:{},
            updateTaskName:{},
        }
    }
    //删除taskList
    public deleteHandle (deleteTaskID:number) {
        let obj:any = [];
        let sum = 0;
        this.state.list.forEach((item:any) => {
            if (item.taskID !== deleteTaskID) {
                obj.push(item);
                if (item.status === 1 ) {
                    sum++;
                }
            }
        });
        this.setState({
            finished: sum,
            list: obj,
            totallist:obj
        });
    }

    //添加taskList
    public addTaskHandle = (newItem:any)=>{
        let allTask = this.state.list
        allTask.push(newItem)
        this.setState({
            list: allTask,
            totallist:allTask
        });
    }

    //点击修改某个taskList
    public updateHandle(updateTaskID:number) {
        let obj:any = [];
        this.state.list.forEach((item:any) => {
            if (item.taskID === updateTaskID) {
                obj.push(item);
            }
        });
        this.setState({
            style:!this.state.style,
            updateTask: obj,
        });
    }
    
    //修改更新taskList
    public updateTaskHandle = (updateItem:any) => {
        let obj:any = this.state.list;
        this.state.list.forEach((item:any) => {
            if (item.taskID === updateItem.taskID) {
                obj.item = updateItem
            }
        });
        this.setState({
            list: obj,
            style:false,
            totallist:obj,
        });
    }
    
    //修改taskList的name值
    public updateTaskNameHandle = (updateItem:any) => {
        let obj:any = this.state.list;
        this.state.list.forEach((item:any) => {
            if (item.taskID === updateItem.taskID) {
                obj.item = updateItem
            }
        });
        this.setState({
            list: obj,
            totallist:obj,
        });
    }

    public searchTaskHandle= (searchObj:any) =>{
        this.setState({
            list:searchObj
        })
    }
    public render() {
        let data = this.state.list;
        return <div>
            <AddList addNewTask={this.addTaskHandle} nums={this.state.list.length}/>
            <NGSearch list={this.state.totallist} searchTask={this.searchTaskHandle} />
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item:any) => (
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
            <UpdateList obj={this.state.updateTask} updateTask={this.updateTaskHandle} updateTaskName={this.updateTaskNameHandle} style={this.state.style}/>
        </div>
        
    }
}
export default TSTodoList;