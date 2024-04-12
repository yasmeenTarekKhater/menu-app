import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Roll } from 'react-reveal'

const Category = ({categoryFilter,allCategory}) => {
  return (
    <Row className='d-flex justify-content-center mt-2 mb-5'>
        <Col sm='12'>
            <div className='d-flex justify-content-center'>
            <Roll>
              {
                allCategory.length?allCategory.map((catButton,index)=>{
                    return(
                      <Button key={catButton} onClick={()=>categoryFilter(catButton)} className='me-4 catButton' variant="outline-success">{catButton}</Button>
                    )
                }):null
              }
              </Roll>
            </div>
        </Col>
    </Row>
  )
}

export default Category