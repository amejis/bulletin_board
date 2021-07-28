import React from 'react';
import './Top.css';
import ConstantsList from './constants';
import { render } from '@testing-library/react';

export class Top extends React.Component{
    load(){
        
    }
    
    render(){
        return(
            <div className='bulletin_board'>
            <Linklist value ={}
                />
            <div className='new_thread_btn'>
                <btn className='' 
                onClick={'"location.href=' + ConstantsList.NEW_THREAD_BTN_LINK + '"'}>
                    {ConstantsList.NEW_THREAD_BTN_NAME}
                </btn>
            </div>
                <Thread value ={this.props}
                />
            </div>
        );
    }
}
function Linklist(props){
    //DB読み込み

    const thread_title_list = a;//スレッドタイトルの配列を設定
    
    let link
    for(let i=0;i<10;i++){
        


    }

    render();{
        return(
        
        );
    }

}


function Thread(props){


    render();{
        return(
            <div className='thread'>
                <h3 className='thread_title'>{this.thread_title}</h3>

            </div>
        );
    }
}