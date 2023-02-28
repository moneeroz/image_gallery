const validateForm = () => {
  // Grabbing all the needed elements
  const username = document.forms.feedbackForm.username.value
  const title = document.forms.feedbackForm.imageTitle.value
  const comment = document.forms.feedbackForm.comment.value
  const usernameError = document.getElementById('userNameError')
  const titleError = document.getElementById('imageTitleError')
  const commentError = document.getElementById('commentError')
  const submitBtn = document.getElementById('submitBtn')
  let isValid = true

  // Validating the username
  if (username.length < 6) {
    usernameError.innerHTML = 'Username must be at least 6 characters'
    isValid = false
  } else {
    usernameError.innerHTML = ''
  }

  //  Validating the image title
  if (title === '') {
    titleError.innerHTML = 'Image title cannot be empty'
    isValid = false
  } else {
    titleError.innerHTML = ''
  }

  // Validating the comment text area
  if (comment === '') {
    commentError.innerHTML = 'Comment cannot be empty'
    isValid = false
  } else {
    commentError.innerHTML = ''
  }

  submitBtn.disabled = !isValid

  return isValid
}

// Preventing the form from submitting before our javascript validation loads
window.onload = () => {
  const submitBtn = document.getElementById('submitBtn')
  submitBtn.addEventListener('click', (event) => {
    if (!validateForm()) {
      event.preventDefault()
    }
  })
}
