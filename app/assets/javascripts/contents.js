//= require jquery

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
	var $font_fam_field = $('#content_add_font_family');
	var $font_family_body = $('#font-family-body');
	var $font_fam_field_body = $('#content_body_font_family');
	var $font_col = $('#content_font_color');
	var $header_col = $('#content_header_background_color');
	var $header = $('header');
	var $headerf_col = $('#content_header_font_color');
	var $main_col = $('#content_main_background_color');
	var $main = $('#main');
	var $body = $('#body');
	var $mainimg_field = $('#content_image_to_main');
	var $mainimg = $('#image_to_main');
	var $content_link_color = $('#content_link_color');
	var $content_title = $('#content_title');
	var $page_title = $('title');
	//var $layout_type = $('#layout-type');

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
		//$.post($global_form_url, { $name: $this_val });

		//$this.css('background-color',$this_val);
	});

	/*$save.on('click',function(){
		$.post($global_form_url, $global_form.serialize());
	});*/

	$font_fam.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$body.css('font-family',$this_val);
		$font_fam_field.val($this_val);
		//alert($this_val);
	});

	$font_family_body.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$main.find('p, li').css('font-family',$this_val);
		$('style#body_copy_inline').remove();
		$font_fam_field_body.val($this_val);
		//alert($this_val);
	});

	$font_col.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$main.css('color',$this_val);
		
		//var $name = 'content[font_color]';
		//$.post($global_form_url, { $name : $this_val });

	});

	$header_col.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$header.css('background',$this_val);
		
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
			if($layout_type.text()=='single'){
				$main.prepend('<img src="http://placehold.it/350x150" id="image" />');
			}else{
				$main.find('div.right').prepend('<img src="http://placehold.it/350x150" id="image" />');
			}
			$mainimg_field.val(1);
		}else{
			$main.find('#image').remove();
			$mainimg_field.val(0);
		}
		//$.post($global_form_url, $global_form.serialize());
	});

	$content_link_color.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$main.find('a').css('color',$this_val);
	});

	$content_title.on('change',function(){
		var $this = $(this);
		var $this_val = $this.val();
		$page_title.text($this_val);
	});

	//alert($main.data('image'));

	$close.on('click',function(){
		$.post($global_form_url, $global_form.serialize());
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