
import React ,{useMemo} from 'react';
import classes from './DemoList.module.css'
const DemoList =(props)=>{

    const {items }=props;
    const desc=[...items];
    const sortedList=useMemo(()=>{
        // console.log('item sorted')
        return items.sort((a,b)=> a-b);
    },[items]);

    const descending=useMemo(()=>{
        return desc.sort((a,b)=> b-a);
    },[items])


    console.log('demolist running')
    
    return <div className={classes.list}>
        <h2>{props.title}</h2>
        <ul>
            {!props.change && sortedList.map((item)=>
                (<li key={item}>{item}</li>)
            )}
            
             {props.change && descending.map((item)=>
                (<li key={item}>{item}</li>)
            )}
            
        </ul>
        
        
    </div>
}

export default React.memo(DemoList)