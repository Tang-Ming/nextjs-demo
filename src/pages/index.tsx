import Button from "@/components/button"
import Test from "./test"
import { useState } from "react"
// import subjectModel from '../model/user'
export default function Index(){
    const [str,setStr]=useState()
    const clickBtn=()=>{
        console.log('click')
        fetch('/api_test').then(async res=>{
            return res.json()
        }).then(res=>{
            console.log(res)
            setStr(res.data)
        })
        // subjectModel.getList({title: 'string',
        //     data: {blocks: [],
        //     lid: 'string',
        //     page: 1},
        //     state: 1,
        //     created: 1,
        //     create_name: 'string',
        //     updated: 1,
        //     update_name: 'string',
        //     platform: 'string',
        //     lid: 'string'})
    }
    return <div>adw46464646
        <Test></Test>
        {str}
        <Button onClick={clickBtn}>按钮</Button>
    </div>
}