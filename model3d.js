function alert(a,b,c){ console.log(a,b,c); }
(function ( $ ) {


}( jQuery ));

$( function() {
	var el = $('#new_element_option');
	bryly.el = el;
    $('#new_element').click(bryly, kfdf3d_NewElement);
});

function kfdf3d_NewElement(e)
{
var el = newTag();
e.data.el.append( el );
e.data.el = el;
e.data.callback = e.data.callback || 'kfdf3d_clickButton';
		
			kfdf3d_addSelect(e);
			kfdf3d_addButton(e);
}

const kfdf3d_addButton = function(e){
	if(e.data.callback)
	e.data.
		el.append(
				newTag('button')
				.text('Dodaj')
				.click(e.data, kfdf3d_callback)
			);
}

function kfdf3d_callback(e){
switch (e.data.callback) {
            case 'kfdf3d_NewElement':
			kfdf3d_NewElement.call( this, e );
			break;
            case 'kfdf3d_clickButton':
			kfdf3d_clickButton.call( this, e );
			break;
		default : 
		alert(e.data.callback, this, e );
		break;
		}
	
}

function kfdf3d_clickButton(e){
		
    const option = $(this).parent().children('select').val();
	const element = e.data.list[option]
	const data = element;
	
		data.el = e.data.el; 
		
		if(element.list){
			kfdf3d_NewElement({'data':data});
		}else{
			alert('koniec');
			//todo Koniec zagnie¿dzenia
		}
}

function kfdf3d_addSelect(e){

    var el = $(e.data.el),
	list = e.data.list,
	select = newTag('select'),
    option = newTag('option');

    $.each( list, function( i, l ){
        if(typeof l === 'string' &&  l !== '')
            option = newTag('option')
                .val(i)
                .text(l);
        else if(typeof i === 'string' )
            option = newTag('option')
                .val(i)
                .text(i);
        else option ='';
        //alert(typeof i, i,l);


        select.append(option);
    });

    el.append(select) ;
}

function newTag(Str, Class  ){
	Str = Str || 'div';
		
    if(typeof Class === 'undefined' || Class === '')
        Class='';
    else
        Class = ` class="${Class}"`;

   return $(`<${Str}${Class}></${Str}>`);
}