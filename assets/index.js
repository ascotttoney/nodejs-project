document.addEventListener('DOMContentLoaded', () => {

  form = document.getElementById('new-user-form')
  form.addEventListener('submit', handleFormSubmit)

  function handleFormSubmit(e) {
    e.preventDefault()

    const user = {
      firstName: e.target.children[0].value,
      lastName: e.target.children[2].value,
      favorite: e.target.children[4].value
    }
    JSON.stringify(user)
    console.log(user)
  }


  // Code for time of day and such
  let now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let currentTime = `${hour}${minute}`

  let time
  if (currentTime <= 1159) time = 'morning'
  else if (currentTime >= 1200 && currentTime > 1700) time = 'afternoon'
  else time = 'evening'

})