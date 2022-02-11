


/**
 * Data Send 
 * @param {*} key 
 * @param {*} arr 
 */
 function data_Send(keey , arrr){

    let dataa = JSON.stringify(arrr);
    localStorage.setItem(keey, dataa);

    return true;


}

/**
 * Data Get form 
 * @param {*} key 
 * @returns 
 */
function data_Get(keey){

    let dataa = localStorage.getItem(keey);

    return dataa ? JSON.parse(dataa) : false ;
      
       

}


// student
/**
 * Data Send to LS 
 * @param {*} key 
 * @param {*} arr 
 */
function dataSend(key , arr){

    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);

    return true;


}

/**
 * Data Get form LS 
 * @param {*} key 
 * @returns 
 */
function dataGet(key){

    let data = localStorage.getItem(key);

    return data ? JSON.parse(data) : false ;
      
       

}