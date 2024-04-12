import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';


const ItemsList = ({ menuData }) => {
  return (
    <Row>
     <Zoom>
      {menuData.length >= 1 ? (
        menuData.map((item) => {
          return (
            <Col sm="12 mb-3" key={item.id}>
              <Card className="d-flex flex-row">
                <Card.Img className="w-25" src={item.image} />
                <Card.Body className="px-4">
                  <Card.Title className="d-flex justify-content-between mb-3">
                    <div>{item.title}</div>
                    <div className="text-success">{item.price}</div>
                  </Card.Title>
                  <Card.Text style={{ color: "gray" }}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h2 className="text-center text-danger">لا يوجد وجبات</h2>
      )}
     </Zoom>
    </Row>
  );
};

export default ItemsList;
