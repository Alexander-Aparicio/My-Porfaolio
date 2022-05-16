const contador = ( stateInitial=0, finalValue=100, speed=1, update)=>{
    setTimeout(()=>{
        if( stateInitial < Number(finalValue) ) {
            update(stateInitial+1)
        } else {
            return 
        }
    }, 100/speed)
}

export default contador