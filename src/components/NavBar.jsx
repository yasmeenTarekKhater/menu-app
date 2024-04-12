import React, { useState } from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'

const NavBar = ({searchFilter}) => {
  const [searchValue,setSearchValue]=useState('');
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#" className='text-success' >مطعم جديد</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex justify-content-end  w-100">
            <Form.Control
              type="text"
              placeholder="ابحث"
              className="me-2 w-25 "
              aria-label="Search"
              value={searchValue}
              onChange={(e)=>setSearchValue(e.target.value)}
            />
            <Button onClick={()=>searchFilter(searchValue)} className='me-4' variant="outline-success">ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar