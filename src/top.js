import React from 'react';
import './top.css';
import ConstantsList from './constant';
import { render } from '@testing-library/react';
//import test from './test';

export class Top extends React.Component{
    load(){
        
    }
    
    render(){
        return(
            <div className='bulletin_board'>
            <Linklist
                />
            <div className='new_thread_btn'>
                <button className='' 
                onClick={'location.href=' + ConstantsList.NEW_THREAD_BTN_LINK + '"'}>
                    {ConstantsList.NEW_THREAD_BTN_NAME}
                </button>
            </div>
                <Thread 
                />
            </div>
        );
    }
}
function Linklist(){
    /*DB読み込み(スレッドタイトルをすべて取得)*/
    //↓テスト用データ
    const thread_title_list = [{title:"test1"},{title:"test2"}];
    //スレッドタイトルの配列を設定
    render();{
        return(
            <div className='link'>
                {thread_title_list.map((thread_title_list) => (
                    <a href={
                        ConstantsList.THREAD_DETAIL_LINK 
                        + '?' 
                        +thread_title_list.title
                    }>
                        {thread_title_list.title}
                    </a>
                ))}
            </div>
        )
    }

}


function Thread(){
    /*DB読み込み(スレッドタイトルと投稿を習得)*/
    //↓テストデータ
    const thread_list =[
        {title:"test1",number:"1",time:"2021/06/20 10:00:00",contents:"testpost11"},
        {title:"test1",number:"2",time:"2021/06/20 10:01:00",contents:"testpost12"},
        {title:"test1",number:"3",time:"2021/06/20 10:02:00",contents:"testpost13"},
        {title:"test1",number:"4",time:"2021/06/20 10:03:00",contents:"testpost14"},
        
        //,{title:"test2",post:"testpost21",post:"testpost22",post:"testpost23",post:"testpost24",post:"testpost25"}
        //,{title:"test3",post:"testpost31",post:"testpost32",post:"testpost33",post:"testpost34",post:"testpost35"}
        //,{title:"test4",post:"testpost41",post:"testpost42",post:"testpost43",post:"testpost44",post:"testpost45"}
        //,{title:"test5",post:"testpost51",post:"testpost52",post:"testpost53",post:"testpost54",post:"testpost55"}
    ];
    for(i=0;thread_list.title[i]===null;i++){
        (<h3 className='thread_title'>{thread_list.title[i]}</h3>)
        
        for(j=0;thread_list.post[i][j]===null;j++){

        }
    }

    render();{
        return(
            <div className='thread'>
                {}
                
            </div>
        );
    }
}

function Postform(){

}

export default Top;