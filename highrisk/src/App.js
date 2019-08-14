import { Layout, Form, Input, Button } from 'antd';
import React, { Component } from 'react';
const { Header } = Layout;

class highriskadduser extends Component {

writedata() {

}

render(){
  return (
      <Layout>
      <Header>User Incident Form</Header>
      <Layout.Content>
        <Form ID="UserInfo" layout="inline" style={{ width: '90vw', margin: '0 auto' }}>
        <h2>Add User to High Risk Database </h2>
          <Form.Item label="UPN/Email Address" id="UPN">
            <Input placeholder="dorris.day@jjrichards.com.au" />
          </Form.Item>
          <br />
          <Form.Item label="Job Title" id="Title">
            <Input placeholder="Sales Person, Manager, etc" />
          </Form.Item>
          <br />
          <Form.Item label="Incident" id="incident">
            <Input placeholder="User clicked on SPAM" />
          </Form.Item>
          <br />
          <Form.Item label="ServiceDesk Job #" id="job">
            <Input placeholder="Job # or URL" />
          </Form.Item>
          <br />
          <Button type="primary" onClick={(e) => this.writedata(e)}>Submit</Button>
        </Form>
      </Layout.Content>
    </Layout>
  );
  }
}

export default highriskadduser;
