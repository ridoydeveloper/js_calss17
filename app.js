
// JS Tabs

const tab_menu = document.querySelectorAll('.rid-tab .tab-manu ul li a');
const tab_pane_all = document.querySelectorAll('.rid-tab .tab-pane');


tab_menu.forEach(item =>{


item.addEventListener('click', function(e){
 
    e.preventDefault();

    tab_menu.forEach(item =>{

        item.classList.remove('active');
    });

    item.classList.add('active');


   const tab_pane = document.querySelector(this.getAttribute('href'))

   tab_pane_all.forEach(item => {

    item.classList.remove('active');

   });
   tab_pane.classList.add('active');




});


});

// Theme Options clone

const tabs_menu = document.querySelectorAll('.side-tab .tabs-manu ul li a');

const tabs_pane_all = document.querySelectorAll('.side-tab .tabs-pane');


tabs_menu.forEach(item => {


item.addEventListener('click', function(e){
 
    e.preventDefault();


    const tabs_pane = document.querySelector(this.getAttribute('href'));

    tabs_pane_all.forEach(item => {

        item.classList.remove('activee');

    });
    tabs_pane.classList.add('activee');
    

});

});


// product Apps 



const product_form = document.getElementById('product_form');
const product_data = document.getElementById('product_data_list');


product_form.addEventListener('submit', function(e){
    e.preventDefault();

    let productName = product_form.querySelector("input[placeholder='product Name']"); 
    let productCode = product_form.querySelector("input[placeholder='product code']"); 
    let productPhoto = product_form.querySelector("input[placeholder='product Photo']"); 
    let buyPrice = product_form.querySelector("input[placeholder='Buy price']");  
    let sellPrice = product_form.querySelector("input[placeholder='Sell price']");  
    
    
    if(productName.value == '' || productCode.value == '' || productPhoto.value == '' || buyPrice.value == '' || sellPrice.value == '' ){
        alert('All fields are required ');
    }else {
       
        let storateData ;
        if( data_Get('product_apps') ){
            storateData = data_Get('product_apps');
        }
        else{
            storateData = [];
        }

        storateData.push({
            product_Name : productName.value, 
            product_Code : productCode.value, 
            product_Photo : productPhoto.value,
            buy_Price : buyPrice.value,
            sell_Price : sellPrice.value
            
        });

        data_Send('product_apps', storateData);

    

        product_form.querySelector("input[placeholder='product Name']").value = ''; 
        product_form.querySelector("input[placeholder='product code']").value = ''; 
        product_form.querySelector("input[placeholder='product Photo']").value = ''; 
        product_form.querySelector("input[placeholder='Buy price']").value = ''; 
        product_form.querySelector("input[placeholder='Sell price']").value = '';   
        

        allProductData();
    };
    
});




allProductData();

function allProductData(){

   let allproduct_data = data_Get('product_apps');

    let dataa = '';

    allproduct_data.map(function(Product , index){ 
        
        dataa += `
            <tr>
                <td>${ index + 1 }</td>
                <td>${ Product.product_Name}</td>
                <td>${ Product.product_Code}</td>
                <td><img style="width:50px; height:50px;object-fit:cover;" src="${Product.product_Photo}"></td>
                <td>${ Product.buy_Price}</td>
                <td>${ Product.sell_Price}</td>
                
               
            </tr>
        `;
    });

    product_data.innerHTML = dataa;

};



// student


const student_form = document.getElementById('student_form');
const data_list = document.getElementById('data_list');


student_form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = student_form.querySelector("input[placeholder='Student Name']"); 
    let roll = student_form.querySelector("input[placeholder='Roll Number']"); 
    let student_class = student_form.querySelector("input[placeholder='Class']"); 
    let photo = student_form.querySelector("input[placeholder='Photo']"); 
    let gender = student_form.querySelector("input[type='radio']:checked");  
    let ban = student_form.querySelector("input[placeholder='Bangla']");  
    let eng = student_form.querySelector("input[placeholder='English']");  
    let math = student_form.querySelector("input[placeholder='Math']");  
    let sci = student_form.querySelector("input[placeholder='Science']");  
    let ss = student_form.querySelector("input[placeholder='Social Science']");  
    let reli = student_form.querySelector("input[placeholder='Religion']"); 
    
    
    if(name.value == '' || roll.value == '' || student_class.value == '' ){
        alert('All fields are required ');
    }else {
       
        let storate_data = [];
        if( dataGet('result_apps') ){
            storate_data = dataGet('result_apps');
        }

        storate_data.push({
            name : name.value, 
            roll : roll.value, 
            className : student_class.value,
            gender : gender.value,
            photo : photo.value,
            ban : ban.value, 
            eng : eng.value, 
            math : math.value, 
            sci : sci.value, 
            social : ss.value, 
            reli : reli.value 
        });

        dataSend('result_apps', storate_data);

        student_form.querySelector("input[placeholder='Student Name']").value = ''; 
        student_form.querySelector("input[placeholder='Roll Number']").value = ''; 
        student_form.querySelector("input[placeholder='Class']").value = ''; 
        student_form.querySelector("input[placeholder='Photo']").value = '';     
        student_form.querySelector("input[placeholder='Bangla']").value = '';  
        student_form.querySelector("input[placeholder='English']").value = '';  
        student_form.querySelector("input[placeholder='Math']").value = '';  
        student_form.querySelector("input[placeholder='Science']").value = '';  
        student_form.querySelector("input[placeholder='Social Science']").value = '';  
        student_form.querySelector("input[placeholder='Religion']").value = ''; 
        
        

        allStudentData();
    }
    


});

