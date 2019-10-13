<?php
if (isset($_POST['slide'])) {
	$success = file_put_contents(__DIR__.'/meta.json', json_encode(['slide' => $_POST['slide']]));
	var_dump($success);
	echo __DIR__.'/meta.json';
	echo "\n";
	echo "good";
} else {
	$slide = json_decode(file_get_contents(__DIR__.'/meta.json'), true);
	if ($slide && isset($slide['slide'])) {
		echo $slide['slide'];
	} else {
		echo "It broke, crap!";
	}
}
?>
