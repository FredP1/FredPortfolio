let linkList = window.getElementById('intro')

linkList.addEventListener('click', function() {
  let state = { page_id: 1, user_id: 5 }
  let title = ''
  let url = '/intro'
  history.pushState(null, null, url)
})
