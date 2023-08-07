<?php function theme_settings_page()
{
    ?>
    
    
    <!-- include libraries(jQuery, bootstrap) -->
<link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<!-- include summernote css/js -->
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
 

<script>
    $(document).ready(function() {
  $('#summernote').summernote();
});
</script>
	    <div class="wrap">
	    <h1>Theme Panel</h1>
	    <form method="post" action="options.php" enctype="multipart/form-data">
	        <?php
	            settings_fields("section");
	            do_settings_sections("theme-options");      
	            submit_button(); 
	        ?>          
	    </form>
		</div>
	<?php

 
}
function add_theme_menu_item()
{
	add_menu_page("Theme Panel", "Theme Panel", "manage_options", "theme-panel", "theme_settings_page", null, 99);
}

add_action("admin_menu", "add_theme_menu_item");


function display_twitter_element()
{
	?>
    	<input type="text" name="twitter_url" id="twitter_url" value="<?php echo get_option('twitter_url'); ?>" />
    <?php
}

function display_facebook_element()
{
	?>
    	<input type="text" name="facebook_url" id="facebook_url" value="<?php echo get_option('facebook_url'); ?>" />
    <?php
}


function display_linkedin_element()
{
	?>
    	<input type="text" name="linkedin_url" id="linkedin_url" value="<?php echo get_option('linkedin_url'); ?>" />
    <?php
}


function display_behance_element()
{
	?>
    	<input type="text" name="behance_url" id="behance_url" value="<?php echo get_option('behance_url'); ?>" />
    <?php
}



function display_phone_no_element()
{
	?>
    	<input type="text" name="web_phone_no" id="web_phone_no" value="<?php echo get_option('web_phone_no'); ?>" />
    <?php
}



function display_web_email_element()
{
	?>
    	<input type="text" name="web_email" id="web_email" value="<?php echo get_option('web_email'); ?>" />
    <?php
}




 
function logo_display()
{
	?>
        <input type="file" name="logo" /> 
        <img src="<?php echo get_option('logo'); ?>" alt="" height="100px" />
   <?php
}


function logo_display_footer()
{
	?>
        <input type="file" name="logo_footer" /> 
         <img src="<?php echo get_option('logo_footer'); ?>" alt="" height="100px" />
   <?php
}

function display_address_element()
{
	?>
      <textarea id="summernote" name="addresdata"><?php echo get_option('addresdata'); ?></textarea>
    <?php
}


function handle_logo_upload()
{
	if(!empty($_FILES["logo"]["tmp_name"]))
	{
		$urls = wp_handle_upload($_FILES["logo"], array('test_form' => FALSE));
	      $temp = $urls["url"];  
	    return $temp;   
	} else {
	    return get_option('logo');
	}
	  
	return $option;
}

function handle_logo_upload_footer()
{
	if(!empty($_FILES["logo_footer"]["tmp_name"]))
	{
		$urls = wp_handle_upload($_FILES["logo_footer"], array('test_form' => FALSE));
	      $temp = $urls["url"];  
	    return $temp;   
	}  else {
	      
	    return get_option('logo_footer');
	 
	}
	  
	return $option;
}

function display_theme_panel_fields()
{
	add_settings_section("section", "All Settings", null, "theme-options");
	
// 	add_settings_field("twitter_url", "Twitter Profile Url", "display_twitter_element", "theme-options", "section");
//     add_settings_field("facebook_url", "Facebook Profile Url", "display_facebook_element", "theme-options", "section");
    add_settings_field("linkedin_url", "FAX", "display_linkedin_element", "theme-options", "section");
      add_settings_field("behance_url", "TEL", "display_behance_element", "theme-options", "section");
         add_settings_field("web_phone_no", "MOBIL", "display_phone_no_element", "theme-options", "section");
      add_settings_field("web_email", "Email id", "display_web_email_element", "theme-options", "section");
      add_settings_field("addresdata", "ANSCHRIFT", "display_address_element", "theme-options", "section");
      
      register_setting("section", "web_phone_no");
      register_setting("section", "web_email");
    register_setting("section", "twitter_url");
    register_setting("section", "facebook_url");
    register_setting("section", "linkedin_url");
    register_setting("section", "behance_url");
    register_setting("section", "addresdata");
    
    register_setting("section", "theme_layout");


    add_settings_section("section", "All Settings", null, "theme-options");
	
    add_settings_field("logo", "Logo", "logo_display", "theme-options", "section");  
    register_setting("section", "logo", "handle_logo_upload");
    
    add_settings_field("logo_footer", "Logo Slide Menu", "logo_display_footer", "theme-options", "section");  
    register_setting("section", "logo_footer", "handle_logo_upload_footer");
}

add_action("admin_init", "display_theme_panel_fields");