import * as React from "react"
import { LocaleProvider, DatePicker, message } from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN'
import * as moment from "moment"
import 'moment/locale/zh-cn'

moment.locale('zh-cn')
interface Istate {
    date:any
}
class TestAntd extends React.Component<{},Istate> {
    constructor(props:any) {
        super(props);
        this.state = {
        date: '',
        };
    }
    public handleChange(date:string) {
        message.info('您选择的日期是: ' + (date ? date.toString() : ''));
        this.setState({ date });
    }
    public render() {
        return (
        <LocaleProvider locale={zhCN}>
            <div style={{ width: 400, margin: '100px auto' }}>
            <DatePicker onChange={(value:any) => this.handleChange(value)} />
            <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
            </div>
        </LocaleProvider>
        );
    }
}
export default TestAntd