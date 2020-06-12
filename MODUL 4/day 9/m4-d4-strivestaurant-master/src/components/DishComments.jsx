import React from "react";
import { Alert, ListGroup, Badge } from "react-bootstrap";

const DishComments = (props) => {
    console.log(props)
    return (
      <>
        {props.selectedDish && (
          <ListGroup className="mt-5">
            <h2 className="text-center mb-3">{props.selectedDish.name}</h2>
            {props.selectedDish.comments.map((comment, index) => {
              let variant = "";
              comment.rating = 
                index === 0 ? (variant = "danger", index = 1) :
                index === 1 ? (variant = "warning", index = 2) :
                index === 2 ? (variant = "secondary", index = 3) :
                index === 3 ? (variant = "success", index = 4) :
                (variant = "success", index = 5 )
              // switch (comment.rating) {
              //   case 1:
              //     variant = "danger";
              //     break;
              //   case 2:
              //     variant = "warning";
              //     break;
              //   case 3:
              //     variant = "secondary";
              //     break;
              //   default:
              //     variant = "success";
              //     break;
              // }

              return (
                <ListGroup.Item key={index}>
                  {comment.author}: {comment.comment} |{" "}
                  <Badge pill variant={variant}>
                    {comment.rating}
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
        {!props.selectedDish && (
          <Alert variant="secondary" className="mt-5">
            No dish selected, please click on a Dish to show the comments
          </Alert>
        )}
      </>
    );
}

export default DishComments;
