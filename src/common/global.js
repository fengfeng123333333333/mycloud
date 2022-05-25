export default {
  hideWord(str,num){
    if(str){
      let length=str.length;
      let str_1=str.slice(0,num);
      let str_2="...";
      let str_3=str.slice(length-num-1,length);
      return str_1+str_2+str_3
    }else{
      return
    }
  },
  dataNullHandle(value){
    if(!value&&value!=0){
      value="-"
    }
    return value;
  },
  //禁止滚动条滚动
  stopScroll(){
    document.documentElement.style.overflow="hidden";
  },
//允许滚动条滚动
  openScroll(){
    document.documentElement.style.overflow="scroll";
  },
  //----------时间截取
  timeSliceFun(time) {
    if (time) {
      time = time.slice(5, 10);
      return time
    } else {
      return
    }
  },

};
