$(function() {

//TABS - BEGIN

var $firstTab = $('.tabs_name-first');
var $first = $('.first');
var $secondTab = $('.tabs_name-second');
var $second = $('.second');
var $thirdTab = $('.tabs_name-third');
var $third = $('.third');

$firstTab.on('click', function() {
    $firstTab.attr('id', 'active');
    $first.attr('id', 'active');
    $secondTab.removeAttr('id', 'active');
    $second.removeAttr('id', 'active');
    $thirdTab.removeAttr('id', 'active');
    $third.removeAttr('id', 'active');
});

$secondTab.on('click', function() {
    $firstTab.removeAttr('id', 'active');
    $first.removeAttr('id', 'active');
    $secondTab.attr('id', 'active');
    $second.attr('id', 'active');
    $thirdTab.removeAttr('id', 'active');
    $third.removeAttr('id', 'active');
});

$thirdTab.on('click', function() {
    $firstTab.removeAttr('id', 'active');
    $first.removeAttr('id', 'active');
    $secondTab.removeAttr('id', 'active');
    $second.removeAttr('id', 'active');
    $thirdTab.attr('id', 'active');
    $third.attr('id', 'active');
});

// TABS - END

// TOOLTIPS - START

var $firstName = $('.first_input');
var $lastName = $('.second_input');
var $adress = $('.third_input');
var $button = $('button');


$firstName.hover(function(){$('.tooltip--one').css({
    opacity: 1,
    visibility:'visible'
})}, function() {$('.tooltip--one').css({
    opacity: 0,
    visibility:'hidden'
})});
$lastName.hover(function(){$('.tooltip--two').css({
    opacity: 1,
    visibility:'visible'
})}, function() {$('.tooltip--two').css({
    opacity: 0,
    visibility:'hidden'
})});
$adress.hover(function(){$('.tooltip--three').css({
    opacity: 1,
    visibility:'visible'
})}, function() {$('.tooltip--three').css({
    opacity: 0,
    visibility:'hidden'
})});

$button.click(function(){
    $('.tooltip--one').css({
         opacity: 1,
         visibility:'visible'
    });
    $('.tooltip--two').css({
        opacity: 1,
         visibility:'visible'
    });
    $('.tooltip--three').css({
         opacity: 1,
         visibility:'visible'   
    });
});

});

// TOOLTIPS - END