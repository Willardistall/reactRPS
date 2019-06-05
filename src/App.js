import React from 'react';
import OptionBox from "./Components/OptionBox"
import rock from "./images/rock.jpg"
import paper from "./images/paper.jpg"
import scissor from "./images/scissors.jpg"
import { Header, Divider, Grid, Container, Segment, GridColumn } from "semantic-ui-react";

class App extends React.Component {
  state = { userChoice: null, compChoice: null, };


  optionClick = (option) => {

  };

  render() {
    return (

    <Container style={{ marginTop: "25px", }}>
       <Header as="h1" textAlign='center'> Rock .:. Paper .:. Scissors </Header>
      
       <hr />
      <Segment>
      <Grid columns={2} >
        <Grid.Column>
        <Header as="h3" textAlign='center'>.:Player 1: (display wins):.</Header>
          <OptionBox name="rock" img={rock} optionClick={this.optionClick}/>
          
          <OptionBox name="paper" img={paper} optionClick={this.optionClick}/>
          
          <OptionBox name="scissor" img={scissor} optionClick={this.optionClick}/>
        </Grid.Column>
        <Grid.Column>
        <Header as="h3" textAlign='center'>.:Computer: (display wins):.</Header>
          <OptionBox name="rock" img={rock} optionClick={this.optionClick}/>
          
          <OptionBox name="paper" img={paper} optionClick={this.optionClick}/>
          
          <OptionBox name="scissor" img={scissor} optionClick={this.optionClick}/>
        </Grid.Column>
      </Grid>
  
          <Divider vertical>WINNER HERE</Divider>
        </Segment>
        <hr />
      <div class="selections" >
            <div className='playerChoice'>You Chose
            </div>
              
            <div className='computerChoice'>Computer Chose
            </div>
      </div>

            
        <hr />
    </Container>
    
    );
  }
}

export default App;
