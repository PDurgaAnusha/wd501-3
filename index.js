/* eslint-disable no-undef */
const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    function markAsComplete(index) {
        all[index].completed = true;
    }
  
    const overdue = () => { 
      let newTodo = all.filter((item)=>{
          return item.dueDate === yesterday;
      })
      
      return newTodo;
    }
  
    const dueToday = () => {
      let newTodo = all.filter((item)=>{
          return item.dueDate === today;
      })
      
      return newTodo;
    }
  
    const dueLater = () => {
      let newTodo = all.filter((item)=>{
          return item.dueDate === tomorrow;
      })
     
      return newTodo;
    }
  
    const toDisplayableList = (list) => {
      let len = list.length
      let resStr = ""
      for(let i=0;i<len;i++){
          let str = "["
          list[i].completed ? str+="x] " : str+=" ] "
          str+=list[i].title
          
          if(list[i].dueDate!==today){
              str+=(" "+list[i].dueDate)
          }
          
          resStr +=(str)
          if(i!==(len-1))
          {
              resStr+='\n'
          }
      }
      
      return resStr
      
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
module.exports = todoList;
  

