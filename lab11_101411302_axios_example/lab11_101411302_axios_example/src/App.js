import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class PersonList extends Component {
  // Define state default values
  state = {
    persons: [],
  };

  // Component Lifecycle Callback
  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data);
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">User List</h1>
        {this.state.persons.map((person) => (
          <div className="card mb-3" key={person.login.uuid}>
            <div className="card-header">
              <h5 className="card-title">
                {person.name.title} {person.name.first} {person.name.last} -{" "}
                {person.login.uuid}
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 row">
                  <img
                    src={person.picture.large}
                    alt="Person"
                    className="img-fluid"
                  />
                  <button className="btn btn-primary mt-2">Details</button>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-6 text-right">
                      <p>User Name:</p>
                      <p>Gender:</p>
                      <p>Time Zone Description:</p>
                      <p>Address:</p>
                      <p>Email:</p>
                      <p>Birth Date and Age:</p>
                      <p>Registered Date:</p>
                      <p>Phone#:</p>
                      <p>Cell#:</p>
                    </div>
                    <div className="col-6 text-left">
                      <p>{person.login.username}</p>
                      <p>{person.gender}</p>
                      <p>{person.location.timezone.description}</p>
                      <p>
                        {person.location.street.number}{" "}
                        {person.location.street.name}, {person.location.city},{" "}
                        {person.location.state}, {person.location.country} -{" "}
                        {person.location.postcode}
                      </p>
                      <p>{person.email}</p>
                      <p>
                        {person.dob.date} ({person.dob.age})
                      </p>
                      <p>{person.registered.date}</p>
                      <p>{person.phone}</p>
                      <p>{person.cell}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PersonList;
