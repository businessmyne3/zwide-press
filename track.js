
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        fetch('https://zwide-tracker.fakeapi.io/log?click=' + encodeURIComponent(link.href));
      });
    });
    