import React, { Component } from "react";
import { Card } from "antd";
  
  const MyInput = ({ value='',onChange }) => 
   {
      return (
        <input value={ value } onChange={ onChange } />
   )}
  ;
  
  const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };

class Demo extends Component {
    state = {
        value:''
    }

    onTextChange = e => {
        this.setState({ value:e.target.value })
    };
    
    onTextReset = e => {
        this.setState({ value: '' })
    }

  render() {
    return (
      <div>
        <MyInput value={this.state.value} onChange={this.onTextChange} />
        <button onClick={this.onTextReset}>Reset</button>
        <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
          <Card.Meta
            avatar={
              <img
                alt=""
                style={{ width: "64px", height: "64px", borderRadius: "32px" }}
                src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
              />
            }
            title="Alipay"
            description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
          />
        </Card>
      </div>
    );
  }
}
export default Demo;
