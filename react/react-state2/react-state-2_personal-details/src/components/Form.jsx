export default function Form({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Name: ", data.name);
    console.log("Email: ", data.email);

    // setName(data.name);
    // setEmail(data.email);

    onSubmit(data.name, data.email);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
