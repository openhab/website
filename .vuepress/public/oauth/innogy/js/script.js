$.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return $.getUrlVars()[name];
  }
});

$(function() {
    var code = $.getUrlVar('code');
    
    if(code) {
        onAuthenticationSuccessful(code);
    } else {
        onAuthenticationFailed();
    }
});

function onAuthenticationSuccessful(code) {
    $('#error-text').hide();

    $('#code').val(code);

    $('#code').select();
}

function onAuthenticationFailed() {
    $('#success-text').hide();
    $('form').hide();
    $('#screenshot').hide();
}