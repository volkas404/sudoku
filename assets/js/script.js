function clear_highlight(){
    for( var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            var i_id = "i"+i+j;
            var input_var = document.querySelector("#"+i_id);
            input_number = input_var.value;
            input_var.classList.remove("same_number");
            input_var.classList.remove("highlight_color");
        }
    }
}

function enable_input(){
    for (var i=0; i<9; i++){
        for(var j=0; j<9; j++){
            var i_id = "i"+i+j;
            document.getElementById(i_id).value = "" ;
            document.getElementById(i_id).disabled = false ;
        }
    }
}

function easy_set(){
    
    enable_input()
    // Values
    document.getElementById("i03").value =2 ;
    document.getElementById("i04").value =6 ;
    document.getElementById("i06").value =7 ;
    document.getElementById("i08").value =1 ;

    document.getElementById("i10").value =6 ;
    document.getElementById("i11").value =8 ;
    document.getElementById("i14").value =7 ;
    document.getElementById("i17").value =9 ;

    document.getElementById("i20").value =1 ;
    document.getElementById("i21").value =9 ;
    document.getElementById("i25").value =4 ;
    document.getElementById("i26").value =5 ;

    document.getElementById("i30").value =8 ;
    document.getElementById("i31").value =2 ;
    document.getElementById("i33").value =1 ;
    document.getElementById("i37").value =4 ;

    document.getElementById("i42").value =4 ;
    document.getElementById("i43").value =6 ;
    document.getElementById("i45").value =2 ;
    document.getElementById("i46").value =9 ;

    document.getElementById("i51").value =5 ;
    document.getElementById("i55").value =3 ;
    document.getElementById("i57").value =2 ;
    document.getElementById("i58").value =8 ;

    document.getElementById("i62").value =9 ;
    document.getElementById("i63").value =3 ;
    document.getElementById("i67").value =7 ;
    document.getElementById("i68").value =4 ;

    document.getElementById("i71").value =4 ;
    document.getElementById("i74").value =5 ;
    document.getElementById("i77").value =3 ;
    document.getElementById("i78").value =6 ;

    document.getElementById("i80").value =7 ;
    document.getElementById("i82").value =3 ;
    document.getElementById("i84").value =1 ;
    document.getElementById("i85").value =8 ;

    // Disabling
    document.getElementById("i03").disabled = true ;
    document.getElementById("i04").disabled = true ;
    document.getElementById("i06").disabled = true ;
    document.getElementById("i08").disabled = true ;

    document.getElementById("i10").disabled = true ;
    document.getElementById("i11").disabled = true ;
    document.getElementById("i14").disabled = true ;
    document.getElementById("i17").disabled = true ;

    document.getElementById("i20").disabled = true ;
    document.getElementById("i21").disabled = true ;
    document.getElementById("i25").disabled = true ;
    document.getElementById("i26").disabled = true ;

    document.getElementById("i30").disabled = true ;
    document.getElementById("i31").disabled = true ;
    document.getElementById("i33").disabled = true ;
    document.getElementById("i37").disabled = true ;

    document.getElementById("i42").disabled = true ;
    document.getElementById("i43").disabled = true ;
    document.getElementById("i45").disabled = true ;
    document.getElementById("i46").disabled = true ;

    document.getElementById("i51").disabled = true ;
    document.getElementById("i55").disabled = true ;
    document.getElementById("i57").disabled = true ;
    document.getElementById("i58").disabled = true ;

    document.getElementById("i62").disabled = true ;
    document.getElementById("i63").disabled = true ;
    document.getElementById("i67").disabled = true ;
    document.getElementById("i68").disabled = true ;

    document.getElementById("i71").disabled = true ;
    document.getElementById("i74").disabled = true ;
    document.getElementById("i77").disabled = true ;
    document.getElementById("i78").disabled = true ;

    document.getElementById("i80").disabled = true ;
    document.getElementById("i82").disabled = true ;
    document.getElementById("i84").disabled = true ;
    document.getElementById("i85").disabled = true ;

    clear_highlight();
}

