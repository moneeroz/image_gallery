const validateForm = () => {
  const username = document.forms.feedbackForm.username.value
  const title = document.forms.feedbackForm.imageTitle.value
  const comment = document.forms.feedbackForm.comment.value
  const usernameError = document.getElementById('userNameError')
  const titleError = document.getElementById('imageTitleError')
  const commentError = document.getElementById('commentError')
  const submitBtn = document.getElementById('submitBtn')
  let isValid = true

  if (username.length < 6) {
    usernameError.innerHTML = 'Username must be at least 6 characters'
    isValid = false
  } else {
    usernameError.innerHTML = ''
  }

  if (title === '') {
    titleError.innerHTML = 'Image title cannot be empty'
    isValid = false
  } else {
    titleError.innerHTML = ''
  }

  if (comment === '') {
    commentError.innerHTML = 'Comment cannot be empty'
    isValid = false
  } else {
    commentError.innerHTML = ''
  }

  submitBtn.disabled = !isValid

  return isValid
}

window.onload = () => {
  const submitBtn = document.getElementById('submitBtn')
  submitBtn.addEventListener('click', (event) => {
    if (!validateForm()) {
      event.preventDefault()
    }
  })
}
