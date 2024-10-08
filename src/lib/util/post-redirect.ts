export default function postRedirect(
  url: string,
  data: Record<string, string | number | null | undefined> = {}
) {
  // Create a virtual form
  const form = document.createElement("form")
  form.method = "POST"
  form.action = url
  form.style.display = "none"

  // Add form fields for each data property
  for (const key in data) {
    const val = data[key]
    if (data.hasOwnProperty(key) && val !== null && val !== undefined) {
      const input = document.createElement("input")
      input.type = "hidden"
      input.name = key
      input.value = val.toString()
      form.appendChild(input)
    }
  }

  // Append form to body, submit it, and remove it
  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}
