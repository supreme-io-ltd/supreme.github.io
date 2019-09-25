//<!--
var str = "<script type='text/javascript'>function foo(){alert('im changed XD')};</script>";
gencode(str);
function gencode(str) {
	document.write(str);
}
function foo() {
	alert('im a foo.');
}
//-->

function gotocateloge()
{
    document.location.href='cateloge.html';
}

function gotodetail()
{
    document.location.href='detail.html';
}

function setPageType(page){
    localStorage.setItem("pageType", page);
}

function showPage(){
    switch (localStorage.getItem("pageType")){
        case "1":
            document.getElementById('type1').style.display = "block";
            document.getElementById('type2').style.display = "none";
            document.getElementById('type3').style.display = "none";
            document.getElementById('type4').style.display = "none";
             document.getElementById('type5').style.display = "none";
            document.getElementById('type6').style.display = "none";
        break;
            
        case "2":
            document.getElementById('type1').style.display = "none";
            document.getElementById('type2').style.display = "block";
            document.getElementById('type3').style.display = "none";
            document.getElementById('type4').style.display = "none";
             document.getElementById('type5').style.display = "none";
            document.getElementById('type6').style.display = "none";
        break;
            
        case "3":
            document.getElementById('type1').style.display = "none";
            document.getElementById('type2').style.display = "none";
            document.getElementById('type3').style.display = "block";
            document.getElementById('type4').style.display = "none";
             document.getElementById('type5').style.display = "none";
            document.getElementById('type6').style.display = "none";
        break;
            
        case "4":
            document.getElementById('type1').style.display = "none";
            document.getElementById('type2').style.display = "none";
            document.getElementById('type3').style.display = "none";
            document.getElementById('type4').style.display = "block";
             document.getElementById('type5').style.display = "none";
            document.getElementById('type6').style.display = "none";
        break;
        
        case "5":
            document.getElementById('type1').style.display = "none";
            document.getElementById('type2').style.display = "none";
            document.getElementById('type3').style.display = "none";
            document.getElementById('type4').style.display = "none";
            document.getElementById('type5').style.display = "block";
            document.getElementById('type6').style.display = "none";
        break;
        
        case "6":
            document.getElementById('type1').style.display = "none";
            document.getElementById('type2').style.display = "none";
            document.getElementById('type3').style.display = "none";
            document.getElementById('type4').style.display = "none";
            document.getElementById('type5').style.display = "none";
            document.getElementById('type6').style.display = "block";
        break;
            
    }
}

function setdetailType(page){
    localStorage.setItem("detailtype", page);
}

function showdetailPage(){
    switch (localStorage.getItem("detailtype")){
        case "5":
            document.getElementById('allround').style.display = "block";
            document.getElementById('blue').style.display = "none";
            document.getElementById('green').style.display = "none";
            document.getElementById('clear').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('frosted').style.display = "none";
            document.getElementById('glassjar').style.display = "none";
            document.getElementById('droppercap').style.display = "none";
            document.getElementById('opal').style.display = "none";
            document.getElementById('accessory').style.display = "none";
            
        break;
            
        case "1":
            document.getElementById('allround').style.display = "none";
            document.getElementById('amber').style.display = "block";
            document.getElementById('blue').style.display = "none";
            document.getElementById('green').style.display = "none";
            document.getElementById('clear').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('frosted').style.display = "none";
            document.getElementById('glassjar').style.display = "none";
            document.getElementById('droppercap').style.display = "none";
            document.getElementById('opal').style.display = "none";
            document.getElementById('accessory').style.display = "none";
            
        break;
            
        case "2":
            document.getElementById('allround').style.display = "none";
            document.getElementById('amber').style.display = "none";
            document.getElementById('blue').style.display = "none";
            document.getElementById('green').style.display = "block";
            document.getElementById('clear').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('frosted').style.display = "none";
            document.getElementById('glassjar').style.display = "none";
            document.getElementById('droppercap').style.display = "none";
            document.getElementById('opal').style.display = "none";
            document.getElementById('accessory').style.display = "none";
        break;
            
        case "3":
            document.getElementById('allround').style.display = "none";
            document.getElementById('amber').style.display = "none";
            document.getElementById('blue').style.display = "block";
            document.getElementById('green').style.display = "none";
            document.getElementById('clear').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('frosted').style.display = "none";
            document.getElementById('glassjar').style.display = "none";
            document.getElementById('droppercap').style.display = "none";
            document.getElementById('opal').style.display = "none";
            document.getElementById('accessory').style.display = "none";
        break;
        
        case "4":
            document.getElementById('allround').style.display = "none";
            document.getElementById('frosted').style.display = "block";
            document.getElementById('amber').style.display = "none";
            document.getElementById('blue').style.display = "none";
            document.getElementById('green').style.display = "none";
            document.getElementById('clear').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('glassjar').style.display = "none";
            document.getElementById('droppercap').style.display = "none";
            document.getElementById('opal').style.display = "none";
            document.getElementById('accessory').style.display = "none";
        break;
        
        case "6":
            document.getElementById('allround').style.display = "none";
            document.getElementById('glassjar').style.display = "block";
            document.getElementById('frosted').style.display = "none";
            document.getElementById('amber').style.display = "none";
            document.getElementById('blue').style.display = "none";
            document.getElementById('green').style.display = "none";
            document.getElementById('clear').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('droppercap').style.display = "none";
            document.getElementById('opal').style.display = "none";
            document.getElementById('accessory').style.display = "none";

        break;
            
        case "7":
            document.getElementById('allround').style.display = "none";
            document.getElementById('droppercap').style.display = "block";
            document.getElementById('glassjar').style.display = "none";
            document.getElementById('frosted').style.display = "none";
            document.getElementById('amber').style.display = "none";
            document.getElementById('blue').style.display = "none";
            document.getElementById('green').style.display = "none";
            document.getElementById('clear').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('opal').style.display = "none";
            document.getElementById('accessory').style.display = "none";
            

        break;
            
        case "8":
            document.getElementById('allround').style.display = "none";
             document.getElementById('clear').style.display = "block";
            document.getElementById('droppercap').style.display = "none";
            document.getElementById('glassjar').style.display = "none";
            document.getElementById('frosted').style.display = "none";
            document.getElementById('amber').style.display = "none";
            document.getElementById('blue').style.display = "none";
            document.getElementById('green').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('opal').style.display = "none";
            document.getElementById('accessory').style.display = "none";
            

        break;
            
        case "9":
            document.getElementById('allround').style.display = "none";
            document.getElementById('plastic').style.display = "block";
            document.getElementById('opal').style.display = "none";
             document.getElementById('clear').style.display = "none";
            document.getElementById('droppercap').style.display = "none";
            document.getElementById('glassjar').style.display = "none";
            document.getElementById('frosted').style.display = "none";
            document.getElementById('amber').style.display = "none";
            document.getElementById('blue').style.display = "none";
            document.getElementById('green').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('accessory').style.display = "none";


        break;
            
        case "10":
            document.getElementById('allround').style.display = "none";
            document.getElementById('accessory').style.display = "block";
            document.getElementById('plastic').style.display = "none";
            document.getElementById('opal').style.display = "none";
             document.getElementById('clear').style.display = "none";
            document.getElementById('droppercap').style.display = "none";
            document.getElementById('glassjar').style.display = "none";
            document.getElementById('frosted').style.display = "none";
            document.getElementById('amber').style.display = "none";
            document.getElementById('blue').style.display = "none";
            document.getElementById('green').style.display = "none";
            document.getElementById('violet').style.display = "none";
            document.getElementById('plastic').style.display = "none";

        break;
            
    }
}