function medium_set(){

    enable_input()
    
    // Values
    document.getElementById("i01").value =2 ;
    document.getElementById("i03").value =6 ;
    document.getElementById("i05").value =8 ;

    document.getElementById("i10").value =5 ;
    document.getElementById("i11").value =8 ;
    document.getElementById("i15").value =9 ;
    document.getElementById("i16").value =7 ;

    document.getElementById("i24").value =4 ;

    document.getElementById("i30").value =3 ;
    document.getElementById("i31").value =7 ;
    document.getElementById("i36").value =5 ;

    document.getElementById("i40").value =6 ;
    document.getElementById("i48").value =4 ;

    document.getElementById("i52").value =8 ;
    document.getElementById("i57").value =1 ;
    document.getElementById("i58").value =3 ;

    document.getElementById("i64").value =2 ;

    document.getElementById("i72").value =9 ;
    document.getElementById("i73").value =8 ;
    document.getElementById("i77").value =3 ;
    document.getElementById("i78").value =6 ;

    document.getElementById("i83").value =3 ;
    document.getElementById("i85").value =6 ;
    document.getElementById("i87").value =9 ;


    // Disabling
    document.getElementById("i01").disabled = true ;
    document.getElementById("i03").disabled = true ;
    document.getElementById("i05").disabled = true ;

    document.getElementById("i10").disabled = true ;
    document.getElementById("i11").disabled = true ;
    document.getElementById("i15").disabled = true ;
    document.getElementById("i16").disabled = true ;

    document.getElementById("i24").disabled = true ;

    document.getElementById("i30").disabled = true ;
    document.getElementById("i31").disabled = true ;
    document.getElementById("i36").disabled = true ;

    document.getElementById("i40").disabled = true ;
    document.getElementById("i48").disabled = true ;

    document.getElementById("i52").disabled = true ;
    document.getElementById("i57").disabled = true ;
    document.getElementById("i58").disabled = true ;

    document.getElementById("i64").disabled = true ;

    document.getElementById("i72").disabled = true ;
    document.getElementById("i73").disabled = true ;
    document.getElementById("i77").disabled = true ;
    document.getElementById("i78").disabled = true ;

    document.getElementById("i83").disabled = true ;
    document.getElementById("i85").disabled = true ;
    document.getElementById("i87").disabled = true ;

    clear_highlight();

}

function hard_set(){

    enable_input()
    
    // Values
    document.getElementById("i03").value =6 ;
    document.getElementById("i06").value =4 ;

    document.getElementById("i10").value =7 ;
    document.getElementById("i15").value =3 ;
    document.getElementById("i16").value =6 ;

    document.getElementById("i24").value =9 ;
    document.getElementById("i25").value =1 ;
    document.getElementById("i27").value =8 ;

    document.getElementById("i41").value =5 ;
    document.getElementById("i43").value =1 ;
    document.getElementById("i44").value =8 ;
    document.getElementById("i48").value =3 ;

    document.getElementById("i53").value =3 ;
    document.getElementById("i55").value =6 ;
    document.getElementById("i57").value =4 ;
    document.getElementById("i58").value =5 ;

    document.getElementById("i61").value =4 ;
    document.getElementById("i63").value =2 ;
    document.getElementById("i67").value =6 ;

    document.getElementById("i70").value =9 ;
    document.getElementById("i72").value =3 ;

    document.getElementById("i81").value =2 ;
    document.getElementById("i86").value =1 ;


    // Disabling
    document.getElementById("i03").disabled = true ;
    document.getElementById("i06").disabled = true ;

    document.getElementById("i10").disabled = true ;
    document.getElementById("i15").disabled = true ;
    document.getElementById("i16").disabled = true ;

    document.getElementById("i24").disabled = true ;
    document.getElementById("i25").disabled = true ;
    document.getElementById("i27").disabled = true ;

    document.getElementById("i41").disabled = true ;
    document.getElementById("i43").disabled = true ;
    document.getElementById("i44").disabled = true ;
    document.getElementById("i48").disabled = true ;

    document.getElementById("i53").disabled = true ;
    document.getElementById("i55").disabled = true ;
    document.getElementById("i57").disabled = true ;
    document.getElementById("i58").disabled = true ;

    document.getElementById("i61").disabled = true ;
    document.getElementById("i63").disabled = true ;
    document.getElementById("i67").disabled = true ;

    document.getElementById("i70").disabled = true ;
    document.getElementById("i72").disabled = true ;

    document.getElementById("i81").disabled = true ;
    document.getElementById("i86").disabled = true ;

    clear_highlight();
}

