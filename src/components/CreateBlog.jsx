import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Stack from 'react-bootstrap/Stack';
const CreateBlog = () => {
  return (
    <div >
        <div style={{width:"50vw", marginTop:"100px"}}>
        <Stack gap={3}>
        <Stack direction="horizontal" gap={3}>
            <Form.Label>Title</Form.Label>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <Button variant="secondary">Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>

    <Stack direction="horizontal" gap={3}>
        <Form.Label htmlFor='description'>Description:</Form.Label>
      <Form.Control className="me-auto" placeholder="Add your item here..." id="description" />
          <Button variant="secondary">Submit</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>

      </Stack>

        </div>
    </div>
  )
}

export default CreateBlog
