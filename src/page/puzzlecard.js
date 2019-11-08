import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => { 
  const cardList = state[namespace].data;
  return {
    cardList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onDidMount:() => {
        dispatch({
          type:`${ namespace }/queryInitCards`
        })
      }
    }
}


@connect(mapStateToProps,mapDispatchToProps)  //获取model中的数据，dispatch action到state
class PuzzleCardsPage extends Component {

  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    let { cardList } = this.props || [];
    return (
      <div>
        {
          cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}-----{card.id}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
    </div>
    );
  }
}

export default PuzzleCardsPage