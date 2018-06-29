var shuzu = [];
var flag;
var aa;
function node(name, num, phone) {
    this.name = name;
    this.num = num;
    this.phone = phone;
    this.check=false;
}
function add() {
    var name = document.getElementById("xingming").value;
    var num = document.getElementById("xuehao").value;
    var phone = document.getElementById("dianhua").value;
    var a = new node(name, num, phone);
    console.log(a.name, a.num, a.phone);
    var b = shuzu.push(a);
    console.log(a.name, a.num, a.phone);
    console.log(b);
    shuchu(shuzu);
}
function shuchu(s) {
    var bottom = document.getElementById("bottom");
    bottom.innerHTML = " ";
    for (var j = 0; j < s.length ; j++) {
        flag="<div class='a1'>"
        +"<input type='checkbox' id='gouxuan' name='gouxuan' onclick='gouxuan(this);'>"
        + "<div class='a'>" + s[j].name + "</div>"
        + "<div class='a'>" + s[j].num + "</div>"
        + "<div class='a'>" + s[j].phone + "</div>"
        + "<button class='xiugai'onclick='xiugai(this);'>修改</button>"
        + "<button class='baocun'onclick='baocun(this);'>保存</button>"+"</div>";
        bottom.innerHTML +=flag;
    }
}
function sousuo1() {
    var ss = document.getElementById("xuehao1").value;
    var q = [];
    for (var j = 0; j < shuzu.length; j++) {
        if (ss == shuzu[j].num) {
            console.log(j);
            q.push(shuzu[j]);
        }
    }
    shuchu(q);
}
function sousuo2() {
    var ss = document.getElementById("nianji").value;
    var q =[];
    for (var j = 0; j < shuzu.length; j++) {
        if (ss == String(shuzu[j].num).substring(0,4)){
                console.log(j);            
                q.push(shuzu[j]);
        }
    }
    shuchu(q);
}
function xiugai(obj){
    console.log(obj);
    var num = obj.previousElementSibling.previousElementSibling.innerHTML;
    console.log(num);
    for (var j = 0; j < shuzu.length; j++) {
        if (num == shuzu[j].num) {
            console.log(j);
            aa=shuzu[j];
        }
    }
}
function baocun(){
    var name = document.getElementById("xingming").value;
    var num = document.getElementById("xuehao").value;
    var phone = document.getElementById("dianhua").value;
    aa.name=name;
    aa.num=num;
    aa.phone=phone;
    shuchu(shuzu);
}
function paixu1(){
    console.log(shuzu);
    function compare(a,b){
        return a.name.localeCompare(b.name,"zh");
    }
    shuzu.sort(compare);
    shuchu(shuzu);
}
function paixu2(){
    console.log(shuzu);
    shuzu.sort(function(a,b){
        return a.num-b.num;
    })
    shuchu(shuzu);
}
function quanxuan(){
	var val = document.getElementById("quanxuan").value.split(",");
	var boxes = document.getElementsByName("gouxuan");
	for(i=0;i<boxes.length;i++){
        shuzu[i].check=true;
		for(j=0;j<val.length;j++){
			if(boxes[i].value == val[j]){
				boxes[i].checked = true;
				break
			}
		}
	}
}
function quanbuxuan(){
	var val = document.getElementById("quanbuxuan").value.split(",");
	var boxes = document.getElementsByName("gouxuan");
	for(i=0;i<boxes.length;i++){
        shuzu[i].check=false;        
		for(j=0;j<val.length;j++){
			if(boxes[i].value == val[j]){
				boxes[i].checked = false;
				break
			}
		}
	}
}
function gouxuan(obj){
    console.log(obj);
    var num = obj.nextElementSibling.
            nextElementSibling.innerHTML;
    console.log(num);
    for (var j = 0; j < shuzu.length; j++) {
        if (num == shuzu[j].num) {
            console.log(j);
            shuzu[j].check=true;
        }
    }
}
function shanchu(){
    var boxes = document.getElementsByName("gouxuan");            
    console.log(boxes[1]);
    for(var j=0,k=j;j<shuzu.length;j++){
        if(shuzu[j].check==true){
            shuzu.splice(j,1);
            console.log(shuzu);
            j--;
        }
    }
    shuchu(shuzu);
}