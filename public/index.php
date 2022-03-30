<?php
$host = $_SERVER['SERVER_NAME'] ?: $_SERVER['HTTP_HOST'];
$scheme = $_SERVER['REQUEST_SCHEME'] ?? ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')? 'https':'http');
$schemeHost = $scheme.'://'.$host;
$relative = $_SERVER['REQUEST_URI'] ?: '/';
$absolute = $schemeHost.$relative;
$isDev = substr($host,-5) === '.test';
$time = time();
$lang = 'fr';
$version = '1.0';
$suffix = ($isDev === true)? $time:$version;
$title = 'Vue3 - Base project';
$description = 'Description';
$keywords = 'Keywords';
$share = $schemeHost.'/media/share.jpg';

echo '<!DOCTYPE html>';
echo "<html lang='$lang'>";
echo '<head>';
echo "<meta charset='UTF-8'>";
echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
echo "<meta name='msapplication-config' content='none'/>";
echo "<meta name='description' content='$description'/>";
echo "<meta name='keywords' content='$keywords'/>";
echo "<meta property='og:type' content='website'/>";
echo "<meta property='og:title' content='$title'/>";
echo "<meta property='og:description' content='$description'/>";
echo "<meta property='og:url' content='$absolute'/>";
echo "<meta property='og:image' content='$share'/>";
echo "<link rel='stylesheet' type='text/css' media='screen,print' href='/css/app.css?v=$suffix'/>";
echo "<title>$title</title>";
echo '</head>';
echo '<body>';
echo "<div id='app'></div>";
echo "<script src='/js/app.js?v=$suffix'></script>";
echo '</body>';
echo '</html>';
?>