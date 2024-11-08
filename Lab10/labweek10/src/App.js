import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      address2: "",
      city: "",
      province: "",
      postalCode: "",
      terms: false,
      submitted: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { terms } = this.state;
    if (terms) {
      this.setState({ submitted: true });
    } else {
      alert("You must agree to the terms and conditions before submitting.");
    }
  };

  render() {
    const {
      name,
      email,
      address,
      address2,
      city,
      province,
      postalCode,
      terms,
      submitted,
    } = this.state;

    return (
      <div className="App">
        <h1>Data Entry Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="two-column">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            placeholder="1234 Main St"
            value={address}
            onChange={this.handleChange}
          />
          <label className="label">Address 2</label>
          <input
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={address2}
            onChange={this.handleChange}
          />
          <div className="three-column">
            <div>
              <label className="label">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label className="label">Province</label>
              <select
                name="province"
                value={province}
                onChange={this.handleChange}
              >
                <option value="">Choose...</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">
                  Newfoundland and Labrador
                </option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">
                  Prince Edward Island
                </option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
              </select>
            </div>
            <div>
              <label className="label">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={postalCode}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="checkbox-inline">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={terms}
              onChange={this.handleChange}
            />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>

        {submitted && (
          <div>
            <h2>Information entered:</h2>
            <p>Email: {email}</p>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            <p>Address 2: {address2}</p>
            <p>City: {city}</p>
            <p>Province: {province}</p>
            <p>Postal Code: {postalCode}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
