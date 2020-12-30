import { render } from "@testing-library/react";
import React, { Component } from "react";
import Loginarea3 from '../loginarea'

export default class PlayArea extends Component {
  constructor()
  {
  super();
  this.state={
    Player1: null,
    Player2: null,
    Player3: null,
    Player4: null
   }
   this.MakeCards= this.MakeCards.bind(this);
  } 
  
  MakeCards()
  {
    const Cards=Array(51).fill({null: null});
    
    for (let i=0; i<13; i++)
    {
      Cards[i]={'spades': i+2};
    }

    
    for (let i=13; i<26; i++)
    {
      Cards[i]={'diamond': i-11};
    }

    
    for (let i=26; i<39; i++)
    {
      Cards[i]={'hearts': i-24};
    }

    
    for (let i=39; i<52; i++)
    {
      Cards[i]={'club': i-37};
    }
  
    const shuffled = Cards.sort(() => 0.5 - Math.random());
    this.setState({player1:shuffled.slice(0,13), 
      player1:shuffled.slice(13,26), player1:shuffled.slice(26,39)
      ,player1:shuffled.slice(39,52)});
  
      console.log(this.state.player1)
  }


  render() {
      
      
    return (

    <div className="home">
  <div className='tailwindheader'>
<header class="text-gray-600 body-font">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<span class="ml-3 text-xl">Play Area Rang Game</span>
</a>
<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">

<button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={this.MakeCards}>Distribute

</button>


<button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" >show player1

</button>


<button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Endgame

</button>
<a class="mr-5 hover:text-gray-900">Choose 1 player</a>
</nav>

</div>
</header>
</div>
    <div className='P1'><Loginarea3 name='1' /></div>
    <div className='P2'><Loginarea3 name='2' /></div>
    <div className='P3'><Loginarea3 name='3' /></div>
    <div className='P4'><Loginarea3 name='4' /></div>
    
    
       </div>
       
    )
    }
    }