allStudentData();
function allStudentData(){

    let all_data = dataGet('result_apps');

    let data = '';

    all_data.map((student, index) => {
        data += `
            <tr>
                <td>${ index + 1 }</td>
                <td>${ student.name }</td>
                <td>${ student.roll }</td>
                <td>${ student.className }</td>
                <td>${ student.gender }</td>
                <td> A </td>
                <td> 4.8 </td>
                <td><img style="width:50px; height:50px;object-fit:cover;" src="${ student.photo }"></td>
                <td>
                    <button class="btn btn-info btn-sm" data-bs-toggle="modal" onclick="getSingleResult(${index})" data-bs-target="#student_single_modal" >View</button>
                    <button onclick="deleteStudent(${ index })" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        `;
    });

    data_list.innerHTML = data;

}

/**
 * Delete Student Data 
 */

function deleteStudent(id){

    let conf = confirm('Are you sre ?');

    if(conf){
        let storage_data = dataGet('result_apps');
        storage_data.splice(id, 1);
        dataSend('result_apps',storage_data);
        allStudentData();
    }else{
        return false;
    }

    

}

const student_result_data = document.querySelector('.student-result-data');
function getSingleResult(index){
    let result = new Result;
    let storage_data = dataGet('result_apps');
    student_result_data.innerHTML = `
            <img class="shadow" src="${ storage_data[index].photo }" alt="">
            <h2>${ storage_data[index].name }</h2>
            <hr>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <td>Subject</td>
                        <td>Marks</td>
                        <td>GPA</td>
                        <td>Grade</td>
                        <td>CGPA</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bangla</td>
                        <td>${ storage_data[index].ban }</td>
                        <td>${ result.result(storage_data[index].ban).gpacal }</td>
                        <td>${ result.result(storage_data[index].ban).greadcal }</td>
                        <td rowspan="6">  

                        ${ result.finalCgpa(  storage_data[index].ban, storage_data[index].eng, storage_data[index].math, storage_data[index].sci, storage_data[index].social, storage_data[index].reli  ).rescgpa }
                        
                        </td> 
                        <td rowspan="6">${ result.finalCgpa(  storage_data[index].ban, storage_data[index].eng, storage_data[index].math, storage_data[index].sci, storage_data[index].social, storage_data[index].reli  ).resgread }</td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>${ storage_data[index].eng }</td>
                        <td>${ result.result(storage_data[index].eng).gpacal }</td>
                        <td>${ result.result(storage_data[index].eng).greadcal }</td>

                    </tr>
                    <tr>
                        <td>Math</td>
                        <td>${ storage_data[index].math }</td>
                        <td>${ result.result(storage_data[index].math).gpacal }</td>
                        <td>${ result.result(storage_data[index].math).greadcal }</td>

                    </tr>
                    <tr>
                        <td>Science</td>
                        <td>${ storage_data[index].sci }</td>
                        <td>${ result.result(storage_data[index].sci).gpacal }</td>
                        <td>${ result.result(storage_data[index].sci).greadcal }</td>

                    </tr>
                    <tr>
                        <td>Social Science</td>
                        <td>${ storage_data[index].social }</td>
                        <td>${ result.result(storage_data[index].social).gpacal }</td>
                        <td>${ result.result(storage_data[index].social).greadcal }</td>

                    </tr>
                    <tr>
                        <td>Religion</td>
                        <td>${ storage_data[index].reli }</td>
                        <td>${ result.result(storage_data[index].reli).gpacal }</td>
                        <td>${ result.result(storage_data[index].reli).greadcal }</td>

                    </tr>
                </tbody>
            </table>
            
    `;



}


const search_box = document.getElementById('search_box');

search_box.addEventListener('keyup', function(){  


    let all_data = dataGet('result_apps');

    let data = '';
    all_data.map((student, index) => {

        if(student.roll == search_box.value) { 
            data += `
            <tr>
                <td>${ index + 1 }</td>
                <td>${ student.name }</td>
                <td>${ student.roll }</td>
                <td>${ student.className }</td>
                <td>${ student.gender }</td>
                <td> A </td>
                <td> 4.8 </td>
                <td><img style="width:50px; height:50px;object-fit:cover;" src="${ student.photo }"></td>
                <td>
                    <button class="btn btn-info btn-sm" data-bs-toggle="modal" onclick="getSingleResult(${index})" data-bs-target="#student_single_modal" >View</button>
                    <button onclick="deleteStudent(${ index })" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        `;

        }
       


    });

    data_list.innerHTML = data;
    

});

