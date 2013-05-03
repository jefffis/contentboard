$(function(){
	//var $radios = $('input[type=radio]');
	var $radio_labels = $('label.i');
	var $layout_type = $('#content_layout_type');
	var $edit = $('.edit.styles');
	var $modal = $('#modal');

	var $global_form = $('#global').find('form');
	var $global_form_url = $global_form.attr('action');

	var $background = $('#content_background_color');
	var $font_fam = $('#font-family');
	var $font_col = $('#content_font_color');
	var $header_col = $('#content_header_background_color');
	var $header = $('header');
	var $headerf_col = $('#content_header_font_color');
	var $main_col = $('#content_main_background_color');
	var $main = $('#main');
	var $body = $('#body');
	var $mainimg = $('#content_image_to_main');

	var $close = $('#close');
	var $remove = $('#remove');
	var $save = $('#save');

	//alert($global_form.attr('action'));

	$radio_labels.on('click',function(){
		var $this = $(this);
		var $this_radio = $this.find('input[type=radio]');
		$radio_labels.removeClass('checked');
		$this.addClass('checked');
		$layout_type.val($this_radio.val());
	});

	$edit.on('click',function(){
		var $this = $(this);
		var $this_option = $this.data('part');
		$modal.removeClass('nope');
		$modal.find('.options.'+$this_option).addClass('yepp');
	});

	//alert($('input[type=color]:first'.val()));

	$background.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		
		$body.css('background-color',$this_val);

		var $name = 'background_color';
		//$this.serialize();
		$.post($global_form_url, { $name: $this_val });

		//$this.css('background-color',$this_val);
	});

	$save.on('click',function(){
		$.post($global_form_url, $global_form.serialize());
	});

	$font_fam.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$body.css('font-family',$this_val);
		
		//var $name = 'content[background_color]';
		//$.post($global_form_url, { $name : $this_val });

	});

	$font_col.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$body.css('color',$this_val);
		
		//var $name = 'content[font_color]';
		//$.post($global_form_url, { $name : $this_val });

	});

	$header_col.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$header.css('background-color',$this_val);
		
		//var $name = 'content[header_background_color]';
		//$.post($global_form_url, $global_form.serialize());

	});

	$headerf_col.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$header.find('h2').css('color',$this_val);
		
		//var $name = 'content[header_font_color]';
		//$.post($global_form_url, { $name : $this_val });

	});

	$main_col.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$main.css('background-color',$this_val);
		
		//var $name = 'content[main_background_color]';
		//$.post($global_form_url, { $name : $this_val });

	});

	$mainimg.on('click',function(){
		var $this = $(this);
		var $this_prop = $this.prop('checked');
		//alert($this.prop('checked'));
		if($this_prop == true){
			$main.prepend('<img src="http://placehold.it/350x150" id="image" />');
		}else{
			$main.find('#image').remove();
		}
		//$.post($global_form_url, $global_form.serialize());
	});

	$close.on('click',function(){
		$modal.addClass('nope');
		$modal.find('.options').removeClass('yepp');
	});

	$remove.on('click',function(){
		$body.css({
			'background-color': '',
			'font-family': '',
			'color': ''
		});
		$main.css('background-color', '');
		$header.css('background-color', '');
	});

})