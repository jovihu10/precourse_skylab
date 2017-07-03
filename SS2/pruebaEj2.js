
function columns(){

var myColumnDefs = [
    {key:"label", sortable:true, resizeable:true},
    {key:"notes", sortable:true,resizeable:true},

    for ( var i=0 ; i < oFullResponse.results.length; i++) {
    console.log(oFullResponse.results[i].label);
}


var arr = [];
var len = oFullResponse.results.length;
for (var i = 0; i < len; i++) {
    arr.push({
        key: oFullResponse.results[i].label,
        sortable: true,
        resizeable: true
    });
}

};

columns();