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

  window.addEventListener('load', function() {
    // 注册service worker
    if (!('serviceWorker' in navigator)) {
      return;
    }

    navigator.serviceWorker.register('/service-worker.js').then(function(sw) {
      console.log('Service Worker Registered');
      window.sw = sw;
    });

    // 注册通知管理
    if (!('PushManager' in window)) {
      return;
    }

    Notification.requestPermission().then(function(res) {
      $('#btnNotice').click(function() {
        if (res != 'granted') {
          return;
        }
        sw.showNotification('Hello World!', {
          icon: 'imgs/logo-128x128.png'
        });
      });
    });
  });
})();