function execute(){
    var arr =  new Array(9);
    var sum;
    var set = new Set();


    for (var i=0; i<9; i++){
        for(var j=0; j<9; j++){
            arr[i] = new Array(9);
        }
    }


    for (var i=0; i<9; i++){
        for(var j=0; j<9; j++){
            var i_id = "i"+i+j;
            arr[i][j] = document.getElementById(i_id).value;
        }
    }


    //  rows check
    for (var i=0; i<9; i++){
        sum = 0
        set.clear;
        for(var j=0; j<9; j++){
            sum = sum + Number(arr[i][j]);      
            set.add(Number(arr[i][j]))
            console.log(i,j);
        }
        if(sum!=45){
            console.log(sum);
            alert("Lỗi sai 1");
            return;
        }
        else{
            for(var k=1; k<10; k++){
                if(!set.has(k)){
                    alert("Lỗi sai 2", i);
                    return;   
                }
            }
        }

    }
    // console.log("check")

    // coloums check
    for (var i=0; i<9; i++){
        sum = 0;
        set.clear;
        for(var j=0; j<9; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))       
        }
        if(sum!=45){
            alert("Lỗi sai 3",sum);
            console.log(sum);
            return;
        }
        else{
            for(var k=1; k<10; k++){
                if(!set.has(k)){
                    alert("Lỗi sai 4");
                    return;   
                }
            }
        }
    }

    // box1 check
    sum = 0;
    set.clear;
    for (var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))    
        }
    }
    if(sum!=45){
        alert("Lỗi sai 5");
        console.log(sum);
        // return;
    }
    else{
        for(var k=1; k<10; k++){
            if(!set.has(k)){
                alert("Lỗi sai 6");
                return;   
            }
        }
    }

    // box2 check
    sum = 0;
    set.clear;
    for (var i=3; i<6; i++){
        for(var j=0; j<3; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))       
        }
    }
    if(sum!=45){
        alert("Lỗi sai 7");
        console.log(sum);
        return;
    }
    else{
        for(var k=1; k<10; k++){
            if(!set.has(k)){
                alert("Lỗi sai 8");
                return;   
            }
        }
    }

    // box3 check
    sum = 0;
    set.clear;
    for (var i=6; i<9; i++){
        for(var j=0; j<3; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))       
        }
    }
    if(sum!=45){
        alert("Lỗi sai 9");
        console.log(sum);
        return;
    }
    else{
        for(var k=1; k<10; k++){
            if(!set.has(k)){
                alert("Lỗi sai 10");
                return;   
            }
        }
    }

    // box4 check
    sum = 0;
    set.clear;
    for (var i=0; i<3; i++){
        for(var j=3; j<6; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))    
        }
    }
    if(sum!=45){
        alert("Lỗi sai 11");
        console.log(sum);
        return;
    }
    else{
        for(var k=1; k<10; k++){
            if(!set.has(k)){
                alert("Lỗi sai 12");
                return;   
            }
        }
    }

    // box5 check
    sum = 0;
    set.clear;
    for (var i=3; i<6; i++){
        for(var j=3; j<6; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))       
        }
    }
    if(sum!=45){
        alert("Lỗi sai 13");
        console.log(sum);
        return;
    }
    else{
        for(var k=1; k<10; k++){
            if(!set.has(k)){
                alert("Lỗi sai 14");
                return;   
            }
        }
    }

    // box6 check
    sum = 0;
    set.clear;
    for (var i=6; i<9; i++){
        for(var j=3; j<6; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))       
        }
    }
    if(sum!=45){
        alert("Lỗi sai 15");
        console.log(sum);
        return;
    }
    else{
        for(var k=1; k<10; k++){
            if(!set.has(k)){
                alert("Lỗi sai 16");
                return;   
            }
        }
    }

    // box7 check
    sum = 0;
    set.clear;
    for (var i=0; i<3; i++){
        for(var j=6; j<9; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))    
        }
    }
    if(sum!=45){
        alert("Lỗi sai 17");
        console.log(sum);
        return;
    }
    else{
        for(var k=1; k<10; k++){
            if(!set.has(k)){
                alert("Lỗi sai 18");
                return;   
            }
        }
    }

    // box8 check
    sum = 0;
    set.clear;
    for (var i=3; i<6; i++){
        for(var j=6; j<9; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))       
        }
    }
    if(sum!=45){
        alert("Lỗi sai 19");
        console.log(sum);
        return;
    }
    else{
        for(var k=1; k<10; k++){
            if(!set.has(k)){
                alert("Lỗi sai 20");
                return;   
            }
        }
    }

    // box9 check
    sum = 0;
    set.clear;
    for (var i=6; i<9; i++){
        for(var j=6; j<9; j++){
            sum = sum + Number(arr[j][i]);
            set.add(Number(arr[j][i]))       
        }
    }
    if(sum!=45){
        alert("Lỗi sai ");
        console.log(sum);
        return;
    }
    else{
        for(var k=1; k<10; k++){
            if(!set.has(k)){
                alert("Lỗi sai ");
                return;   
            }
        }
    }

