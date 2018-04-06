(function() {
  var loading = $('#loading');
  var tips = $('#tips');
  var list = $('#list');

  $.ajax({
    url: '/dalao',
    success: function(data) {
      $.each(data, function(i, d) {
        $('<li class="item">' + d + '</li>').appendTo(list);
      });
      list.show();
    },
    error: function(err) {
      tips.html(err.statusText);
    },
    complete: function() {
      loading.hide();
    }
  });

  // 注册service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function() {
      console.log('Service Worker Registered');
    });
  }
})();
