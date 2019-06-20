document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('submit', handleFormSubmit)

  function handleFormSubmit(e) {
    // e.preventDefault()

    const user = {
      lastName: e.target.children[0].value,
      favorite: e.target.children[2].value
    }

    JSON.stringify(user)
    // console.log(user)
  }
})