alert("hooray, correct solution")

}



function highlight_function(id){
    
    
    var chars = id.split("");
    var ii = Number(chars[1]);
    var jj = Number(chars[2]);

    for( var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            var i_id = "i"+i+j;
            var highlight = document.querySelector("#"+i_id);
            highlight.classList.remove("highlight_color");
        }
    }

    for(var i=0 ; i<9; i++){
        var i_id = "i"+ii+i;
        var highlight = document.querySelector("#"+i_id);
        highlight.classList.add("highlight_color");
        var i_id = "i"+i+jj
        var highlight = document.querySelector("#"+i_id);
        highlight.classList.add("highlight_color");
    }

    if(ii>=0 && ii<3 && jj>=0 && jj<3){
        for (var i=0; i<3; i++){
            for(var j=0; j<3; j++){
                var i_id = "i"+i+j;
                var highlight = document.querySelector("#"+i_id);
                highlight.classList.add("highlight_color");    
            }
        }
    }
    else 
    if(ii>=3 && ii<6 && jj>=0 && jj<3){
        for (var i=3; i<6; i++){
            for(var j=0; j<3; j++){
                var i_id = "i"+i+j;
                var highlight = document.querySelector("#"+i_id);
                highlight.classList.add("highlight_color");    
            }
        }
    }
    else 
    if(ii>=6 && ii<9 && jj>=0 && jj<3){
        for (var i=6; i<9; i++){
            for(var j=0; j<3; j++){
                var i_id = "i"+i+j;
                var highlight = document.querySelector("#"+i_id);
                highlight.classList.add("highlight_color");    
            }
        }
    }
    else 
    if(ii>=0 && ii<3 && jj>=3 && jj<6){
        for (var i=0; i<3; i++){
            for(var j=3; j<6; j++){
                var i_id = "i"+i+j;
                var highlight = document.querySelector("#"+i_id);
                highlight.classList.add("highlight_color");    
            }
        }
    }
    else 
    if(ii>=3 && ii<6 && jj>=3 && jj<6){
        for (var i=3; i<6; i++){
            for(var j=3; j<6; j++){
                var i_id = "i"+i+j;
                var highlight = document.querySelector("#"+i_id);
                highlight.classList.add("highlight_color");    
            }
        }
    }
    else 
    if(ii>=6 && ii<9 && jj>=3 && jj<6){
        for (var i=6; i<9; i++){
            for(var j=3; j<6; j++){
                var i_id = "i"+i+j;
                var highlight = document.querySelector("#"+i_id);
                highlight.classList.add("highlight_color");    
            }
        }
    }
    else 
    if(ii>=0 && ii<3 && jj>=6 && jj<9){
        for (var i=0; i<3; i++){
            for(var j=6; j<9; j++){
                var i_id = "i"+i+j;
                var highlight = document.querySelector("#"+i_id);
                highlight.classList.add("highlight_color");    
            }
        }
    }
    else 
    if(ii>=3 && ii<6 && jj>=6 && jj<9){
        for (var i=3; i<6; i++){
            for(var j=6; j<9; j++){
                var i_id = "i"+i+j;
                var highlight = document.querySelector("#"+i_id);
                highlight.classList.add("highlight_color");    
            }
        }
    }
    else 
    if(ii>=6 && ii<9 && jj>=6 && jj<9){
        for (var i=6; i<9; i++){
            for(var j=6; j<9; j++){
                var i_id = "i"+i+j;
                var highlight = document.querySelector("#"+i_id);
                highlight.classList.add("highlight_color");    
            }
        }
    }

    // Hightlighting same numbers
    var this_number = document.querySelector("#"+id).value;
    for( var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            var i_id = "i"+i+j;
            var input_var = document.querySelector("#"+i_id);
            input_number = input_var.value;
            input_var.classList.remove("same_number");
        }
    }

    for( var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            var i_id = "i"+i+j;
            var input_var = document.querySelector("#"+i_id);
            input_number = input_var.value;
            if(input_number==this_number && this_number!=""){
                // console.log("Number",input_number)
                input_var.classList.add("same_number");
                input_var.classList.remove("highlight_color");
            }
        }
    }


}




