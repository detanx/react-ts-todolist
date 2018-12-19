interface Itasks {
    name: string
    status: number
    taskID: number
}
export default interface IState {
    list: Itasks[]
    totallist: Itasks[]
    finished: number
    updateTask: Itasks[]
    updateTasks: () => void
    updateTaskName: () => void
    style: boolean
}