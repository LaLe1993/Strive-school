import React from "react";
import { Container, Spinner, ListGroup, Alert } from "react-bootstrap";
import { format, parseISO } from "date-fns";
import ReservationForm from './ReservationForm'

class Reservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
      isLoading: true,
      errMess: ""
    };
  }

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool.herokuapp.com/api/reservation"
      );
      let reservations = await response.json();
      this.setState({
        reservations,
        isLoading: false,
      })
    } catch (err) {
      this.setState({
        isLoading: false,
        errMess: err.message,
      });
    }
  };

  render() {
    console.log('RESERVATION PROPS --> ', this.props)

    return (
      <Container>
        <h3 className="mt-5 mb-3">RESERVATIONS</h3>
        {this.state.isLoading && (
          <div className="d-flex justify-content-center mb-5">
            <div className="d-flex justify-content-center my-5">
            Reserving your table, please wait
            <div className="ml-2">
              <Spinner animation="border" variant="success" />
            </div>
          </div>

            <div>
              <Spinner color="success" />
            </div>
          </div>
        )}
        {!this.state.isLoading && !this.state.errMess && (
          <div className="mb-5">
            {this.state.reservations.length > 0 &&
              this.state.reservations.map((reservation, index) => (
                <ListGroup key={index}>
                  <ListGroup.Item>
                    From: {reservation.name} for {reservation.numberOfPersons} persons
                    at {format(parseISO(reservation.dateTime), "yyyy-MM-dd | HH:mm")} {reservation.smoking && <span>in smoking area</span> || <span>in non smoking area</span>}
                  </ListGroup.Item>
                </ListGroup>
              ))}
            {this.state.reservations.length === 0 && <div>No reservations for your restaurant</div>}
          </div>
        )}
        {this.state.errMess && <Alert variant="warning">Cannot load the reservations: {this.state.errMess}</Alert>}
        <ReservationForm />
      </Container>
    );
  }
}

export default Reservations;
