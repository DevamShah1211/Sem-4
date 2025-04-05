function st(){
    const settime=new Date().toLocaleTimeString()
    console.log(settime)
}
st()
setInterval(st,1000)