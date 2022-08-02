
export const setData =(key,value)=>{
  localStorage.setItem(key,JSON.stringify(value));
}

export const getData = (key)=>{
  return JSON.parse(localStorage.getItem(key));
}

export const removeData = (key)=>{
  localStorage.removeItem(key);
}