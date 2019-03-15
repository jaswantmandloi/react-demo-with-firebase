const langObj = {
  en: {
    translation: {      
    }
  },
  de: {
    translation: {      
    }
  }
};

export const getTransObj = () => {
  return  langObj;
}; 

export const extendTransObj = (newTransObj) => {  
  for(let langName in newTransObj) {
    langObj[langName]["translation"] =  {...langObj[langName]["translation"], ...newTransObj[langName]["translation"]};
  }  
}; 


